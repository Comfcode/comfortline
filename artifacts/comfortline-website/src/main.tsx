import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { bootstrapBrandScheme } from "@/lib/brand-schemes";
import { bootstrapFontTheme } from "@/lib/font-themes";
import { bootstrapLogoPalette } from "@/lib/logo-palettes";

bootstrapBrandScheme();
bootstrapFontTheme();
bootstrapLogoPalette();

createRoot(document.getElementById("root")!).render(<App />);
