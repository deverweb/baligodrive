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
      to: "/about",
    },
    {
      label: "Правила аренды",
      to: "/rules",
    },
    {
      label: "Стать партнёром",
      to: "/partner",
    },
    {
      label: "Контакты",
      to: "/contacts",
    },
    {
      label: "Order",
      to: "/order",
    },
  ]

  return { activeLangSwitcher, switchLang, activeMobileMenu, navigationLinks }
})
