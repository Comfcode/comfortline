import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/language-context";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/landing";
import PrivacyPolicyPage from "@/pages/privacy-policy";
import TermsPage from "@/pages/terms";
import FaqPage from "@/pages/faq";
import MinskVilniusAirportPage from "@/pages/minsk-vilnius-airport";
import MinskWarsawAirportPage from "@/pages/minsk-warsaw-airport";
import MinskWarsawModlinAirportPage from "@/pages/minsk-warsaw-modlin-airport";
import { VehiclePage } from "@/pages/vehicle-page";
import BrandbookPage from "@/pages/brandbook";
import MinskCityTransferPage from "@/pages/minsk-city-transfer";
import BelarusTransferPage from "@/pages/belarus-transfer";
import RussiaTransferPage from "@/pages/russia-transfer";
import GroupTransferPage from "@/pages/group-transfer";
import WarsawTransferPage from "@/pages/warsaw-transfer";
import BerlinTransferPage from "@/pages/berlin-transfer";
import PragueTransferPage from "@/pages/prague-transfer";
import RigaTransferPage from "@/pages/riga-transfer";
import SanatoriumTransferPage from "@/pages/sanatorium-transfer";
import SkiTransferPage from "@/pages/ski-transfer";
import VipTransferPage from "@/pages/vip-transfer";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/privacy" component={PrivacyPolicyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/faq" component={FaqPage} />

      {/* Airport transfer pages */}
      <Route path="/minsk-vilnius-airport" component={MinskVilniusAirportPage} />
      <Route path="/minsk-vilnyus-aeroport" component={MinskVilniusAirportPage} />
      <Route path="/minsk-warsaw-airport" component={MinskWarsawAirportPage} />
      <Route path="/minsk-varshava-shopin-aeroport" component={MinskWarsawAirportPage} />
      <Route path="/minsk-warsaw-modlin-airport" component={MinskWarsawModlinAirportPage} />
      <Route path="/minsk-varshava-modlin-aeroport" component={MinskWarsawModlinAirportPage} />

      {/* Vehicle pages */}
      <Route path="/mercedes-e-class-transfer" component={() => <VehiclePage slug="mercedes-e-class" />} />
      <Route path="/mercedes-e-klass-transfer" component={() => <VehiclePage slug="mercedes-e-class" />} />
      <Route path="/kia-carnival-transfer" component={() => <VehiclePage slug="kia-carnival" />} />
      <Route path="/kia-karnaval-transfer" component={() => <VehiclePage slug="kia-carnival" />} />
      <Route path="/hyundai-palisade-transfer" component={() => <VehiclePage slug="hyundai-palisade" />} />
      <Route path="/fiat-scudo-transfer" component={() => <VehiclePage slug="fiat-scudo" />} />

      {/* City & Belarus routes */}
      <Route path="/minsk-city-transfer" component={MinskCityTransferPage} />
      <Route path="/transfer-po-minsku" component={MinskCityTransferPage} />
      <Route path="/belarus-transfer" component={BelarusTransferPage} />
      <Route path="/transfer-po-belarusi" component={BelarusTransferPage} />
      <Route path="/russia-transfer" component={RussiaTransferPage} />
      <Route path="/transfer-v-rossiju" component={RussiaTransferPage} />

      {/* Group transfer */}
      <Route path="/group-transfer" component={GroupTransferPage} />
      <Route path="/gruppovoj-transfer" component={GroupTransferPage} />

      {/* EU routes */}
      <Route path="/warsaw-transfer" component={WarsawTransferPage} />
      <Route path="/transfer-varshava" component={WarsawTransferPage} />
      <Route path="/berlin-transfer" component={BerlinTransferPage} />
      <Route path="/transfer-berlin" component={BerlinTransferPage} />
      <Route path="/prague-transfer" component={PragueTransferPage} />
      <Route path="/transfer-praga" component={PragueTransferPage} />
      <Route path="/riga-transfer" component={RigaTransferPage} />
      <Route path="/transfer-riga" component={RigaTransferPage} />

      {/* Specialty services */}
      <Route path="/sanatorium-transfer" component={SanatoriumTransferPage} />
      <Route path="/transfer-v-sanatorij" component={SanatoriumTransferPage} />
      <Route path="/ski-transfer" component={SkiTransferPage} />
      <Route path="/lyzhnyj-transfer" component={SkiTransferPage} />
      <Route path="/vip-transfer" component={VipTransferPage} />
      <Route path="/vip-transfer-by" component={VipTransferPage} />

      <Route path="/brandbook" component={BrandbookPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
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
