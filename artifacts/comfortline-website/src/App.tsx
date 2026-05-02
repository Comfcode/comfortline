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

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/privacy" component={PrivacyPolicyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/minsk-vilnius-airport" component={MinskVilniusAirportPage} />
      <Route path="/minsk-vilnyus-aeroport" component={MinskVilniusAirportPage} />
      <Route path="/minsk-warsaw-airport" component={MinskWarsawAirportPage} />
      <Route path="/minsk-varshava-shopin-aeroport" component={MinskWarsawAirportPage} />
      <Route path="/minsk-warsaw-modlin-airport" component={MinskWarsawModlinAirportPage} />
      <Route path="/minsk-varshava-modlin-aeroport" component={MinskWarsawModlinAirportPage} />
      <Route path="/mercedes-e-class-transfer" component={() => <VehiclePage slug="mercedes-e-class" />} />
      <Route path="/mercedes-e-klass-transfer" component={() => <VehiclePage slug="mercedes-e-class" />} />
      <Route path="/kia-carnival-transfer" component={() => <VehiclePage slug="kia-carnival" />} />
      <Route path="/kia-karnaval-transfer" component={() => <VehiclePage slug="kia-carnival" />} />
      <Route path="/hyundai-palisade-transfer" component={() => <VehiclePage slug="hyundai-palisade" />} />
      <Route path="/fiat-scudo-transfer" component={() => <VehiclePage slug="fiat-scudo" />} />
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
