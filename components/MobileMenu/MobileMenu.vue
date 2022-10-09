<template>
	<div
		class="mobile-menu hidden md:block rounded-b-[44px] xsm:rounded-none xsm:pl-[26px] xsm:pr-[5px] xsm:pt-[58px] overflow-hidden absolute top-full bg-dark-600 w-full left-0 md:h-[355px] md:pr-[68px] md:pl-[70px] md:pt-[50px] md:pb-[60px]"
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
			<div class="mobile-menu-lang hidden xsm:flex items-center">
				<WorldIcon class="opacity-[0.3] mr-[14px]"></WorldIcon>
				<ul class="mobile-menu-lang-list flex items-center gap-[17px]">
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
		+r(600)
			min-height: calc(100vh - 81px)

		.router-link-active
			color: $green
		&-nav
			li
				margin-bottom: 17px
				+r(600)
					margin-bottom: 22px

				&:last-child
					margin-bottom: 0
</style>
