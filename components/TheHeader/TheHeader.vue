<template>
	<header class="z-[10] header absolute md:relative w-full">
		<div
			class="header-first-screen xsm:pt-[15px] xsm:pb-[14px] md:py-[20px] header-child absolute md:relative md:top-0 mt-[32px] md:mt-0 xl:px-[50px] md:px-[50px] px-[80px] inset-x-0"
		>
			<Logo class="flex-1"></Logo>
			<TheNav class="header-nav md:hidden" :links="navLinks"></TheNav>
			<Lang class="flex-1 md:flex-initial md:mr-[38px] xsm:hidden"></Lang>
			<GambBtn
				@click="activeFirstMenu = !activeFirstMenu"
				class="md:flex hidden"
			></GambBtn>
			<Transition>
				<MobileMenu :links="navLinks" :active="activeFirstMenu"></MobileMenu>
			</Transition>
		</div>
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
	</header>
</template>

<script setup>
let activeFirstMenu = ref(false);
let activeFixedMenu = ref(false);
let route = useRoute();

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
	let lastScrollTop = ref(window.pageYOffset);
	let firstSection = document.querySelector("section");
	let firstSectionHeight = firstSection.getBoundingClientRect().height;
	window.addEventListener("resize", () => {
		firstSectionHeight = firstSection.getBoundingClientRect().height;
		if (firstSectionHeight > window.pageYOffset) {
			document.querySelector(".header-fixed").classList.add("firstscreen");
		} else {
			document.querySelector(".header-fixed").classList.remove("firstscreen");
		}
		if (window.pageYOffset > lastScrollTop.value) {
			if (firstSectionHeight < window.pageYOffset) {
				document.querySelector(".header-fixed").classList.remove("visible");
			}
		} else {
			document.querySelector(".header-fixed").classList.add("visible");
		}
	});
	window.addEventListener("scroll", () => {
		if (firstSectionHeight > window.pageYOffset) {
			document.querySelector(".header-fixed").classList.add("firstscreen");
		} else {
			document.querySelector(".header-fixed").classList.remove("firstscreen");
		}
		if (window.pageYOffset > lastScrollTop.value) {
			if (firstSectionHeight < window.pageYOffset) {
				document.querySelector(".header-fixed").classList.remove("visible");
			}
		} else {
			document.querySelector(".header-fixed").classList.add("visible");
		}

		lastScrollTop.value = window.pageYOffset <= 0 ? 0 : window.pageYOffset;
	});
});

watch(
	() => {
		return route.fullPath;
	},
	() => {
		activeFirstMenu.value = false;
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
	&-first-screen
		+r(991)
			&::before
				content: ""
				top: 0
				left: 0
				right: 0
				bottom: 0
				position: absolute
				background: $dark
		+r(600)
			padding: 15px 25px 16px
		.mobile-menu
			+r(991)
				background: $dark
				border-top: 1px solid $dark500
			+r(768)
				max-height: 600px
	&-fixed
		opacity: 0
		transform: translateY(-400px)
		transition: 0.3s all ease
		position: fixed
		top: 30px
		padding: 34px 50px 32px
		left: 100px
		width: calc(100% - 185px)
		+r(1440)
			padding: 34px 20px 32px
			justify-content: space-between
		+r(1200)
			width: calc(100% - 40px)
			left: 20px
		+r(991)
			padding: 15px 68px
			top: 0
			left: 0
			right: 0
			border-radius: 0px
			width: 100%
			justify-content: start
		+r(768)
			padding: 15px 26px
		&::before
			content: ""
			top: 0
			left: 0
			border-radius: 20px
			right: 0
			bottom: 0
			position: absolute
			background: $dark200
			+r(991)
				border-radius: 0px

		&.visible
			transform: translateY(0px)
			opacity: 1
			transition: 0.3s all ease
		&.firstscreen
			opacity: 0
			transform: translateY(-400px)
			transition: 0.3s all ease
</style>
