// Generates the skill's reference files from the same data the website uses,
// so the skill never drifts from switchtomac.app.
//
//   npm run skill:generate
//
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  CATS,
  MODS,
  SHORTCUTS,
  TASKS,
  catName,
  type KeySpec,
} from "../../lib/shortcuts";
import { GESTURES } from "../../lib/gestures";

const here = dirname(fileURLToPath(import.meta.url));
const refDir = join(here, "..", "reference");
mkdirSync(refDir, { recursive: true });

const SITE = "switchtomac.app";

function keys(spec: KeySpec): string {
  return Array.isArray(spec) ? spec.join(" ") : spec;
}

// --- shortcuts.md ---------------------------------------------------------
const shortcutsBody: string[] = [
  "# Windows to Mac keyboard shortcuts",
  "",
  `Source: ${SITE}`,
  "",
  "The core idea: on a Mac you press Command (⌘) where you used to press Ctrl, and most shortcuts come straight back.",
  "",
  "## The three modifier-key swaps",
  ...MODS.map((m) => `- ${m.win} → ${keys(m.mac)} (${m.name}). ${m.body}`),
  "",
  "## Shortcuts by category",
];

for (const cat of CATS) {
  const rows = SHORTCUTS.filter((s) => s.c === cat.id);
  if (!rows.length) continue;
  shortcutsBody.push("", `### ${cat.name}`);
  for (const s of rows) {
    const win = s.w === "-" ? "no Windows equivalent" : `\`${keys(s.w)}\``;
    const note = s.n ? ` ${s.n}` : "";
    shortcutsBody.push(`- ${s.a}: ${win} → \`${keys(s.m)}\`.${note}`);
  }
}

writeFileSync(join(refDir, "shortcuts.md"), shortcutsBody.join("\n") + "\n");

// --- tasks.md -------------------------------------------------------------
const tasksBody: string[] = [
  "# Everyday Mac tasks (coming from Windows)",
  "",
  `Source: ${SITE}`,
  "",
  "Things that do not map to a single keystroke, with the Windows way next to the Mac way.",
];

for (const t of TASKS) {
  tasksBody.push(
    "",
    `### ${t.t}`,
    `- Category: ${catName(t.c)}`,
    `- Windows: ${keys(t.win)}`,
    `- Mac: ${keys(t.m)}`,
    `- How to: ${t.how}`
  );
}

writeFileSync(join(refDir, "tasks.md"), tasksBody.join("\n") + "\n");

// --- gestures.md ----------------------------------------------------------
const gesturesBody: string[] = [
  "# Mac trackpad gestures",
  "",
  `Source: ${SITE}`,
  "",
  "Most are on by default. You can see or change them in System Settings, under Trackpad.",
];

for (const g of GESTURES) {
  gesturesBody.push(
    "",
    `### ${g.name}`,
    `- Gesture: ${g.instruction}`,
    `- What it does: ${g.use}`
  );
}

writeFileSync(join(refDir, "gestures.md"), gesturesBody.join("\n") + "\n");

console.log(
  `Generated skill reference: ${SHORTCUTS.length} shortcuts, ${TASKS.length} tasks, ${GESTURES.length} gestures.`
);
