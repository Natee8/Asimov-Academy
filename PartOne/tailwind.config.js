/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#B9FF66",
				secondary: "#191A23",
				default: "#ffffff",
			},
			fontFamily: {
				sans: ["Space Grotesk", "sans-serif"],
			},
		},
	},
	plugins: [],
};
