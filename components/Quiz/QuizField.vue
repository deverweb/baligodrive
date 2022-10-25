<template>
	<div class="quiz-field">
		<button
			class="quiz-component w-full relative z-[1] flex border-solid bg-dark-900 border-[#69696A] border-[1px] rounded-[12px] h-[67px] pl-[23px] pr-[29px] items-center text-light text-[16px]"
			@click="emit('changeVisible')"
		>
			<slot></slot>
			<span class="quiz-current leading-[1.3]">{{ selectedOptionLabel }}</span>
			<SvgArrowIcon
				class="ml-auto w-[10px] h-[10px]"
				stroke="#FBFBFD"
			></SvgArrowIcon>
		</button>
	</div>
</template>

<script setup>
let props = defineProps({
	selectedOptionLabel: {
		required: false,
		type: String,
	},
});

let emit = defineEmits(["changeVisible"]);
</script>

<style lang="sass"></style>
