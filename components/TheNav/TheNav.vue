<template>
  <nav class="navbar flex">
    <div class="flex"></div>
    <ul class="flex font-Helvmed items-center gap-[50px]">
      <li v-for="(link, i) in links" :key="i">
        <nuxt-link :to="link.link">{{ link.label }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>


<script>


export default {
  props: ['links']

}
</script>


<style lang='sass'>


</style>