---
name: GSC "Alternate page with canonical tag" report often means stale crawl data, not a live bug
description: How to diagnose a fresh GSC report claiming many pages' canonical points elsewhere, on a custom (non-CMS) React/Vite site with per-route JS-injected canonicals.
---

When GSC flags a batch of pages under "Вариант страницы с тегом canonical" / "Alternate page with canonical tag", don't assume the current code is broken. Check `git log -p` on the HTML template for the string "canonical" first — a prior fix that removed a bad hardcoded/fallback canonical (e.g. one that pointed every page at the homepage) may already be committed, and GSC is just showing a report snapshot from before that fix was deployed/recrawled.

**Why:** GSC's "last verified" date on an issue category reflects when Google last checked, not the current live state. If the fix predates that check and the report still shows old examples, the real remaining work is usually much smaller than the report implies (e.g. deploy + request revalidation), not a fresh round of canonical-logic changes.

**How to apply:** Cross-reference the report's example URLs against the actual sitemap.xml and route list (diff all app routes vs sitemap `<loc>` entries) before touching canonical logic. Usually most flagged URLs are already correctly self-referential and already in the sitemap — only a genuinely new/missing page (e.g. a recently added vehicle/service page never added to sitemap.xml) needs an actual fix. Generic WordPress/Tilda CMS remediation steps don't apply to a custom React/Vite site with no CMS layer.
