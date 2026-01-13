import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// GitHub Pages sometimes serves the project root without the trailing slash
// e.g. /hotel-stay-finder → /hotel-stay-finder/
// React Router expects the basename to be stripped cleanly; normalize the URL.
const base = import.meta.env.BASE_URL;
if (base !== "/") {
  const baseNoSlash = base.replace(/\/$/, "");
  if (window.location.pathname === baseNoSlash) {
    window.location.replace(base + window.location.search + window.location.hash);
  }
}

createRoot(document.getElementById("root")!).render(<App />);

