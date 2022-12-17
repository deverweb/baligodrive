export const useGlobalStore = defineStore("global", () => {
  let { setLocale } = useI18n();
  let router = useRouter();
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

  let activeInvestModal = ref(false);

  let activeMobileMenu = ref(false);

  const ruNavigationLinks = [
    {
      label: "Аренда",
      to: "/",
    },
    {
      label: "Частые вопросы",
      to: "/faq",
    },
    // {
    //   label: "Стать партнером",
    //   to: "/invest",
    // },

    {
      label: "Контакты",
      to: "/contacts",
    },
  ];
  const enNavigationLinks = [
    {
      label: "Rent",
      to: "/",
    },
    {
      label: "FAQ",
      to: "/faq",
    },
    // {
    //   label: "Partnership",
    //   to: "/invest",
    // },

    {
      label: "Contacts",
      to: "/contacts",
    },
  ];

  return {
    activeLangSwitcher,
    switchLang,
    activeMobileMenu,
    ruNavigationLinks,
    enNavigationLinks,
    activeBikeId,
    activeBikeModal,
    setActiveBikeModal,
    activeInvestModal,
  };
});
