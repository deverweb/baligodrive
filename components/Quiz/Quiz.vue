<template>
	<div
		class="quiz mt-[160px] w-full mx-auto text-light max-w-[1368px] h-[700px] flex"
	>
		<div
			class="quiz-content pb-[60px] flex flex-col pt-[67px] grow px-[78px] bg-[#2B2B2B] rounded-tl-[12px] rounded-bl-[12px]"
		>
			<div class="quiz-content-title quiz-inner-title pb-[38px]">
				<h2 class="font-Euroblack text-[32px] tracking-[-1.1px] uppercase">
					ОФОРМЛЕНИЕ ЗАКАЗА
				</h2>
			</div>
			<div class="quiz-content-question pt-[50px]">
				<!-- <TransitionGroup> -->
				<QuizQuestionOne v-show="currentSlide == 1"></QuizQuestionOne>
				<QuizQuestionTwo v-show="currentSlide == 2"></QuizQuestionTwo>
				<QuizQuestionThree v-show="currentSlide == 3"></QuizQuestionThree>
				<QuizQuestionFour v-show="currentSlide == 4"></QuizQuestionFour>
				<QuizQuestionFive v-show="currentSlide == 5"></QuizQuestionFive>
				<QuizQuestionSix v-show="currentSlide == 6"></QuizQuestionSix>
				<!-- </TransitionGroup> -->
			</div>
			<div class="quiz-bottom mt-auto flex gap-[68px] items-center w-full">
				<QuizProgress
					class="shrink grow"
					:progress="calculatedProgress"
				></QuizProgress>
				<div class="quiz-buttons flex items-center gap-[15px] shrink-0 grow-0">
					<button
						:disabled="currentSlide == 0"
						@click="currentSlide--"
						class="quiz-buttons-prev h-[67px] w-[67px] rounded-[12px] flex items-center justify-center border-solid border-[2px] border-[#343434]"
					>
						<svg
							width="11"
							height="10"
							viewBox="0 0 11 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.540381 4.54038C0.28654 4.79422 0.28654 5.20578 0.54038 5.45962L4.67695 9.59619C4.9308 9.85003 5.34235 9.85003 5.59619 9.59619C5.85003 9.34235 5.85003 8.9308 5.59619 8.67695L1.91924 5L5.59619 1.32304C5.85004 1.0692 5.85004 0.657646 5.59619 0.403806C5.34235 0.149965 4.9308 0.149965 4.67696 0.403806L0.540381 4.54038ZM11 4.35L1 4.35L1 5.65L11 5.65L11 4.35Z"
								fill="#777777"
							/>
						</svg>
					</button>
					<TheButton @click="currentSlide++" c class="w-[180px] h-[67px] black"
						><span>{{ nextButtonLabel }} </span></TheButton
					>
				</div>
			</div>
		</div>
		<QuizCart></QuizCart>
	</div>
</template>

<script setup>
// import QuestionOne from "./QuestionOne.vue";

let currentSlide = ref(1);
let quizList = ref([
	{
		quizQuestionNumber: 1,
		quizProgress: 20,
		currentSlide: true,
		completed: false,
		quizMainQuestion: "Выберите байк ",
		questions: [
			{
				type: "Select",
				icon: "/svg/bike.svg",
				question: "Модель байка",
				defaultLabel: "Выберите модель",
				list: [
					"Байк 1",
					"yamaha nmax 2022",
					"yamaha nmax 2021",
					"Байк 1",
					"yamaha nmax 2022",
					"yamaha nmax 2021",
				],
			},
			{
				type: "Select",
				icon: "/svg/helmet.svg",
				question: "Защитные шлемы (включено в стоимость)",
				defaultLabel: "Выберите количество шлемов",
				list: ["Шлем 1 2022", "Шлем 2 2022", "Шлем 3 2022", "Шлем 4 2022"],
			},
			{
				type: "Select",
				icon: "/svg/equip.svg",
				question: "Комплектация байка",
				defaultLabel: "Выберите комплектацию",
				list: [
					"Комплектация 1 2022",
					"Комплектация 2 2022",
					"Комплектация 3 2022",
					"Комплектация 4 2022",
				],
			},
			{
				type: "Select",
				icon: "/svg/helmet.svg",
				question: "Модель сёрфа",
				defaultLabel: "Выберите модель",
				list: [
					"Серфдоска 1 2022",
					"Серфдоска 2 2022",
					"Серфдоска 3 2022",
					"Серфдоска 4 2022",
				],
			},
		],
	},
	{
		quizQuestionNumber: 2,
		quizProgress: 20,
		currentSlide: false,
		completed: false,
		quizMainQuestion:
			"и дополнительную комплектациюи дополнительную комплектацию дополнительную комплектацию",
		questions: [
			{
				type: "Select",
				icon: "/svg/bike.svg",
				question: "Модель байка",
				defaultLabel: "Выберите модель",
				list: [
					"Байк 1",
					"yamaha nmax 2022",
					"yamaha nmax 2021",
					"Байк 1",
					"yamaha nmax 2022",
					"yamaha nmax 2021",
				],
			},
			{
				type: "Select",
				icon: "/svg/helmet.svg",
				question: "Защитные шлемы (включено в стоимость)",
				defaultLabel: "Выберите количество шлемов",
				list: ["Шлем 1 2022", "Шлем 2 2022", "Шлем 3 2022", "Шлем 4 2022"],
			},
			{
				type: "Select",
				icon: "/svg/equip.svg",
				question: "Комплектация байка",
				defaultLabel: "Выберите комплектацию",
				list: [
					"Комплектация 1 2022",
					"Комплектация 2 2022",
					"Комплектация 3 2022",
					"Комплектация 4 2022",
				],
			},
			{
				type: "Select",
				icon: "/svg/helmet.svg",
				question: "Модель сёрфа",
				defaultLabel: "Выберите модель",
				list: [
					"Серфдоска 1 2022",
					"Серфдоска 2 2022",
					"Серфдоска 3 2022",
					"Серфдоска 4 2022",
				],
			},
		],
	},
]);

let slidesProgress = [20, 20, 20, 20, 10, 9];

let calculatedProgress = computed(() => {
	return slidesProgress.slice(0, currentSlide.value).reduce((prev, curr) => {
		return prev + curr;
	}, 0);
});

let nextButtonLabel = computed(() => {
	if (currentSlide.value == 6) {
		return "Забронировать";
	}
	if (currentSlide.value == 7) {
		return "Оплатить";
	}

	return "Далее";
});
</script>

<style lang="sass">

.quiz-inner-title
  +eu
  text-transform: uppercase
  position: relative
  &::before
    content: ""
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: 2px
    background-color: #3F3F40
</style>
