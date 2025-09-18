import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SERVICES } from './constants/services.js';
import { FAQ } from './constants/faq.js';
import {
  localBusinessSchema,
  websiteSchema,
  getServiceSchema,
  getFAQPageSchema,
} from './schemas.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSchemas() {
  const outputDir = path.resolve(__dirname, 'schemas');

  const data = [
    generateCommonSchemas(outputDir),
    generateServiceSchemas(outputDir),
  ];

  data.forEach(({ graph, file }) => {
    const fileContent = `
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@graph": [${graph}]
        }
      </script>`;
    fs.writeFileSync(file, fileContent.trim());
    console.log(`Schema written to ${file}`);
  });

  const faq = getFAQPageSchema(FAQ);
  const file = path.resolve(outputDir, 'faq-schema.html');
  const fileContent = `
      <script type="application/ld+json">
          ${JSON.stringify(faq, null, 2)}
      </script>`;
  fs.writeFileSync(file, fileContent.trim());
  console.log(`Schema written to ${file}`);
}

function generateCommonSchemas(outputDir) {
  const file = path.resolve(outputDir, 'common-schemas.html');
  const graph = [
    JSON.stringify(websiteSchema, null, 2),
    JSON.stringify(localBusinessSchema, null, 2),
  ];
  return { graph, file };
}

function generateServiceSchemas(outputDir) {
  const file = path.resolve(outputDir, 'service-schemas.html');
  const graph = SERVICES.map(({ name, description, url }) =>
    JSON.stringify(getServiceSchema(name, description, url), null, 2)
  );
  return { graph, file };
}

generateSchemas();

// const tasks = {
//   organizationSchema: () => generateStaticSchema('organizationSchema'),
//   websiteSchema: () => generateStaticSchema('websiteSchema'),
//   localBusinessSchema: () => generateStaticSchema('localBusinessSchema'),
//   getServiceSchema: 'getServiceSchema',
//   getFAQPageSchema: 'getFAQPageSchema',
//   listSchemas: () => {
//     import('./schemas.js').then((schemas) => {
//       console.log('Available schemas:', Object.keys(schemas));
//     });
//   },
// };
//
// if (!task) {
//   console.error('Please provide a task name.\nAvailable tasks:');
//   (async () => {
//     const schemas = await import('./schemas.js');
//     console.log(Object.keys(schemas));
//     process.exit(1);
//   })();
// } else {
//   //execute the task
//   tasks[task]();
// }
//
// async function generateStaticSchema(name) {
//   const schemas = await import('./schemas.js');
//   try {
//     const schema = schemas[name];
//     fs.writeFileSync(
//       path.resolve(__dirname, `schemas/${name}.html`),
//       `<script type="application/ld+json">
//         ${JSON.stringify(schema, null, 2)}
//        </script>`
//     );
//   } catch (error) {
//     console.error('Error generating schema:', error);
//   }
// }
