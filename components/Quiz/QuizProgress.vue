<template>
	<div class="quiz-progress">
		<div class="quiz-progress-label mb-[11px]">
			<span class="text-light text-[14px] mr-[5px]">Готово:</span>
			<span class="text-green font-Helvbold text-[16px]"
				>{{ props.progress }}%</span
			>
		</div>
		<div class="quiz-progress-line rounded-[10px] bg-[#343434] h-[6px]">
			<div
				class="quiz-progress-line-inner transition-[width] duration-300 h-full bg-green rounded-[10px]"
				:style="`width: ${props.progress}%`"
			></div>
		</div>
	</div>
</template>

<script setup>
let props = defineProps({
	progress: {
		type: Number,
		required: true,
	},
});
</script>

<style lang="sass">
.quiz
	&-progress
		&-line
			&-inner
				box-shadow: 0px 5px 10px -1px rgba(48, 178, 27, 0.3)
</style>
