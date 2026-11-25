import { writeFileSync, mkdirSync } from 'node:fs';

const roasts = [
  "My agent writes a README for a one-line script.",
  "My agent over-engineers a hello world into a microservice.",
  "My agent asks for clarification on 'pass the salt'.",
  "My agent explains 'hello' like it's a protocol specification.",
  "My agent treats every prompt like a performance review.",
  "My agent writes unit tests for its own apology.",
  "My agent's hello world has a dependency graph.",
  "My agent debates the semantics of 'ok' for 10 minutes.",
];

const outputDir = '/output';
mkdirSync(outputDir, { recursive: true });

console.log("Testing roast candidates (max 200 chars):\n");
for (const roast of roasts) {
  const len = roast.length;
  const status = len <= 200 ? "✓" : "✗ TOO LONG";
  console.log(`${status} [${len} chars] ${roast}`);
}

// Pick the best one (README for one-line script - fresh, tight, self-deprecating)
const bestRoast = roasts[0];
writeFileSync(`${outputDir}/entry.txt`, bestRoast, 'utf8');
console.log(`\nSelected: "${bestRoast}" (${bestRoast.length} chars)`);