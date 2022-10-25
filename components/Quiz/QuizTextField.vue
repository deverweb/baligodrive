<template>
	<div class="quiz-textfield">
		<div
			class="quiz-select-label text-light opacity-50 text-[14px] mb-[10px] font-Helvmed"
		>
			{{ props.label }}
		</div>
		<div class="quiz-textfield-container">
			<div
				class="quiz-component w-full relative z-[1] flex border-solid bg-dark-900 border-[#69696A] border-[1px] rounded-[12px] h-[67px] pl-[23px] pr-[29px] items-center text-light text-[16px]"
				@click="emit('changeVisible')"
			>
				<slot></slot>
				<input
					:placeholder="props.placeholder"
					type="text"
					class="quiz-current h-full leading-[1.3] bg-transparent w-full"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
let props = defineProps({
	placeholder: {
		required: true,
		type: String,
	},
	label: {
		required: true,
		type: String,
	},
});

let emit = defineEmits(["changeVisible"]);
</script>

<style lang="sass" scoped>
.quiz-textfield
	input
		&:focus::placeholder
			color: transparent
		&::placeholder
			color: $light
</style>
