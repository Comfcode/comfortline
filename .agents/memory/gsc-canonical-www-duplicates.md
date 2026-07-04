---
name: GSC "page is a duplicate, canonical not user-selected" on www/non-www
description: What actually fixes Google Search Console duplicate-content warnings for a site that already has correct rel=canonical tags.
---

A site can have fully correct, self-referential `<link rel="canonical">` tags on every page (verified in Seo/meta code) and STILL get flagged in Google Search Console as "Страница является копией. Канонический вариант не выбран пользователем" (duplicate, canonical not user-selected).

**Why:** Google treats a `rel="canonical"` tag as a hint, not a directive — especially weak when the duplicate is reachable on a different host (www vs non-www) or via a different URL that resolves with HTTP 200 instead of a redirect. A meta tag alone is not a strong enough signal for host-level duplicates; Google explicitly wants a real HTTP redirect merging the variants.

**How to apply:** When diagnosing this GSC error, check first whether the flagged example URLs mix `www.` and non-www hosts (or trailing-slash variants). If so, the actual fix is a host-based 301 redirect at the server layer (e.g. check `req.headers.host` in a custom Node server and redirect any non-canonical host to the canonical one, preserving path + query string) — not more canonical-tag tweaking, which was likely already correct. Also verify the sitemap.xml only lists the canonical host/paths (no www, no trailing slash, no query strings) since GSC cross-references the sitemap when deciding which URL is canonical.
