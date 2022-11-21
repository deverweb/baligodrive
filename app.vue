<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />

    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
import { useGlobalStore } from "./store/global"

const nuxtApp = useNuxtApp()
const store = useGlobalStore()

nuxtApp.hook("page:finish", () => {
  store.activeMobileMenu = false
  window.setTimeout(() => {
    window.scrollTo(0, 0)
  }, 200)
})
</script>

<style lang="sass">
.page-enter-active,
.page-leave-active
  transition: all 0.4s

.page-enter-from,
.page-leave-to
  opacity: 0
  filter: blur(0.4rem)
</style>
