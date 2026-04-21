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
				/** Cinza claro: cards e superfícies secundárias */
				default: "#F3F3F3",
				/** Branco: fundo do body / áreas principais */
				background: "#ffffff",
			},
			fontFamily: {
				sans: ["Space Grotesk", "sans-serif"],
			},
		},
	},
	plugins: [],
};
