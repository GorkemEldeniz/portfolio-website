import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@components": path.resolve(__dirname, "src/components"),
			"@libs": path.resolve(__dirname, "src/libs"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@helpers": path.resolve(__dirname, "src/helpers"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@router": path.resolve(__dirname, "src/router/index.tsx"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@icon": path.resolve(__dirname, "src/icon/index.tsx"),
		},
	},
});
