import { Project, SyntaxKind } from 'ts-morph';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/App.tsx');

const texts = new Set<string>();

sourceFile.getDescendantsOfKind(SyntaxKind.JsxText).forEach(node => {
  const text = node.getText().trim();
  if (text.length > 0 && /[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(text)) {
    texts.add(text);
  }
});

sourceFile.getDescendantsOfKind(SyntaxKind.StringLiteral).forEach(node => {
  const text = node.getLiteralValue().trim();
  if (text.length > 0 && /[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(text)) {
    texts.add(text);
  }
});

console.log(Array.from(texts).join('\n'));
