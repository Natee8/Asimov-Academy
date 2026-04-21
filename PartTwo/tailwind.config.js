/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#6D5BFF",
					light: "#8D80FF",
					dark: "#4C3ED9",
				},
				secondary: {
					DEFAULT: "#25D0AB",
					light: "#54E6C6",
					dark: "#0EA784",
				},
				background: {
					DEFAULT: "#070B14",
					soft: "#0F1628",
					card: "#121C31",
				},
				details: {
					DEFAULT: "#8A97B8",
					strong: "#E7ECFF",
					border: "#28324A",
				},
			},
		},
	},
	plugins: [],
}