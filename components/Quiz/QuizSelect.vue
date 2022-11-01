<template>
	<div
		class="quiz-select relative"
		ref="root"
		:class="quizListVisible ? 'z-[5]' : 'z-[4]'"
	>
		<div
			class="quiz-select-label text-light opacity-50 text-[14px] mb-[10px] font-Helvmed"
		>
			{{ props.label }}
		</div>
		<div class="quiz-select-container relative">
			<QuizField
				:selectedOptionLabel="selectedLabel"
				@change-visible="changeVisible"
				><slot></slot
			></QuizField>
			<Transition>
				<div
					class="quiz-list-container z-[0] top-[30px] absolute rounded-[12px] bg-[#353535] w-full"
					v-show="quizListVisible"
					:class="{ wshadow: quizListVisible }"
				>
					<ul class="quiz-list max-h-[400px] overflow-auto pt-[45px] pb-[11px]">
						<li
							v-for="(answer, i) in props.answers"
							@click="selectOption(answer)"
							class="quiz-list-item text-[16px] h-[61px] text-light pr-[21px] bg-[#353535] hover:bg-dark flex items-center pl-[50px] cursor-pointer"
						>
							{{ answer.title }}
						</li>
					</ul>
				</div>
			</Transition>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	label: {
		required: true,
		type: String,
	},
	answers: {
		required: true,
		type: Array,
	},
	defaultAnswer: {
		required: true,
		type: String,
	},
});
let quizListVisible = ref(false);
let root = ref(null);

let selectedOption = ref(null);

let changeVisible = () => {
	quizListVisible.value = !quizListVisible.value;
	if (quizListVisible.value)
		window.addEventListener("click", closeCSonWindowClick);
};
let selectOption = (option) => {
	selectedOption.value = option;
	quizListVisible.value = false;
	window.removeEventListener("click", closeCSonWindowClick);
};
const closeCSonWindowClick = (event) => {
	if (
		quizListVisible.value === true &&
		!root.value.isEqualNode(event.target.closest(".quiz-select"))
	) {
		quizListVisible.value = false;
		window.removeEventListener("click", closeCSonWindowClick);
	}
};

let selectedLabel = computed(() => {
	if (selectedOption.value == null) {
		return props.defaultAnswer;
	} else {
		return selectedOption.value.title;
	}
});

onUnmounted(() => {
	window.removeEventListener("click", closeCSonWindowClick);
});
</script>

<style lang="sass" scoped>
.v-enter-active
  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1)
.v-leave-active
  transition: none


.v-enter-from,
.v-leave-to
  transform: translate3d(0, -20px, 0)

.quiz-list-item
  transition: background 0.2s ease-in-out
  &:hover
    background-color: #3E3E3E

.quiz-list-container
  // overflow: hidden
  &.wshadow
    box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.12)
  &.index
    z-index: 3
</style>
