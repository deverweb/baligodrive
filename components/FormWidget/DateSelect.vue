<template>
	<div class="wg-datepicker">
		<div class="wg-datepicker-label">
			<SvgCalendarIcon></SvgCalendarIcon>
			<div class="wg-phone-label-text">
				<span class="">От какого — До какого</span>
			</div>
			<SvgArrowIcon
				class="ml-auto w-[10px] h-[18px] relative top-[2px]"
			></SvgArrowIcon>
		</div>
		<Transition name="popin">
			<div v-show="isVisible" class="wg-datepicker absolute">
				<DatePickerPanel :isVisible="false" :range="range"></DatePickerPanel>
			</div>
		</Transition>
	</div>
</template>

<script setup>
let isVisible = ref(true);
let range = ref({
	start: new Date(),
	end: null,
});
</script>

<style lang="sass"></style>
