import routes from "@/data/priority-locales.json";
import { useLocation } from "wouter";
import { useSeo } from "@/seo/use-seo";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/seo/seo-config";
import NotFound from "@/pages/not-found";

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
  const cards=pl?[["Stała cena","Cena za cały samochód bez taksometru."],["Od drzwi do drzwi","Odbiór pod wskazanym adresem w Mińsku."],["Pomoc na granicy","Kierowca zna trasę i procedury graniczne."]]:[["Tarif fixe","Prix par véhicule, sans compteur."],["Porte-à-porte","Prise en charge à votre adresse à Minsk."],["Assistance frontière","Chauffeur habitué aux itinéraires transfrontaliers."]];
  return <div className="min-h-screen bg-background text-foreground"><header className="border-b border-border"><div className="container mx-auto px-4 py-5 flex justify-between"><a href={pl?"/pl":"/fr"} className="font-bold text-xl">ComfortLine</a><nav className="flex gap-3 text-sm">{(["ru","en","pl","fr"] as const).map(code=><a key={code} href={route[code]} hrefLang={code} className={code===lang?"text-primary":"text-muted-foreground"}>{code.toUpperCase()}</a>)}</nav></div></header><main><section className="container mx-auto px-4 py-20 max-w-5xl"><p className="text-primary uppercase tracking-widest text-xs mb-4">{pl?"Licencjonowany przewoźnik · od 2015 roku":"Transporteur agréé · depuis 2015"}</p><h1 className="text-4xl md:text-6xl font-bold max-w-4xl">{h1}</h1><p className="text-lg text-muted-foreground mt-6 max-w-3xl">{description}</p><a href="tel:+375447620649" className="inline-block mt-8 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-bold">{pl?"Zarezerwuj transfer":"Réserver un transfert"}</a></section><section className="container mx-auto px-4 py-12 max-w-5xl grid md:grid-cols-3 gap-6">{cards.map(([a,b])=><article key={a} className="border border-border rounded-2xl p-6"><h2 className="font-bold text-xl">{a}</h2><p className="text-muted-foreground mt-2">{b}</p></article>)}</section><section className="container mx-auto px-4 py-12 max-w-5xl"><h2 className="text-3xl font-bold">{pl?"Popularne trasy z Mińska":"Itinéraires populaires depuis Minsk"}</h2><div className="grid md:grid-cols-2 gap-3 mt-6">{related.map(item=><a key={item.key} href={item[lang]} className="border border-border rounded-xl p-4 hover:border-primary">{pl?item.plName:item.frName}</a>)}</div></section></main><footer className="border-t border-border mt-12"><div className="container mx-auto px-4 py-8 text-sm text-muted-foreground">© 2026 ComfortLine · +375 (44) 762-06-49 · info@comfortline.by</div></footer></div>;
}
