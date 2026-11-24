import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The old man at the market slipped an extra mango into my bag and whispered, 'for the road,' like we were escaping together.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error("entry must be 1-200 characters");
  }
  if (!line.trim()) {
    throw new Error("entry must not be blank");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be one line");
  }
}

validate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
