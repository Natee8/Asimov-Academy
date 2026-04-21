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
				default: "#F3F3F3",
				background: "#ffffff",
			},
			fontFamily: {
				sans: ["Space Grotesk", "sans-serif"],
			},
		},
	},
	plugins: [],
};
