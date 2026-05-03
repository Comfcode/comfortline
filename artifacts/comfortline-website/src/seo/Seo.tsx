import { useLang } from "@/context/language-context";
import { useSeo } from "./use-seo";
import { SITE_URL, DEFAULT_OG_IMAGE } from "./seo-config";
import { localBusinessJsonLd, breadcrumbJsonLd, type BreadcrumbItem } from "./jsonld";

interface SeoProps {
  titleRu: string;
  titleEn: string;
  descRu: string;
  descEn: string;
  pathRu: string;
  pathEn: string;
  keywordsRu?: string;
  keywordsEn?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: object | object[];
  breadcrumbsRu?: BreadcrumbItem[];
  breadcrumbsEn?: BreadcrumbItem[];
  noBusinessJsonLd?: boolean;
  noindex?: boolean;
}

export function Seo(props: SeoProps) {
  const { lang } = useLang();
  const isRu = lang === "ru";
  const title = isRu ? props.titleRu : props.titleEn;
  const description = isRu ? props.descRu : props.descEn;
  const keywords = isRu ? props.keywordsRu : props.keywordsEn;

  // Canonical must reflect the ACTUAL URL the user is on, not the user's language.
  // Otherwise visiting /minsk-vilnius-airport while in RU mode would canonical away to
  // the RU URL and Google would de-index the EN URL (a real SEO bug).
  let canonicalPath = isRu ? props.pathRu : props.pathEn;
  if (typeof window !== "undefined") {
    const livePath = window.location.pathname;
    // Match by URL — first try the literal RU path, then EN, otherwise keep language default.
    if (livePath === props.pathRu || decodeURIComponent(livePath) === props.pathRu) {
      canonicalPath = props.pathRu;
    } else if (livePath === props.pathEn) {
      canonicalPath = props.pathEn;
    }
  }

  const allJsonLd: object[] = [];
  if (!props.noBusinessJsonLd) allJsonLd.push(localBusinessJsonLd(lang));

  const breadcrumbs = isRu ? props.breadcrumbsRu : props.breadcrumbsEn;
  if (breadcrumbs && breadcrumbs.length > 0) {
    allJsonLd.push(breadcrumbJsonLd(breadcrumbs));
  }

  if (props.jsonLd) {
    if (Array.isArray(props.jsonLd)) allJsonLd.push(...props.jsonLd);
    else allJsonLd.push(props.jsonLd);
  }

  useSeo({
    title,
    description,
    canonical: SITE_URL + canonicalPath,
    alternates: [
      { hreflang: "ru", href: SITE_URL + props.pathRu },
      { hreflang: "en", href: SITE_URL + props.pathEn },
      { hreflang: "x-default", href: SITE_URL + props.pathRu },
    ],
    ogImage: props.ogImage || DEFAULT_OG_IMAGE,
    ogType: props.ogType,
    keywords,
    jsonLd: allJsonLd,
    lang: isRu ? "ru" : "en",
    robots: props.noindex ? "noindex, nofollow" : undefined,
  });

  return null;
}
