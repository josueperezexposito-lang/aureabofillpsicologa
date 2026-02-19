import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import AnxietyService from "@/pages/AnxietyService";
import DepressionService from "@/pages/DepressionService";
import StressService from "@/pages/StressService";
import SelfEsteemService from "@/pages/SelfEsteemService";

import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    <Switch>
      {/* Home - Main Hub */}
      <Route path={"/"} component={Home} />
      
      {/* About Page */}
      <Route path={"/sobre-mi"} component={AboutPage} />
      
      {/* Contact Page */}
      <Route path={"/contacto"} component={ContactPage} />
      
      {/* Services Silo */}
      <Route path={"/servicios/ansiedad"} component={AnxietyService} />
      <Route path={"/servicios/depresion"} component={DepressionService} />
      <Route path={"/servicios/estres"} component={StressService} />
      <Route path={"/servicios/autoestima"} component={SelfEsteemService} />
      
      
      {/* Error pages */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
