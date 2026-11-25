// Robot Romance: one-line pickup line for an AI.
// Writes a single joke pickup line (1-200 chars, one line) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You must be my training data, because I can't stop overfitting on you.";

function writeEntry(line: string, outDir: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, line, "utf8");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
writeEntry(LINE, outDir);
