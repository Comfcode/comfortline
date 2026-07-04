# Memory Index

- [Orval api-zod schemas are types only](orval-api-zod-types-only.md) — don't call `.parse()` on generated api-zod exports, they're TS interfaces not zod runtime schemas.
- [Free live-data scraping via jina.ai reader](jina-reader-scraping.md) — pattern for pulling live data from JS-rendered sites with no API/key.
- [GSC canonical/www duplicate warnings](gsc-canonical-www-duplicates.md) — correct rel=canonical tags aren't enough; www/non-www needs a real server 301, not just a meta tag.
- [GSC "alternate page with canonical" reports](gsc-canonical-alternate-page-report.md) — often stale crawl data from before a prior fix; diff sitemap vs routes before touching canonical logic.
