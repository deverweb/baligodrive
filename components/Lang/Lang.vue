<template>
	<div class="lang relative top-[-2px] xl:top-0 justify-end flex">
		<button
			@click="showPopup"
			class="lang-current flex items-center cursor-pointer"
		>
			<WorldIcon class="opacity-[0.3] mr-[7px] md:mr-[9px]"></WorldIcon>
			<span class="uppercase lang-label mr-[7px] md:mr-[10px] w-[25px]">{{
				locale
			}}</span>
			<ArrowIcon
				:class="popupActive ? 'rotate-180' : 'rotate-0'"
				stroke="#FBFBFD"
				class="transition-transform duration-200 w-[12px] h-[12px]"
			></ArrowIcon>
		</button>
		<Transition>
			<div
				class="lang-popup z-[2] right-[-27px] xl:right-0 absolute rounded-[13px] text-[16px] pt-[20px] w-[240px] bg-dark-200 text-light"
				v-show="popupActive"
			>
				<ul>
					<li
						:key="lc"
						@click="() => switchLocale(lc.code)"
						:class="lc.code == locale ? 'bg-dark-400' : 'bg-dark-200'"
						v-for="lc in locales"
						class="pl-[24px] pt-[11px] pb-[13px] cursor-pointer"
					>
						{{ lc.name }}
					</li>
				</ul>
			</div>
		</Transition>
	</div>
</template>

<script setup>
import WorldIcon from "../Svg/WorldIcon.vue";
import ArrowIcon from "../Svg/ArrowIcon.vue";
const { t, locale, locales, setLocale } = useI18n();
let popupActive = ref(false);
const showPopup = () => {
	popupActive.value = !popupActive.value;
};
const closePopup = (e) => {
	if (e.target.closest(".lang")) return;
	popupActive.value = false;
};
onMounted(() => {
	window.addEventListener("click", closePopup);
});

onUnmounted(() => {
	window.removeEventListener("click", closePopup);
});
const switchLocale = (code) => {
	setLocale(code);
	popupActive.value = false;
};
const currentLang = ref(false);
</script>

<style lang="sass" scoped>
.lang
	&-popup
		top: calc(100% + 20px)
	li
		line-height: 1.31
		&:last-child
			border-bottom-left-radius: 13px
			border-bottom-right-radius: 13px
.v-enter-active,
.v-leave-active
	transition: transform 0.3s ease, opacity 0.3s ease


.v-enter-from,
.v-leave-to
	opacity: 0
	transform: translateY(-15px)
</style>
