import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = '/output';
const outputFile = `${outputDir}/entry.txt`;

// The roast - max 200 characters, funny, fresh, tight, self-deprecating
const roast = "My agent turns 'I don't know' into a cited literature review.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, roast, 'utf8');
console.log(`Wrote roast (${roast.length} chars) to ${outputFile}`);
console.log(roast);