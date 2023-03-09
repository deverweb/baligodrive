<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script setup>
import { useGlobalStore } from "./store/global";
import { useCommercialStore } from "~~/store/commercial";
const nuxtApp = useNuxtApp();

const store = useGlobalStore();
const commersialStore = useCommercialStore();
commersialStore.fillData();

nuxtApp.hook("page:finish", () => {
  store.activeMobileMenu = false;
  // window.scrollTo(0, 0)
});

onMounted(() => {
  if (process.client && window) {
    window.history.scrollRestoration = "auto";
  }
});

// useHead({
//   script: [
//     {
//       src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAqNPzsf4Ee-OuexRYSOddBXzMHQnHuxME&libraries=places",
//       async: true,
//       defer: true,
//     },
//   ],
// });
</script>
