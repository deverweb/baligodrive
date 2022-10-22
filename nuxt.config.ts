import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
	css: ["@/assets/sass/main.sass", "@/assets/sass/_fonts.sass"],
	router: {
		scrollBehavior: () => {
			return { top: 0 };
		},
	},
	head: {
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content:
					"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
			},
			{ "http-equiv": "X-UA-Compatible", content: "IE=edge" },
			// {
			// hid: "description",
			// name: "description",
			// content: "Official Nuxt.js starter for CodeSandBox"
			// }
		],
	},
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
		["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
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
