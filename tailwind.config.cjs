module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	safelist: ["pl-2", "pl-3", "pl-4", "pl-5", "pl-6", "pl-7"],
	theme: {
		extend: {
			colors: {
				// Background
				primary: "#300807",
				// Secondary Background
				secondary: "#44091b",
			},
			fontFamily: {
				sans: ['"Fira Sans"'],
			},
		},
	},
};
