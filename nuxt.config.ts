import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	// css: ["@/assets/css/main.css", "@/assets/sass/main.sass"],
	css: ["@/assets/sass/main.sass"],
	vite: {
		css: {
			preprocessorOptions: {
				sass: {
					additionalData: '@import "@/assets/sass/_vars.sass"',
				},
			},
		},
	},
	plugins: [{ src: "~/plugins/v-calendar", ssr: false, mode: "client" }],
	modules: ["@nuxtjs/tailwindcss"],
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
});
