---
name: Orval api-zod schemas are types only
description: api-zod generated package in this workspace exports TS interfaces, not runtime zod schemas — calling .parse() on them fails at compile time.
---

In this workspace's Orval codegen setup, `lib/api-zod/src/generated/types/*` exports plain TypeScript `interface`s (type-only), not zod runtime schema objects, despite the package name `api-zod`. There is no `.parse()` method available on these exports.

**Why:** Assumed schema names like `BorderQueueStatus` were zod objects (common Orval zod-client pattern) and called `BorderQueueStatus.parse({...})` in a server route. TypeScript correctly errored with "only refers to a type, but is being used as a value" (TS2693).

**How to apply:** When building a response body in an API route, just construct a plain object typed with the interface (`const body: BorderQueueStatus = {...}`) and pass it to `res.json(body)` — skip runtime `.parse()` validation unless you find an actual zod schema value exported (check `lib/api-zod/src/generated/api.ts` for schema exports, not just `types/index.ts`).
