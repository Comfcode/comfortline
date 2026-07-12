import { collectAllRoutes } from "./route-manifest.mjs";

const routes = collectAllRoutes().allRoutes.filter(
  (route) => route.pageType === "service" || route.pageType === "country",
);
const errors = [];

for (const route of routes) {
  if (!route.titleRu?.toLowerCase().includes("такси")) {
    errors.push(`${route.pathRu}: title does not include такси`);
  }
  if (!route.titleRu?.toLowerCase().includes("трансфер")) {
    errors.push(`${route.pathRu}: title does not include трансфер`);
  }
  if (route.titleRu?.length > 65) {
    errors.push(`${route.pathRu}: title is ${route.titleRu.length} characters`);
  }
  if (!route.descRu?.toLowerCase().includes("фиксирован")) {
    errors.push(`${route.pathRu}: description lacks fixed-price intent`);
  }
  if (!route.pathRu?.startsWith("/")) {
    errors.push(`${route.pathRu}: invalid canonical path`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`[russian-route-seo] passed: ${routes.length} route checks`);
