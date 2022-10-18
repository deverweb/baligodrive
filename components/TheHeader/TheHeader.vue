<template>
	<header class="z-[10] header fixed w-full">
		<div class="header-container xl:justify-between md:items-center flex">
			<Logo
				class="flex-1 xl:flex-initial md:mr-auto md:text-[20px] tracking-[-0.6px]"
			></Logo>
			<TheNav class="header-nav md:hidden" :links="navLinks"></TheNav>
			<Lang
				class="flex-1 xl:flex-initial md:flex-initial md:mr-[38px] xsm:hidden"
			></Lang>
			<GambBtn
				@click="activeFixedMenu = !activeFixedMenu"
				class="md:flex hidden"
			></GambBtn>
		</div>
		<Transition>
			<MobileMenu :links="navLinks" :active="activeFixedMenu"></MobileMenu>
		</Transition>
	</header>
</template>

<script setup>
let activeFixedMenu = ref(false);
let route = useRoute();
let lastScrollTop = ref(0);
const navLinks = [
	{
		link: "/",
		label: "Главная",
	},
	{
		link: "/about",
		label: "О компании",
	},
	{
		link: "/rules",
		label: "Правила аренды",
	},
	{
		link: "/partner",
		label: "Стать партнёром",
	},
	{
		link: "/contacts",
		label: "Контакты",
	},
];

onMounted(() => {
	if (window.pageYOffset <= 100) {
		document.querySelector(".header").classList.remove("notfirstscreen");
	} else {
		document.querySelector(".header").classList.add("notfirstscreen");
	}

	window.addEventListener("scroll", () => {
		if (window.pageYOffset <= 100) {
			document.querySelector(".header").classList.remove("notfirstscreen");
		} else {
			document.querySelector(".header").classList.add("notfirstscreen");
		}
		if (lastScrollTop.value > window.pageYOffset || window.pageYOffset <= 100) {
			document.querySelector(".header").classList.remove("hide");
		} else {
			document.querySelector(".header").classList.add("hide");
		}
		lastScrollTop.value = window.pageYOffset <= 0 ? 0 : window.pageYOffset;
	});
});

watch(
	() => {
		return route.fullPath;
	},
	() => {
		activeFixedMenu.value = false;
	}
);
</script>

<style lang="sass" scoped>

@mixin r($screenWidth)
	@media only screen and (max-width: $screenWidth + 'px')
		@content


@mixin rmin($screenWidth)
	@media only screen and (min-width: $screenWidth + 'px')
		@content
.v-enter-active,
.v-leave-active
	transition: transform 0.5s ease
	z-index: -1


.v-enter-from,
.v-leave-to
	transform: translateY(-100%)
.header
	top: 20px
	left: 20px
	width: calc(100% - 40px)
	transition-property: all
	transition-duration: .4s
	transition-timing-function: cubic-bezier(.4,0,.2,1)
	justify-content: space-between
	opacity: 1
	transform: translateY(0px)
	padding: 34px 80px 32px
	+r(1440)
		justify-content: center
		padding: 34px 50px 32px
		justify-content: space-between
	+r(1200)
		width: calc(100% - 40px)
		left: 20px
	+r(991)
		align-items: center
		justify-content: space-between
		padding: 15px 50px
		top: 0
		justify-content: start
		left: 20px
		width: calc(100% - 40px)
	+r(768)
		width: 100%
		left: 0px
		padding: 15px 49px
	+r(600)
		padding: 15px 25px
	&::before
		content: ""
		top: 0
		left: 0
		right: 0
		bottom: 0
		position: absolute
		background: rgba($dark200, 0)
		border-radius: 0px
		transition: 0.4s ease all
		+r(991)
			border-radius: 0px
			background: rgba($dark, 1)
	&.notfirstscreen
		opacity: 1
		top: 0px
		&::before
			background: $dark200
	&.hide
		transform: translateY(-100%)
		// opacity: 0
		transition-delay: 0
</style>
