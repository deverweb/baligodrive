<template>
	<div class="wg-select pb-[5px] cursor-pointer">
		<div
			@click="isActive = !isActive"
			class="wg-phone-label pr-[6px] pt-[31px] pb-[20px] flex items-center"
		>
			<slot></slot>
			<div class="wg-phone-label-text">
				<span class="">{{ props.label }}</span>
			</div>
			<SvgArrowIcon
				@click="isActive = !isActive"
				class="ml-auto w-[10px] h-[18px] relative top-[2px]"
			></SvgArrowIcon>
		</div>
		<ul class="wg-select-list">
			<li></li>
		</ul>
	</div>
</template>

<script setup>
let isActive = ref(false);
let props = defineProps({
	label: {
		type: String,
		required: true,
	},
});
</script>

<style lang="sass"></style>
