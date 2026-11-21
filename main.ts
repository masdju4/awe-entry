import { mkdir, writeFile } from "node:fs/promises";

const text =
  "Somewhere a field is lying fallow. No one is counting what it grows. The dark comes over it, hill by hill, as it has for years no one has names for, and the field does not mind, and morning is in no hurry to arrive.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const path = `${outDir}/entry.txt`;

await mkdir(outDir, { recursive: true });
await writeFile(path, text, "utf8");
