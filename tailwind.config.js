/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sora: ["Sora", "sans-serif", "system-ui"],
			},
			gridTemplateColumns: {
				fit: "repeat(auto-fit, minmax(160px, 1fr))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
			},
		},
		colors: {
			white: "#FFFFFF",
			black: "#000000",
			neutral: "#404040",
			zinc: {
				100: "#f4f4f5",
				200: "#e4e4e7",
				300: "#d4d4d8",
				500: "#71717a",
				800: "#27272a",
			},
			error: "#ef4444",
		},
		fontSize: {
			sm: "0.75rem",
			base: "1rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.75rem",
			"4xl": "2rem",
			"5xl": "2.25rem",
			"6xl": "2.5rem",
			"7xl": "3rem",
		},
		lineHeight: {
			1: "1rem",
			2: "1.25rem",
			3: "1.5rem",
			4: "1.75rem",
			5: "2rem",
			6: "2.5rem",
			7: "2.75rem",
			8: "3rem",
			9: "3.5rem",
		},
	},
	plugins: [
		plugin(function ({ addUtilities, theme }) {
			const fontSizes = theme("fontSize");
			const lineHeights = theme("lineHeight");
			const utilities = {};

			Object.entries(fontSizes).forEach(([key, value], index) => {
				const lineHeight = lineHeights[index + 1];
				utilities[`.text-custom-${key}`] = {
					fontSize: value,
					lineHeight: lineHeight,
					letterSpacing: "-0.01rem",
				};
			});

			// Add the custom text utilities
			addUtilities(utilities);
		}),
		require("tailwindcss-animate"),
	],
};
