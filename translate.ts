import { Project, SyntaxKind } from "ts-morph";
import { GoogleGenAI } from "@google/genai";
import fs from "fs/promises";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function translateBatch(texts: string[]): Promise<string[]> {
  if (texts.length === 0) return [];
  
  const prompt = `Translate the following Spanish texts to English. 
Return ONLY a JSON array of strings, in the exact same order.
Do not change any formatting, spacing, or punctuation if possible.
If a text is already in English, leave it as is.
If a text is just a number or symbol, leave it as is.

Texts:
${JSON.stringify(texts, null, 2)}`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      temperature: 0.1,
      responseMimeType: "application/json",
    }
  });

  try {
    const translated = JSON.parse(response.text);
    if (Array.isArray(translated) && translated.length === texts.length) {
      return translated;
    } else {
      console.error("Length mismatch or not an array:", translated);
      return texts;
    }
  } catch (e) {
    console.error("Failed to parse JSON:", response.text);
    return texts;
  }
}

async function main() {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath("src/App.tsx");

  const textsToTranslate: { node: any; text: string; isAttribute: boolean }[] = [];

  // Find JsxText
  const jsxTexts = sourceFile.getDescendantsOfKind(SyntaxKind.JsxText);
  for (const node of jsxTexts) {
    const text = node.getText();
    if (text.trim().length > 0 && /[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(text)) {
      textsToTranslate.push({ node, text, isAttribute: false });
    }
  }

  // Find JsxExpression containing strings
  const jsxExpressions = sourceFile.getDescendantsOfKind(SyntaxKind.JsxExpression);
  for (const node of jsxExpressions) {
    const stringLiterals = node.getDescendantsOfKind(SyntaxKind.StringLiteral);
    for (const strNode of stringLiterals) {
      const text = strNode.getLiteralValue();
      if (text.trim().length > 0 && /[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(text)) {
        // Skip some common non-translatable strings like classNames
        if (node.getParent()?.getKind() === SyntaxKind.JsxAttribute) {
            const attrName = node.getParent()?.asKind(SyntaxKind.JsxAttribute)?.getNameNode()?.getText();
            if (attrName === 'className' || attrName === 'src' || attrName === 'alt' || attrName === 'href') continue;
        }
        textsToTranslate.push({ node: strNode, text, isAttribute: true });
      }
    }
  }

  // Find StringLiterals in JsxAttributes directly
  const jsxAttributes = sourceFile.getDescendantsOfKind(SyntaxKind.JsxAttribute);
  for (const attr of jsxAttributes) {
    const name = attr.getNameNode().getText();
    if (name === 'placeholder' || name === 'alt' || name === 'title') {
      const init = attr.getInitializer();
      if (init && init.getKind() === SyntaxKind.StringLiteral) {
        const text = init.getLiteralValue();
        if (text.trim().length > 0 && /[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(text)) {
          textsToTranslate.push({ node: init, text, isAttribute: true });
        }
      }
    }
  }

  console.log(`Found ${textsToTranslate.length} texts to translate.`);

  // Deduplicate and batch
  const uniqueTexts = Array.from(new Set(textsToTranslate.map(t => t.text)));
  console.log(`Unique texts: ${uniqueTexts.length}`);

  const batchSize = 50;
  const translatedMap = new Map<string, string>();

  for (let i = 0; i < uniqueTexts.length; i += batchSize) {
    const batch = uniqueTexts.slice(i, i + batchSize);
    console.log(`Translating batch ${i / batchSize + 1}/${Math.ceil(uniqueTexts.length / batchSize)}...`);
    const translatedBatch = await translateBatch(batch);
    for (let j = 0; j < batch.length; j++) {
      translatedMap.set(batch[j], translatedBatch[j] || batch[j]);
    }
  }

  // Apply translations
  for (const { node, text, isAttribute } of textsToTranslate) {
    const translated = translatedMap.get(text);
    if (translated && translated !== text) {
      if (isAttribute) {
        node.replaceWithText(`"${translated.replace(/"/g, '\\"')}"`);
      } else {
        // For JsxText, we need to be careful with braces and newlines
        // If the original text had newlines/spaces, try to preserve them
        const leadingSpace = text.match(/^\s*/)?.[0] || "";
        const trailingSpace = text.match(/\s*$/)?.[0] || "";
        node.replaceWithText(`${leadingSpace}${translated}${trailingSpace}`);
      }
    }
  }

  await sourceFile.save();
  console.log("Done!");
}

main().catch(console.error);
