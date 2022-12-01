<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
import { useGlobalStore } from "./store/global";
import { useCommercialStore } from "~~/store/commercial";

const nuxtApp = useNuxtApp();

const store = useGlobalStore();
const commersialStore = useCommercialStore();

// commersialStore.fillData()

nuxtApp.hook("page:finish", () => {
  store.activeMobileMenu = false;
  window.scrollTo(0, 0);
});
</script>

<style lang="sass">
.page-enter-active,
.page-leave-active
  transition: all .3s

.page-enter-from,
.page-leave-to
  opacity: 0
  filter: blur(0.4rem)
</style>
