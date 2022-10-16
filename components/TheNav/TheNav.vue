<template>
	<nav class="navbar flex lg:scale-[0.85] relative top-[-2px] xl:top-0">
		<ul class="flex font-Helvreg items-center gap-[50px] xl:gap-[30px]">
			<li v-for="(link, i) in links" :key="i" class="whitespace-nowrap">
				<nuxt-link :to="link.link">{{ link.label }}</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: ["links"],
};
</script>

<style lang="sass" scoped>
li
	position: relative
	.router-link-active
		+helvm
	a
		&:hover
			&::before
				transform: scaleX(1)
		&::before
			content: ""
			position: absolute
			left: 0
			right: 0
			bottom: 0px
			background-color: white
			height: 1px
			transition: 0.2s transform ease
			transform: scaleX(0)
		&.router-link-active
			&::before
				transform: scaleX(1)
</style>
