export const useGlobalStore = defineStore("global", () => {
  let { setLocale } = useI18n();

  let activeLangSwitcher = ref(false);

  const switchLang = (lang) => {
    setLocale(lang.code);
    activeLangSwitcher.value = false;
  };

  let activeBikeModal = ref(false);
  let activeBikeId = ref(null);

  const setActiveBikeModal = (bikeId) => {
    activeBikeId.value = bikeId;
    activeBikeModal.value = true;
  };

  let activeMobileMenu = ref(false);

  const navigationLinks = [
    {
      label: "Главная",
      to: "/",
    },
    {
      label: "Условия аренды",
      to: "/terms",
    },
    {
      label: "Нужно знать",
      to: "/mustknow",
    },
    {
      label: "Стать партнёром",
      to: "/invest",
    },

    {
      label: "Контакты",
      to: "/contacts",
    },
  ];

  return {
    activeLangSwitcher,
    switchLang,
    activeMobileMenu,
    navigationLinks,
    activeBikeId,
    activeBikeModal,
    setActiveBikeModal,
  };
});
