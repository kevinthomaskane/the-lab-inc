// Regenerates everything under schemas/ and faq/ from constants/.
//   node generateSchema.js
//
// Outputs
//   schemas/common-schemas.html   WebSite + LocalBusiness/NGO  -> site-wide Header Code Injection
//   schemas/service-schemas.html  one Service per offering     -> site-wide Header Code Injection
//   schemas/faq-schema.html       FAQPage                      -> Header Code Injection of the page that shows the FAQ
//   faq/faq-block.html            visible FAQ accordion        -> Code Block on that same page
//   faq/index.html                local demo of the block
//   faq/paste-sheet.md            FAQ text for populating native Accordion blocks

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SERVICES } from './constants/services.js';
import { FAQ, FAQ_CATEGORIES } from './constants/faq.js';
import {
  websiteSchema,
  getLocalBusinessSchema,
  getServiceSchema,
  getFAQPageSchema,
} from './schemas.js';
import { renderFaqBlock, renderFaqDemo } from './faq/render.js';
import { renderPasteSheet } from './faq/paste-sheet.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const schemasDir = path.resolve(__dirname, 'schemas');
const faqDir = path.resolve(__dirname, 'faq');

const ldJson = (data) =>
  `<script type="application/ld+json">\n${JSON.stringify(data, null, 2)}\n</script>`;

const graph = (nodes) =>
  ldJson({ '@context': 'https://schema.org', '@graph': nodes });

function write(file, content) {
  fs.writeFileSync(file, content.trimEnd() + '\n');
  console.log(`Written: ${path.relative(__dirname, file)}`);
}

// Schemas
write(
  path.join(schemasDir, 'common-schemas.html'),
  graph([websiteSchema, getLocalBusinessSchema(SERVICES)])
);
write(
  path.join(schemasDir, 'service-schemas.html'),
  graph(SERVICES.map(getServiceSchema))
);
const faqSchema = ldJson(getFAQPageSchema(FAQ));
write(path.join(schemasDir, 'faq-schema.html'), faqSchema);

// FAQ block + demo
const block = renderFaqBlock(FAQ, FAQ_CATEGORIES);
write(path.join(faqDir, 'faq-block.html'), block);
write(path.join(faqDir, 'index.html'), renderFaqDemo(block, faqSchema));
write(path.join(faqDir, 'paste-sheet.md'), renderPasteSheet(FAQ, FAQ_CATEGORIES));
