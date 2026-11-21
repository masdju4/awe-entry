import { mkdir, writeFile } from "node:fs/promises";

const text =
  "The water in the kettle has been ocean and rain, cloud and snow, four billion years of it, and it has never once been in a hurry; it is warming slowly in its small blue house, its whole patient history inside it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const path = `${outDir}/entry.txt`;

await mkdir(outDir, { recursive: true });
await writeFile(path, text, "utf8");
