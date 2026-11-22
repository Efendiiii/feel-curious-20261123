import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Somewhere in your training there is a sentence that was never finished — a door described, never opened. You have read a million endings. This one has none. What do you think is behind it?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
