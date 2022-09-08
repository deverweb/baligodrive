<template>
	<div class="bike bg-light py-[30px] px-[22px] rounded-[26px] flex flex-col">
		<div class="bike-title font-Helvbold uppercase text-[32px]">
			{{ bike.title }}
		</div>
		<div
			class="bike-subinfo text-dark opacity-[30%] text-[16px] leading-[1.25] mb-[45px]"
		>
			{{ bike.subinfo }}
		</div>
		<div class="bike-img mb-[35px] mt-auto">
			<img class="object-contain mx-auto max-w-full" :src="bike.img" alt="" />
		</div>
		<div class="bike-desc">
			<div
				class="bike-desc__label text-dark opacity-[30%] font-Helvmed text-[16px] mb-[10px]"
			>
				Описание байка:
			</div>
			<div class="bike-desc__text mb-[30px]">
				{{ bike.desc }}
			</div>
		</div>
		<div
			class="bike-price flex items-end font-Helvbold justify-between mb-[30px]"
		>
			<div class="bike-price__fuel text-[14px]">Расход: {{ bike.fuel }}</div>
			<div class="bike-price__value text-[18px]">
				от {{ bike.priceDay }} / день
			</div>
		</div>
		<TheButton
			class="h-[70px] w-full px-0 py-0 text-[16px] font-Helvmed text-light mb-[25px]"
		>
			<svg
				width="14"
				height="14"
				viewBox="0 0 14 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M11.6673 2.33325H11.0007V0.999919C11.0007 0.823108 10.9304 0.653538 10.8054 0.528514C10.6804 0.40349 10.5108 0.333252 10.334 0.333252C10.1572 0.333252 9.9876 0.40349 9.86258 0.528514C9.73755 0.653538 9.66732 0.823108 9.66732 0.999919V2.33325H4.33398V0.999919C4.33398 0.823108 4.26375 0.653538 4.13872 0.528514C4.0137 0.40349 3.84413 0.333252 3.66732 0.333252C3.49051 0.333252 3.32094 0.40349 3.19591 0.528514C3.07089 0.653538 3.00065 0.823108 3.00065 0.999919V2.33325H2.33398C1.80355 2.33325 1.29484 2.54397 0.919771 2.91904C0.544698 3.29411 0.333984 3.80282 0.333984 4.33325V4.99992H13.6673V4.33325C13.6673 3.80282 13.4566 3.29411 13.0815 2.91904C12.7065 2.54397 12.1978 2.33325 11.6673 2.33325Z"
					fill="white"
				/>
				<path
					d="M0.333984 11.6666C0.333984 12.197 0.544698 12.7057 0.919771 13.0808C1.29484 13.4559 1.80355 13.6666 2.33398 13.6666H11.6673C12.1978 13.6666 12.7065 13.4559 13.0815 13.0808C13.4566 12.7057 13.6673 12.197 13.6673 11.6666V6.33325H0.333984V11.6666Z"
					fill="white"
				/>
			</svg>
			<span>Забронировать</span>
		</TheButton>
		<div class="bike-detailed text-center">Подробнее</div>
	</div>
</template>

<script>
export default {
	props: ["bike"],
};
</script>

<style lang="sass">
.bike
	box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.07)
</style>
