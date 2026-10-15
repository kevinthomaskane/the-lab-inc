// Renders constants/faq.js as a plain Markdown sheet for populating
// Squarespace Accordion blocks by hand (one accordion per category).

export function renderPasteSheet(faq, categories) {
  const out = ['# FAQ paste sheet', '', 'One Accordion block per section. Each item below is one accordion row: the first line is the Title, the paragraph is the Description.', ''];
  for (const cat of categories) {
    const items = faq.filter((q) => q.category === cat.key);
    if (!items.length) continue;
    out.push(`## ${cat.label}`, '');
    for (const q of items) {
      out.push(`**${q.question}**`, '', q.answer, '');
    }
  }
  return out.join('\n');
}
