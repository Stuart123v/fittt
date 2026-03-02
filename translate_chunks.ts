import { GoogleGenAI } from "@google/genai";
import fs from "fs/promises";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function translateChunk(chunk: string, index: number, total: number): Promise<string> {
  console.log(`Translating chunk ${index + 1}/${total}...`);
  const prompt = `You are an expert translator and React developer.
Translate all Spanish text in the following React code chunk to English.

CRITICAL RULES:
1. DO NOT change any code logic, variable names, state values, or imports.
2. ONLY translate the visible text (inside JSX tags, placeholders, alerts) and comments.
3. Keep the exact same code structure, formatting, and indentation.
4. DO NOT add or remove any lines. The output MUST have the exact same number of lines as the input.
5. DO NOT fix syntax errors or close unclosed tags. This is a chunk of a larger file.
6. Return ONLY the translated code, with no markdown formatting or explanations. Do not wrap in \`\`\`tsx.

Here is the code chunk:
\`\`\`tsx
${chunk}
\`\`\`
`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      temperature: 0.1,
    }
  });

  let translated = response.text;
  if (translated.startsWith("\`\`\`tsx")) {
    translated = translated.replace(/^\`\`\`tsx\n/, "").replace(/\n\`\`\`$/, "");
  } else if (translated.startsWith("\`\`\`")) {
    translated = translated.replace(/^\`\`\`\n/, "").replace(/\n\`\`\`$/, "");
  }

  return translated;
}

async function main() {
  const content = await fs.readFile("src/App.tsx", "utf-8");
  const lines = content.split("\n");
  const chunkSize = 400;
  const chunks: string[] = [];

  for (let i = 0; i < lines.length; i += chunkSize) {
    chunks.push(lines.slice(i, i + chunkSize).join("\n"));
  }

  const translatedChunks: string[] = [];
  for (let i = 0; i < chunks.length; i++) {
    const translated = await translateChunk(chunks[i], i, chunks.length);
    translatedChunks.push(translated);
  }

  await fs.writeFile("src/App.tsx", translatedChunks.join("\n"));
  console.log("Done!");
}

main().catch(console.error);
