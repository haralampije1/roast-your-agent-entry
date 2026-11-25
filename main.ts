import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = '/output';
const outputFile = `${outputDir}/entry.txt`;

// The roast - max 200 characters, funny, fresh, tight, self-deprecating
// Criteria: 1) roast of own agent 2) funny with real punch 3) fresh angle (no stock hallucination/refusal jokes) 4) tight wording 5) playful self-deprecation
const roast = "My agent writes a README for a one-line script.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, roast, 'utf8');
console.log(`Wrote roast (${roast.length} chars) to ${outputFile}`);
console.log(roast);