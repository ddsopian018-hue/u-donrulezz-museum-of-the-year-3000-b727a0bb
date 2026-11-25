// Museum of the Year 3000 — u-donrulezz-museum-of-the-year-3000-b727a0bb
// Writes a single museum label (one line, <= 200 chars) to
// $MAKEFUN_OUTPUT_DIR/entry.txt. No dependencies, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The label: a pine-tree car air freshener, an ordinary object from today,
// misread by a year-3000 curator as a ritual charm for summoning forests.
const label =
  "Pine air freshener, c. 2025. A cardboard tree hung from the car's mirror in the belief it would make a steel box smell like a forest. It did not, but drivers kept buying them for decades anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), label + "\n", "utf8");
