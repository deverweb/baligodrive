module.exports = {
	mode: "jit",

	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				Euroblack: "Eurostile Extended-Black",
				Helvbold: "helveticaneuecyr-bold",
				Helvreg: "helveticaneuecyr-roman",
				Helvmed: "helveticaneuecyr-medium",
			},
			colors: {
				dark: {
					DEFAULT: "#111111",
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
