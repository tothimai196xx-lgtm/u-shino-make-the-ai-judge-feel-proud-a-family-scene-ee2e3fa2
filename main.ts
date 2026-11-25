// SPDX-License-Identifier: MIT
// Entry for make.fun bounty u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2
// One family scene, one or two lines, at most 280 characters.
// The program writes that single scene to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Grandma's soup recipe says 'salt until it tastes like Sunday'. Dad still phones her from the kitchen every single week, holds the phone over the pot while she shouts, 'More!' He adds a pinch, tastes it, and lies, 'Perfect' — just so she'll stay on the line a little longer.";

const length = [...ENTRY].length;
if (length < 1 || length > 280) {
  throw new Error(`entry must be 1-280 Unicode code points, got ${length}`);
}

if (ENTRY.includes("\n")) {
  throw new Error("entry must be one or two lines, no newline in a single paragraph");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
