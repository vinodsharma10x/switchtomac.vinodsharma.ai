# Switch to Mac — an installable skill

Ask your AI agent for the Mac equivalent of any Windows shortcut, how to do a
task on a Mac, or how a trackpad gesture works, and get a precise answer without
opening a website. The answers come from the verified data behind
[switchtomac.app](https://switchtomac.app).

Examples:

- "What's Ctrl+C on a Mac?" → `Cmd C`
- "What does Cmd Shift 4 do?" → capture part of the screen
- "How do I right-click on a Mac?" → tap with two fingers (or Control click)
- "How do I force quit on a Mac?" → `Cmd Option Esc`
- "Show me all the keyboard mappings"

It answers only from the bundled reference, so it does not make shortcuts up.

## What's in here

```
SKILL.md            The skill for Claude (name, description, answer rules)
reference/
  shortcuts.md      Windows to Mac keyboard shortcuts, by category
  tasks.md          Everyday tasks with how-tos
  gestures.md       Trackpad gestures
codex/
  prompt.md         Codex slash-command version
  AGENTS.md         Codex persistent-instructions version
scripts/generate.mts  Regenerates reference/ from the site's data
```

## Install in Claude

**Claude Code (personal):** copy this `skill/` folder into `~/.claude/skills/switch-to-mac/`
(so `SKILL.md` sits at `~/.claude/skills/switch-to-mac/SKILL.md`). Restart Claude
Code. Then just ask a switching question.

**Claude Code (one project):** copy it into `.claude/skills/switch-to-mac/` inside
that project.

**Claude.ai:** zip the `switch-to-mac/` folder (with `SKILL.md` and `reference/`)
and upload it under Settings → Skills.

## Install in Codex

**As a slash command:** copy `codex/prompt.md` and the `reference/` folder into
`~/.codex/prompts/`, naming the prompt `switch-to-mac.md`. Run it with
`/switch-to-mac`.

**As always-on instructions:** copy the contents of `codex/AGENTS.md` into your
project's `AGENTS.md`, and keep the `reference/` folder alongside it.

## Keeping it in sync with the site

The reference files are generated from the same data the website runs on, so they
never drift. To regenerate after the site's shortcuts or tasks change:

```bash
npm run skill:generate
```

This reads `lib/shortcuts.ts` and `lib/gestures.ts` and rewrites `skill/reference/`.

## License

MIT. A skill by [Vinod Sharma](https://vinodsharma.ai), from
[switchtomac.app](https://switchtomac.app).
