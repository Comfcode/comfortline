---
name: Free live-data scraping via jina.ai reader
description: Pattern for pulling live/real-time data from JS-rendered, API-key-less external sites using the free r.jina.ai reader proxy.
---

For sites with no public API and no available API key, `https://r.jina.ai/<target-url>` (free, no key required) proxies the page through a headless renderer and returns clean markdown, including tables. Useful headers:

- `x-wait-for-selector: <css selector>` — wait for a specific element (e.g. a table body row) to appear before returning, needed for SPA/JS-rendered content.
- `x-no-cache: true` — bypass jina's own cache to get fresh data.

**Why:** Needed live data from a Belarusian border-queue SPA (`mon.declarant.by/#/zone`) with no API and no key available; direct fetch only returns an empty SPA shell.

**How to apply:** For similar "no API key, need live data from a JS-rendered page" requests, try `r.jina.ai` with these headers before reaching for a paid scraping/browser-automation service. Parse the returned markdown table server-side, cache the result with a TTL (5 min is reasonable for slow-changing data), and serve stale cache on fetch failure rather than erroring out.
