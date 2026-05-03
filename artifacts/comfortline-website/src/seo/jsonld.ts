import { BUSINESS, SITE_URL } from "./seo-config";

export function localBusinessJsonLd(lang: "ru" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${SITE_URL}#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "$$",
    description:
      lang === "ru"
        ? "ComfortLine — премиум трансфер из Минска в аэропорты Вильнюса, Варшавы, Берлина и города Европы. Фиксированная цена, опытные водители, комфортные автомобили."
        : "ComfortLine — premium private transfers from Minsk to Vilnius, Warsaw, Berlin airports and major European cities. Fixed prices, professional drivers, comfortable vehicles.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Minsk",
      addressCountry: "BY",
    },
    areaServed: BUSINESS.serviceArea.map((a) => ({ "@type": "Place", name: a })),
    sameAs: BUSINESS.sameAs,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

export interface ServiceJsonLdInput {
  name: string;
  description: string;
  url: string;
  fromName: string;
  toName: string;
  distanceKm?: string;
  durationIso?: string;
  lang: "ru" | "en";
}

export function taxiServiceJsonLd(s: ServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.lang === "ru" ? "Индивидуальный трансфер" : "Private transfer",
    name: s.name,
    description: s.description,
    url: s.url,
    provider: { "@id": `${SITE_URL}#business` },
    areaServed: [
      { "@type": "Place", name: s.fromName },
      { "@type": "Place", name: s.toName },
    ],
    offers: {
      "@type": "Offer",
      url: s.url,
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: { "@id": `${SITE_URL}#business` },
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: SITE_URL + it.path,
    })),
  };
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export function faqJsonLd(entries: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((e) => ({
      "@type": "Question",
      name: e.question,
      acceptedAnswer: { "@type": "Answer", text: e.answer },
    })),
  };
}

export interface VehicleJsonLdInput {
  name: string;
  description: string;
  image: string;
  url: string;
  seatingCapacity: number;
  modelDate?: string;
  vehicleClass?: string;
  lang: "ru" | "en";
}

export function vehicleJsonLd(v: VehicleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: v.name,
    description: v.description,
    image: v.image,
    url: v.url,
    seatingCapacity: v.seatingCapacity,
    modelDate: v.modelDate,
    vehicleConfiguration: v.vehicleClass,
    brand: v.name.split(" ")[0],
  };
}
