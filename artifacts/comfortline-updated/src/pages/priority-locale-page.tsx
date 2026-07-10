import routes from "@/data/priority-locales.json";
import { useLocation } from "wouter";
import { useSeo } from "@/seo/use-seo";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/seo/seo-config";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const routeImages: Record<string, string[]> = {
  home: ["/hero-bg.webp", "/car-mercedes-e.webp", "/car-kia-carnival.webp"],
  "vilnius-airport": ["/img/vilnius/old-town-aerial.png", "/img/vilnius/cathedral-square.png", "/img/vilnius/gate-of-dawn.png"],
  vilnius: ["/img/vilnius/old-town-aerial.png", "/img/vilnius/cathedral-square.png", "/img/vilnius/gate-of-dawn.png"],
  "warsaw-airport": ["/img/warsaw/chopin-terminal.png", "/img/warsaw/chopin-international.png", "/car-mercedes-e.webp"],
  "warsaw-modlin": ["/img/warsaw/modlin-terminal.png", "/img/warsaw/modlin-tower.png", "/car-kia-carnival.webp"],
  warsaw: ["/img/warsaw/chopin-international.png", "/img/warsaw/chopin-terminal.png", "/car-mercedes-e.webp"],
  "kaunas-airport": ["/img/kaunas/airport-terminal.png", "/img/kaunas/airport-building.png", "/img/kaunas/old-town.png"],
  kaunas: ["/img/kaunas/old-town.png", "/img/kaunas/laisves-aleja.png", "/img/kaunas/town-hall.png"],
  "riga-airport": ["/riga-airport-exterior.webp", "/riga-airport-gate.webp", "/car-mercedes-e.webp"],
  lithuania: ["/img/vilnius/old-town-aerial.png", "/img/kaunas/old-town.png", "/img/vilnius/gate-of-dawn.png"],
  poland: ["/img/warsaw/chopin-international.png", "/img/warsaw/modlin-terminal.png", "/car-kia-carnival.webp"],
};

export default function PriorityLocalePage() {
  const [location] = useLocation();
  const path = decodeURIComponent(location).replace(/\/+$/, "") || "/";
  const lang: "pl" | "fr" = path === "/pl" || path.startsWith("/pl/") ? "pl" : "fr";
  const route = routes.find(item => item[lang] === path);
  if (!route) return <NotFound />;
  const pl = lang === "pl";
  const name = pl ? route.plName : route.frName;
  const home = route.key === "home";
  const h1 = home ? (pl ? "Prywatne i indywidualne transfery z Mińska" : "Transferts privés et individuels depuis Minsk") : (pl ? `Prywatny transfer Mińsk — ${name}` : `Transfert privé Minsk — ${name}`);
  const description = pl ? `Indywidualny transfer taksówką na trasie Mińsk — ${name}. Stała cena, odbiór spod drzwi i doświadczony kierowca.` : `Transfert privé en taxi de Minsk vers ${name}. Tarif fixe, prise en charge porte-à-porte et chauffeur expérimenté.`;
  const alternates: Array<{hreflang:string;href:string}> = (["ru","en","pl","fr"] as const).map(code=>({hreflang:code,href:SITE_URL+route[code]}));
  alternates.push({hreflang:"x-default",href:SITE_URL+route.en});
  useSeo({title:`${h1} | ComfortLine`,description,canonical:SITE_URL+route[lang],alternates,ogImage:DEFAULT_OG_IMAGE,lang});
  const related=routes.filter(item=>item.key!==route.key).slice(0,6);
  const images=routeImages[route.key] || routeImages.home;
  const cards=pl?[["Stała cena","Cena za cały samochód bez taksometru."],["Od drzwi do drzwi","Odbiór pod wskazanym adresem w Mińsku."],["Pomoc na granicy","Kierowca zna trasę i procedury graniczne."]]:[["Tarif fixe","Prix par véhicule, sans compteur."],["Porte-à-porte","Prise en charge à votre adresse à Minsk."],["Assistance frontière","Chauffeur habitué aux itinéraires transfrontaliers."]];
  return <div className="min-h-screen bg-background text-foreground"><Navbar/><main><section className="relative overflow-hidden min-h-[620px] flex items-center pt-20"><img src={images[0]} alt={h1} className="absolute inset-0 w-full h-full object-cover"/><div className="absolute inset-0 bg-black/65"/><div className="container relative mx-auto px-4 md:px-6 py-20 max-w-6xl text-white"><p className="text-primary uppercase tracking-[0.25em] text-xs font-semibold mb-4">{pl?"Licencjonowany przewoźnik · od 2015 roku":"Transporteur agréé · depuis 2015"}</p><h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">{h1}</h1><p className="text-lg text-white/80 mt-6 max-w-3xl leading-relaxed">{description}</p><a href="tel:+375447620649" className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20">{pl?"Zarezerwuj transfer":"Réserver un transfert"}</a></div></section><section className="container mx-auto px-4 md:px-6 py-16 max-w-6xl"><h2 className="text-3xl font-bold mb-7">{pl?"Trasa i komfort podróży":"Itinéraire et confort du voyage"}</h2><div className="grid md:grid-cols-3 gap-5">{images.map((src,index)=><img key={src} src={src} alt={`${name} — ${index+1}`} loading={index?"lazy":"eager"} className="w-full h-64 object-cover rounded-2xl border border-border"/>)}</div></section><section className="container mx-auto px-4 md:px-6 py-14 max-w-6xl grid md:grid-cols-3 gap-6">{cards.map(([a,b])=><article key={a} className="bg-card border border-border rounded-2xl p-7"><h2 className="font-bold text-xl">{a}</h2><p className="text-muted-foreground mt-3 leading-relaxed">{b}</p></article>)}</section><section className="container mx-auto px-4 md:px-6 py-16 max-w-6xl"><h2 className="text-3xl font-bold">{pl?"Popularne trasy z Mińska":"Itinéraires populaires depuis Minsk"}</h2><div className="grid md:grid-cols-2 gap-4 mt-7">{related.map(item=><a key={item.key} href={item[lang]} className="bg-card border border-border rounded-xl p-5 hover:border-primary hover:text-primary transition-colors">{pl?item.plName:item.frName}</a>)}</div></section></main><Footer/></div>;
}
