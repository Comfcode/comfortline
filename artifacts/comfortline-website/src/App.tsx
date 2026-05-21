import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { useBrowserLocation } from "wouter/use-browser-location";

function useNormalizedLocation(): [string, (to: string) => void] {
  const [loc, navigate] = useBrowserLocation();
  const normalized = loc.length > 1 ? loc.replace(/\/+$/, "") || "/" : loc;
  return [normalized, navigate];
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/language-context";

const LandingPage                  = lazy(() => import("@/pages/landing"));
const PrivacyPolicyPage            = lazy(() => import("@/pages/privacy-policy"));
const TermsPage                    = lazy(() => import("@/pages/terms"));
const FaqPage                      = lazy(() => import("@/pages/faq"));
const MinskVilniusAirportPage      = lazy(() => import("@/pages/minsk-vilnius-airport"));
const MinskWarsawAirportPage       = lazy(() => import("@/pages/minsk-warsaw-airport"));
const MinskWarsawModlinAirportPage = lazy(() => import("@/pages/minsk-warsaw-modlin-airport"));
const MinskKaunasAirportPage       = lazy(() => import("@/pages/minsk-kaunas-airport"));
const MinskRigaAirportPage         = lazy(() => import("@/pages/minsk-riga-airport"));
const BlogIndexPage                = lazy(() => import("@/pages/blog/index"));
const BlogArticlePage              = lazy(() => import("@/pages/blog/article"));
const VehiclePageModule            = lazy(() => import("@/pages/vehicle-page").then(m => ({ default: m.VehiclePage })));
const BrandbookPage                = lazy(() => import("@/pages/brandbook"));
const MinskCityTransferPage        = lazy(() => import("@/pages/minsk-city-transfer"));
const BelarusTransferPage          = lazy(() => import("@/pages/belarus-transfer"));
const RussiaTransferPage           = lazy(() => import("@/pages/russia-transfer"));
const GroupTransferPage            = lazy(() => import("@/pages/group-transfer"));
const WarsawTransferPage           = lazy(() => import("@/pages/warsaw-transfer"));
const BerlinTransferPage           = lazy(() => import("@/pages/berlin-transfer"));
const PragueTransferPage           = lazy(() => import("@/pages/prague-transfer"));
const RigaTransferPage             = lazy(() => import("@/pages/riga-transfer"));
const SanatoriumTransferPage       = lazy(() => import("@/pages/sanatorium-transfer"));
const SkiTransferPage              = lazy(() => import("@/pages/ski-transfer"));
const VipTransferPage              = lazy(() => import("@/pages/vip-transfer"));
const NotFound                     = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient();

function VehiclePageMercedes()  { return <Suspense fallback={null}><VehiclePageModule slug="mercedes-e-class" /></Suspense>; }
function VehiclePageKia()       { return <Suspense fallback={null}><VehiclePageModule slug="kia-carnival" /></Suspense>; }
function VehiclePageHyundai()   { return <Suspense fallback={null}><VehiclePageModule slug="hyundai-palisade" /></Suspense>; }
function VehiclePageFiat()      { return <Suspense fallback={null}><VehiclePageModule slug="fiat-scudo" /></Suspense>; }

function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/privacy" component={PrivacyPolicyPage} />
        <Route path="/terms" component={TermsPage} />
        <Route path="/faq" component={FaqPage} />

        <Route path="/minsk-vilnius-airport" component={MinskVilniusAirportPage} />
        <Route path="/трансфер-минск-вильнюс-аэропорт" component={MinskVilniusAirportPage} />
        <Route path="/minsk-warsaw-airport" component={MinskWarsawAirportPage} />
        <Route path="/трансфер-минск-варшава-шопен" component={MinskWarsawAirportPage} />
        <Route path="/minsk-warsaw-modlin-airport" component={MinskWarsawModlinAirportPage} />
        <Route path="/трансфер-минск-варшава-модлин" component={MinskWarsawModlinAirportPage} />
        <Route path="/minsk-kaunas-airport" component={MinskKaunasAirportPage} />
        <Route path="/трансфер-минск-каунас-аэропорт" component={MinskKaunasAirportPage} />
        <Route path="/minsk-riga-airport" component={MinskRigaAirportPage} />
        <Route path="/трансфер-минск-рига-аэропорт" component={MinskRigaAirportPage} />

        <Route path="/blog" component={BlogIndexPage} />
        <Route path="/блог" component={BlogIndexPage} />
        <Route path="/blog/:slug" component={BlogArticlePage} />
        <Route path="/блог/:slug" component={BlogArticlePage} />

        <Route path="/mercedes-e-class-transfer" component={VehiclePageMercedes} />
        <Route path="/трансфер-мерседес-е-класс" component={VehiclePageMercedes} />
        <Route path="/kia-carnival-transfer" component={VehiclePageKia} />
        <Route path="/трансфер-киа-карнавал" component={VehiclePageKia} />
        <Route path="/hyundai-palisade-transfer" component={VehiclePageHyundai} />
        <Route path="/трансфер-хендай-палисад" component={VehiclePageHyundai} />
        <Route path="/fiat-scudo-transfer" component={VehiclePageFiat} />
        <Route path="/трансфер-фиат-скудо" component={VehiclePageFiat} />

        <Route path="/minsk-city-transfer" component={MinskCityTransferPage} />
        <Route path="/трансфер-по-минску" component={MinskCityTransferPage} />
        <Route path="/belarus-transfer" component={BelarusTransferPage} />
        <Route path="/трансфер-по-беларуси" component={BelarusTransferPage} />
        <Route path="/russia-transfer" component={RussiaTransferPage} />
        <Route path="/трансфер-в-россию" component={RussiaTransferPage} />

        <Route path="/group-transfer" component={GroupTransferPage} />
        <Route path="/групповой-трансфер" component={GroupTransferPage} />

        <Route path="/warsaw-transfer" component={WarsawTransferPage} />
        <Route path="/трансфер-варшава" component={WarsawTransferPage} />
        <Route path="/berlin-transfer" component={BerlinTransferPage} />
        <Route path="/трансфер-берлин" component={BerlinTransferPage} />
        <Route path="/prague-transfer" component={PragueTransferPage} />
        <Route path="/трансфер-прага" component={PragueTransferPage} />
        <Route path="/riga-transfer" component={RigaTransferPage} />
        <Route path="/трансфер-рига" component={RigaTransferPage} />

        <Route path="/sanatorium-transfer" component={SanatoriumTransferPage} />
        <Route path="/трансфер-в-санаторий" component={SanatoriumTransferPage} />
        <Route path="/ski-transfer" component={SkiTransferPage} />
        <Route path="/лыжный-трансфер" component={SkiTransferPage} />
        <Route path="/vip-transfer" component={VipTransferPage} />
        <Route path="/вип-трансфер" component={VipTransferPage} />

        <Route path="/brandbook" component={BrandbookPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")} hook={useNormalizedLocation}>
              <Router />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
