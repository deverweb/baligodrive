<template>
	<div class="quiz-select">
		<div class="test"></div>
	</div>
</template>

<script setup>
const props = defineProps({
	label: {
		required: true,
		type: String,
	},
	answerList: {
		required: true,
		type: Array,
	},
});
</script>

<style lang="sass"></style>
