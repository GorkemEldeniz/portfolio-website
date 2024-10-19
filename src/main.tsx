import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Meta from "./components/Meta.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <Analytics />
      <Meta />
      <App />
      <Toaster />
    </>
  </StrictMode>
);
