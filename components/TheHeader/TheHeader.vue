<template>
	<header class="z-[10] header fixed md:relative w-full">
		<div class="header-fixed header-child md:items-center">
			<Logo class="flex-1 xl:flex-initial md:mr-auto"></Logo>
			<TheNav class="header-nav md:hidden" :links="navLinks"></TheNav>
			<Lang
				class="flex-1 xl:flex-initial md:flex-initial md:mr-[38px] xsm:hidden"
			></Lang>
			<GambBtn
				@click="activeFixedMenu = !activeFixedMenu"
				class="md:flex hidden"
			></GambBtn>
			<Transition>
				<MobileMenu :links="navLinks" :active="activeFixedMenu"></MobileMenu>
			</Transition>
		</div>
		<!-- <div class="vidget fixed top-[20%] left-[30%] text-[64px] text-white">
			{{ windowWidth }}
		</div> -->
	</header>
</template>

<script setup>
let activeFixedMenu = ref(false);
let route = useRoute();
let lastScrollTop = ref(0);
let windowWidth = ref(0);
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
		link: "/contacts",
		label: "Контакты",
	},
	{
		link: "/partner",
		label: "Стать партнёром",
	},
];
const setActiveMenu = () => {
	activeFirstMenu.value = !activeFirstMenu.value;
	document.body.classList.toggle("active-menu");
};
onMounted(() => {
	if (window.pageYOffset <= 100) {
		document.querySelector(".header-fixed").classList.remove("notfirstscreen");
	} else {
		document.querySelector(".header-fixed").classList.add("notfirstscreen");
	}
	windowWidth.value = window.innerWidth;
	window.addEventListener("resize", () => {
		windowWidth.value = window.innerWidth;
	});
	window.addEventListener("scroll", () => {
		if (window.pageYOffset <= 100) {
			document
				.querySelector(".header-fixed")
				.classList.remove("notfirstscreen");
		} else {
			document.querySelector(".header-fixed").classList.add("notfirstscreen");
		}
		if (lastScrollTop.value > window.pageYOffset || window.pageYOffset <= 100) {
			document.querySelector(".header-fixed").classList.remove("hide");
		} else {
			document.querySelector(".header-fixed").classList.add("hide");
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
	&-child
		display: flex
		justify-content: space-between
		+r(1440)
			justify-content: center
		+r(991)
			align-items: center
			justify-content: space-between

	&-fixed
		opacity: 1
		transform: translateY(0px)
		transition: 0.2s all ease
		position: fixed
		top: 20px
		padding: 34px 50px 32px
		left: 20px
		width: calc(100% - 40px)
		+r(1440)
			padding: 34px 20px 32px
			justify-content: space-between
		+r(1200)
			width: calc(100% - 40px)
			left: 20px
		+r(991)
			padding: 21px 71px
			top: 0
			left: 0
			right: 0
			width: 100%
			justify-content: start
		+r(768)
			padding: 15px 26px
		&::before
			content: ""
			top: 0
			left: 0
			right: 0
			bottom: 0
			position: absolute
			background: rgba($dark200, 0)
			border-radius: 0px
			transition: 0.3s ease all
			+r(991)
				border-radius: 0px
				background: rgba($dark, 1)
		&.notfirstscreen
			opacity: 1
			top: 0px
			&::before
				background: $dark200
		&.hide
			transform: translateY(-200%)
			opacity: 0
			transition-delay: 0
</style>
