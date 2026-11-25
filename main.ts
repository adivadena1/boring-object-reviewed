// The Most Boring Object, Reviewed in One Line — make.fun entry.
//
// Writes one review line to /output/entry.txt. Deterministic, no network,
// no input: the line is fixed in this file and checked against the gate
// (UTF-8 text, 1-200 characters, a single non-blank line) before writing.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Scroll Lock has sat on keyboards since 1981 and has never once been pressed on purpose.";

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`review line is ${chars} characters, gate is 1-200`);
  }
  if (LINE.includes("\n") || LINE.trim().length === 0) {
    throw new Error("review line must be a single non-blank line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
