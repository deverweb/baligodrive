module.exports = {
	mode: "jit",

	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
	],
	theme: {
		screens: {
			"2xl": { max: "1601px" },
			xl: { max: "1441px" },
			lg: { max: "1201px" },
			md: { max: "991px" },
			sm: { max: "769px" },
			xsm: { max: "600px" },
			xxsm: { max: "480px" },
			lil: { max: "380px" },
		},

		extend: {
			fontFamily: {
				Euroblack: "Eurostile-Extended-Black",
				Helvbold: "helveticaneuecyr-bold",
				Helvreg: "helveticaneuecyr-roman",
				Helvmed: "helveticaneuecyr-medium",
			},
			colors: {
				dark: {
					DEFAULT: "#111111",
					600: "#1A1A1A",
					500: "#282828",
					400: "#2E2E2E",

					200: "#1E1E1E",
					300: "#181818",
				},
				light: {
					DEFAULT: "#FBFBFD",
					200: "#9fa19f",
				},
				green: "#30B21B",
			},
		},
	},
};
