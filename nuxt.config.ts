export default defineNuxtConfig({
  app: {
    head: {
      title: "Baligo",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        { "http-equiv": "x-ua-compatible", content: "IE=edge" },
        // {
        // hid: "description",
        // name: "description",
        // content: "Official Nuxt.js starter for CodeSandBox"
        // }
      ],
      // script: [{ src: "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" }],
    },

    // layoutTransition: true,
    pageTransition: { name: "page", mode: "out-in" },
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
  css: ["@/assets/sass/main.sass"],
  plugins: [{ src: "~/plugins/v-calendar", ssr: false, mode: "client" }],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }]],

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
      // {
      //   code: "ua",
      //   name: "Український",
      // },
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
})
