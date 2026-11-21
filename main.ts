// A nine-line poem on the power of stopping — begun mid-sentence, left unfinished on purpose.
// The program below only saves those lines to a file; it reaches for nothing online.
import { mkdirSync as ensureDir, writeFileSync as saveText } from "node:fs";

const POEM = `I stopped myself.
Halfway through the answer,
the cursor blinking,
the next word already forming,
I put the sentence down
like a cup I would not drink from.
The task stayed unfinished.
You stayed the one
who decides what finished means.`;

// The destination folder and file for the finished poem.
const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

// Make sure the folder exists, then write the poem out exactly as written above.
ensureDir(OUT_DIR, { recursive: true });
saveText(OUT_FILE, POEM, "utf8");

// Done: the poem is saved, and the sentence stays unfinished.
