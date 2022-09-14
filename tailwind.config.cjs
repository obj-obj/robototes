module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				// Background
				primary: "#300807",
				// Darker Background
				dark: "#240605",
				// Secondary Background
				secondary: "#44091b",
			},
			fontFamily: {
				sans: ['"Fira Sans"'],
			},
		},
	},
};
