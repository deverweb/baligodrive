<template>
	<nuxt-link
		to="/"
		class="ls-text-small md:w-auto md:text-[18px] md:tracking-[1px] logo uppercase font-Euroblack z-0"
		><span class="text-green">BALI.</span>GODRIVE</nuxt-link
	>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import '@/assets/sass/_mixins.sass'
.ls-text-small
	+r(991)
		letter-spacing: 1px
</style>
