import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
	css: ["@/assets/sass/main.sass", "@/assets/sass/_fonts.sass"],
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
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/i18n",
		"@nuxtjs/strapi",
		"@pinia/nuxt",
	],
	strapi: {
		url: process.env.STRAPI_URL || "http://localhost:1337",
		prefix: "/api",
		version: "v4",
		cookie: {},
		cookieName: "strapi_jwt",
	},
	i18n: {
		strategy: "no_prefix",
		locales: [
			{
				code: "en",
				name: "English",
			},
			{
				code: "ru",
				name: "Русский",
			},
			{
				code: "ua",
				name: "Український",
			},
		],
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: "i18n_redirected",
			redirectOn: "root",
		},
		vueI18n: {
			legacy: false,

			locale: "ru",
			messages: {
				ru: {
					welcome: "Привет",
				},
				en: {
					welcome: "Welcome",
				},
				ua: {
					welcome: "Прiвет",
				},
			},
		},
	},
	build: {
		// transpile: ["swiper"],
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
