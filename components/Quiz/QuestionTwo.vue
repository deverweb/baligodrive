<template>
	<div class="quiz-question">
		<div
			class="quiz-question-title mb-[38px] pl-[2px] flex items-center text-light"
		>
			<div
				class="quiz-question-title-number mr-[30px] relative font-Helvbold text-[14px] bg-green rounded-full w-[32px] h-[32px]"
			>
				<span
					class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
					>2</span
				>
			</div>
			<div class="quiz-question-title-label text-[18px] font-Helvmed">
				Выберите период аренды
			</div>
		</div>
		<div class="quiz-question-inner">
			<div
				class="quiz-question-label text-light opacity-50 text-[14px] mb-[10px] font-Helvmed"
			>
				Выберите период аренды
			</div>
			<div class="quiz-question-container relative datepicker max-w-[50%]">
				<QuizField @click="setVisible" :selectedOptionLabel="selectedLabel"
					><SvgCalendarIcon class="mr-[10px]" fill="#69696A"></SvgCalendarIcon
				></QuizField>
				<div class="quiz-calendar absolute left-[calc(100%+30px)] top-[-130px]">
					<Transition name="translate">
						<DatePickerPanel
							@daypick="datePicked"
							v-show="isVisible"
						></DatePickerPanel>
					</Transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
let selectedAnswerLabel = ref("");
let isVisible = ref(false);

const datePicked = (str) => {
	selectedAnswerLabel.value = str;
};

let selectedLabel = computed(() => {
	if (selectedAnswerLabel.value == "") {
		return "Выберите даты аренды";
	} else {
		return selectedAnswerLabel.value;
	}
});

const setVisible = () => {
	isVisible.value = !isVisible.value;
	if (isVisible.value) {
		window.addEventListener("click", closeCSonWindowClick);
	}
};
const closeCSonWindowClick = (event) => {
	if (isVisible.value === true && !event.target.closest(".datepicker")) {
		isVisible.value = false;
		window.removeEventListener("click", closeCSonWindowClick);
	}
};

onUnmounted(() => {
	window.removeEventListener("click", closeCSonWindowClick);
});
</script>

<style lang="sass" scoped>
.translate-enter-active, .translate-leave-active
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1)



.translate-enter-from,
.translate-leave-to
  opacity: 0
  transform: translateX(-20px)
</style>
