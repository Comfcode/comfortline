import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { bootstrapBrandScheme } from "@/lib/brand-schemes";
import { bootstrapFontTheme } from "@/lib/font-themes";

bootstrapBrandScheme();
bootstrapFontTheme();

createRoot(document.getElementById("root")!).render(<App />);
