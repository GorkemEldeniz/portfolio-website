import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "./context/theme-provider.tsx";
import Layout from "./Layout.tsx";

import { Toaster } from "@components/toaster.tsx";

import { Analytics } from "@vercel/analytics/react";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Layout />
			<Analytics />
			<Toaster />
		</ThemeProvider>
	</React.StrictMode>
);
