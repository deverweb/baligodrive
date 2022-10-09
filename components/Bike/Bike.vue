<template>
	<div
		class="bike bg-light xsm:px-[56px] pb-[40px] pt-[33px] px-[41px] rounded-[26px] flex flex-col lg:max-w-[440px] lg:mx-auto"
	>
		<div
			class="bike-title xsm:tracking-[-0.2px] lil:text-[18px] xsm:mb-[46px] font-Helvbold uppercase text-[28px] mb-[64px] xsm:text-[22px]"
		>
			{{ bike.title }}
		</div>

		<div class="bike-img mb-[82px] xsm:mb-[63px] mt-auto">
			<img
				class="object-contain mx-auto max-w-full ml-[-5px]"
				:src="bike.img"
				alt=""
			/>
		</div>
		<div class="bike-desc">
			<div
				class="bike-desc__text text-[16px] xsm:tracking-[0.2px] text-dark xsm:text-[12px] xsm:leading-[16px] leading-[20px] xsm:mb-[18px] mb-[26px]"
			>
				{{ bike.desc }}
			</div>
		</div>
		<div
			class="bike-price flex items-end font-Helvbold justify-between mb-[26px] xsm:mb-[21px]"
		>
			<div class="bike-price__fuel text-[18px] xsm:text-[14px] lil:text-[10px]">
				Расход: {{ bike.fuel }}
			</div>
			<div
				class="bike-price__value text-[18px] xsm:text-[14px] lil:text-[10px]"
			>
				от {{ bike.priceDay }} / день
			</div>
		</div>
		<div class="bike-bottom flex items-center justify-between">
			<TheButton
				class="h-[70px] xsm:text-[12px] lil:mr-[8px] lil:text-[10px] lil:gap-[6px] xsm:h-[54px] xsm:w-full xsm:mr-[25px] gap-[11px] w-[250px] px-0 py-0 text-[16px] font-Helvmed text-light"
			>
				<CalendarIcon class="flex-shrink-0 w-[19px]"></CalendarIcon>
				<span>Забронировать</span>
			</TheButton>
			<button
				class="bike-detailed tracking-[-1.1px] font-Helvmed text-center text-[16px] xsm:text-[13px]"
			>
				Подробнее
			</button>
		</div>
	</div>
</template>

<script>
import CalendarIcon from "../Svg/CalendarIcon.vue";
export default {
	props: ["bike"],
	components: { CalendarIcon },
};
</script>

<style lang="sass">
.bike
	box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.07)
	&-detailed
		position: relative
		color: #AAAAAA
		&::before
			position: absolute
			content: ""
			bottom: -5px
			left: 0
			right: 0
			height: 1px
			background-color: #AAAAAA
</style>
