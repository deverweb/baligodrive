<template>
  <header class="absolute pt-[34px] px-[80px] inset-x-0 flex items-center justify-between">
    <Logo></Logo>
    <TheNav :links="navLinks"></TheNav>
    <Lang></Lang>
  </header>
</template>


<script>


export default {
  setup() {
    return {
      navLinks: [
        {
          link: '/',
          label: 'Главная'
        },
        {
          link: '/about',
          label: 'О компании'
        },
        {
          link: '/rules',
          label: 'Правила аренды'
        },
        {
          link: '/contacts',
          label: 'Контакты'
        },
        {
          link: '/partner',
          label: 'Стать партнёром'
        }]
    }
  }


}
</script>


<style lang='sass'>


</style>