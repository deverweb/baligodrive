<template>
	<div
		class="mobile-menu overflow-y-auto hidden md:block rounded-b-[44px] xsm:rounded-none xsm:pl-[26px] xsm:pr-[5px] xsm:pt-[58px] absolute top-[90px] sm:top-[80px] w-full left-0 md:h-[355px] md:pr-[50px] md:pl-[49px] md:pt-[49px]"
		v-show="active"
	>
		<div class="mobile-menu-inner flex flex-col justify-between h-full">
			<ul
				class="font-Euroblack mobile-menu-nav lil:text-[20px] text-[24px] uppercase text-light tracking-[-0.8px]"
			>
				<li v-for="link in links">
					<NuxtLink :to="link.link">{{ link.label }}</NuxtLink>
				</li>
			</ul>
			<div
				class="mobile-menu-lang xsm:pt-[40px] xsm:pb-[80px] hidden xsm:flex items-center"
			>
				<WorldIcon class="opacity-[0.3] mr-[14px]"></WorldIcon>
				<ul
					class="mobile-menu-lang-list leading-[1] flex items-center gap-[17px]"
				>
					<li v-for="lc in locales" @click="setLocale(lc.code)">
						<button
							:class="lc.code == locale ? 'opacity-100' : 'opacity-20'"
							class="uppercase text-light"
						>
							{{ lc.code }}
						</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
import WorldIcon from "../Svg/WorldIcon.vue";
const { links, active } = defineProps({ links: Array, active: Boolean });

const { t, locale, locales, setLocale } = useI18n();
</script>

<style lang="sass">
@mixin r($screenWidth)
	@media only screen and (max-width: $screenWidth + 'px')
		@content


@mixin rmin($screenWidth)
	@media only screen and (min-width: $screenWidth + 'px')
		@content
.mobile
	&-menu
		height: calc(100vh - 40px)
		+r(769)
			height: calc(100vh - 80px)
		&-inner
			height: 340px
			+r(600)
				height: 100%

		.router-link-active
			color: $green
		&-nav
			li
				margin-bottom: 17px
				+r(600)
					margin-bottom: 22px

				&:last-child
					margin-bottom: 0
.header
	.mobile-menu
		background-color: $dark
		border-top: 1px solid $dark500
	&.notfirstscreen
		.mobile-menu
			background-color: $dark600
			border-top: none
</style>
