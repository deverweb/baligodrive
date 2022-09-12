<template>
	<div class="orderbike relative">
		<img class="object-contain max-w-none" :src="bikeImageSrc" alt="" />
		<OrderBikeTooltip
			class="left-[9.4%] top-[29.5%]"
			:tooltip="tooltips.first"
		></OrderBikeTooltip>
		<OrderBikeTooltip
			class="left-[48.3%] top-[33.4%]"
			:tooltip="tooltips.second"
		></OrderBikeTooltip>
		<OrderBikeTooltip
			class="left-[-0.7%] top-[61.5%]"
			:tooltip="tooltips.third"
		></OrderBikeTooltip>
		<OrderBikeTooltip
			class="left-[41.2%] top-[59.6%]"
			:tooltip="tooltips.fourth"
		></OrderBikeTooltip>
	</div>
</template>

<script setup>
const bikeImageSrc = "/img/offer/order-bike.png";
const tooltips = reactive({
	first: {
		info: "Все байки оборудованы держателем для телефона или камеры",
		svg: "/svg/camera.svg",
	},
	second: {
		info: "Все байки оборудованы держателем для телефона или камеры",
		svg: "/svg/umbrella.svg",
	},
	third: {
		info: "Все байки оборудованы держателем для телефона или камеры",
		svg: "/svg/wrench.svg",
	},
	fourth: {
		info: "Все байки оборудованы держателем для телефона или камеры",
		svg: "/svg/helmet.svg",
	},
});
</script>

<style lang="sass"></style>
