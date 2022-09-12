<template>
	<div
		@mouseover="upHere = true"
		@mouseleave="upHere = false"
		:class="upHere ? 'z-[5]' : 'z-[4]'"
		class="tooltip absolute flex items-center justify-center rounded-full bg-light w-[52px] h-[52px]"
	>
		<img :src="tooltip.svg" class="relative left-[-4.3%] bottom-[-3%]" alt="" />
		<PlusIcon class="absolute top-[14px] right-[12px]"></PlusIcon>
		<div
			v-show="upHere"
			class="tooltip-popup top-0 absolute w-[240px] rounded-[13px] bg-dark-200 py-[28px] pl-[24px] pr-[16px] text-[16px] text-light leading-[21px]"
		>
			<svg
				width="31"
				height="20"
				viewBox="0 0 31 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="absolute top-0"
			>
				<path
					d="M31 20L-8.74228e-07 1.90735e-06L31 5.52296e-07L31 20Z"
					fill="#1E1E1E"
				/>
			</svg>

			{{ tooltip.info }}
		</div>
	</div>
</template>

<script>
import PlusIcon from "../Svg/PlusIcon.vue";
export default {
	props: {
		tooltip: {
			type: Object,
			required: true,
		},
	},
	setup() {
		let upHere = ref(false);

		return { upHere };
	},
	components: { PlusIcon },
};
</script>

<style lang="sass" scoped>
.tooltip
	&-popup
		left: calc(100% + 18px)
		svg
			left: calc(0% - 15px)
</style>
