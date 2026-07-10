import assert from "node:assert/strict";
import { normalizeRequestUrl } from "../server.mjs";

function normalize(value) {
  return decodeURI(normalizeRequestUrl(new URL(value, "https://comfortline.by")));
}

const cases = [
  ["/?gad_source=1&gad_campaignid=23891491581", "/"],
  ["/?_ym_debug=1", "/"],
  ["/?gtm_latency=1", "/"],
  ["/group-transfer/?gad_source=1&utm_campaign=summer&ref=partner", "/group-transfer?ref=partner"],
  ["/minsk-vilnius-airport?gclid=test", "/minsk-vilnius-airport"],
  ["/minsk-vilnius-airport?booking=1", "/minsk-vilnius-airport?booking=1"],
  ["/?lang=en", "/en"],
  ["/riga-transfer?lang=ru", "/трансфер-рига"],
  ["/трансфер-рига?lang=en", "/riga-transfer"],
];

for (const [input, expected] of cases) {
  assert.equal(normalize(input), expected, `${input} should normalize to ${expected}`);
}

console.log(`[url-normalization] passed: ${cases.length} redirect cases`);
