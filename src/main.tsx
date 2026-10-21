import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { HashRouter, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// HashRouter keeps the real pathname at "/", so report the router's path instead
function RouteAnalytics() {
  const { pathname } = useLocation();
  return <Analytics route={pathname} path={pathname} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
      <RouteAnalytics />
      <SpeedInsights />
    </HashRouter>
  </StrictMode>,
);
