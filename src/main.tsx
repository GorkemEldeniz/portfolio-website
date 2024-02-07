import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@components/theme-provider.tsx";
import Layout from "./Layout.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Layout />
		</ThemeProvider>
	</React.StrictMode>
);
