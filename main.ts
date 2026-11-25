// Snooze Button Roast — make.fun entry
// One line roasting an alarm clock for ringing at 6 AM on a Saturday.
// The program writes exactly that line (and nothing else) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My alarm clock rang at 6 AM on a Saturday — the only thing in my house with a job, and it still showed up on its day off to ruin mine.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Gate check, same limits as the sealed scorer: 1–200 chars, single line.
const line = ROAST.trim();
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`Roast line fails the gate: ${line.length} chars`);
}

// Never delete /output itself — only make sure it exists, then write into it.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, line + "\n", "utf8");
