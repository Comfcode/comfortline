---
name: Build-time regex extraction of object literals from TS/TSX source
description: Pattern and gotcha for scripts (e.g. prerender.mjs) that parse .ts/.tsx source text at build time via regex + brace-balancing instead of importing/compiling it.
---

## Pattern

When a Node build script (no TS execution, e.g. a plain `.mjs` prerender/SSG
script) needs structured data that lives in `.tsx`/`.ts` source (page SEO
props, data arrays like a blog CMS array), it's often better to parse the
source text directly at build time than to hand-copy/duplicate the content
into the script. Hand-copied duplicates drift out of sync silently (e.g. a
prerender script showing RU content on English routes because someone forgot
to update it after adding an `EN` field to the source of truth).

Approach: a small regex+brace-balance extractor —
1. Find a marker regex (e.g. `const data\s*:\s*\w+\s*=\s*` or `<Seo\b`).
2. From the END of that match, find the first `{`/`[` and walk forward
   counting depth to find the matching close — this correctly handles nested
   objects/arrays without a full parser.
3. Run simple `key: "value"` / `key="value"` field regexes against the
   extracted slice.

## Gotcha (cost >1 debugging pass)

When locating the opening brace after a marker match, search from
`match.index + match[0].length`, NOT from `match.index`. If the marker itself
contains an object-shaped TS type annotation with its own braces (e.g.
`const x: Record<string, { a: string; b: string }> = { ... }`), searching
from `match.index` finds the type annotation's `{...}` instead of the real
value literal — silently returns wrong/empty data with no error.

**Why:** `indexOf("{", match.index)` finds the first `{` anywhere at or after
the match start, which includes braces inside the marker text itself when the
marker regex intentionally spans through a type annotation.

**How to apply:** always advance the search cursor past the full matched
marker string before scanning for the opening brace/bracket.
