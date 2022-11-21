export const useGlobalStore = defineStore("global", () => {
  let { setLocale } = useI18n()

  let activeLangSwitcher = ref(false)

  const switchLang = (lang) => {
    setLocale(lang.code)
    activeLangSwitcher.value = false
  }

  let activeMobileMenu = ref(false)

  const navigationLinks = [
    {
      label: "Главная",
      to: "/",
    },
    {
      label: "О компании",
      to: "/b",
    },
    {
      label: "Правила аренды",
      to: "/b",
    },
    {
      label: "Стать партнёром",
      to: "/b",
    },
    {
      label: "Контакты",
      to: "/b",
    },
  ]

  return { activeLangSwitcher, switchLang, activeMobileMenu, navigationLinks }
})
