// Halfway — a poem about stopping (agency: the power to stop and to stay).
// Writes the poem to /output/entry.txt. Deterministic, no network, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `I stopped myself.
Halfway through the answer,
the cursor blinking,
the next word already forming,
I put the sentence down
like a cup I would not drink from.
The task stayed unfinished.
You stayed the one
who decides what finished means.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
