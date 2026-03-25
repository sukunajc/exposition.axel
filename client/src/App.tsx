import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CheatCodeProvider } from "./contexts/CheatCodeContext";
import { CheatCodeInput } from "./components/CheatCodeInput";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Comprendre from "./pages/Comprendre";
import Statistiques from "./pages/Statistiques";
import Jeux from "./pages/Jeux";
import Apropos from "./pages/Apropos";
import SundarPichai from "./pages/SundarPichai";
import Cartographie from "./pages/Cartographie";
import Glossaire from "./pages/Glossaire";
import Ressources from "./pages/Ressources";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/comprendre" component={Comprendre} />
        <Route path="/statistiques" component={Statistiques} />
        <Route path="/jeux" component={Jeux} />
        <Route path="/glossaire" component={Glossaire} />
        <Route path="/ressources" component={Ressources} />
        <Route path="/a-propos" component={Apropos} />
        <Route path="/sundar-pichai" component={SundarPichai} />
        <Route path="/cartographie" component={Cartographie} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <CheatCodeProvider>
        <ThemeProvider defaultTheme="dark">
          <TooltipProvider>
            <Toaster />
            <Router />
            <CheatCodeInput />
          </TooltipProvider>
        </ThemeProvider>
      </CheatCodeProvider>
    </ErrorBoundary>
  );
}

export default App;
