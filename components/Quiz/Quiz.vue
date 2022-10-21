<template>
	<div
		class="quiz mt-[162px] w-full mx-auto text-light max-w-[1368px] h-[700px] flex"
	>
		<div
			class="quiz-content flex flex-col justify-between pt-[65px] grow px-[78px] bg-[#2B2B2B] rounded-tl-[12px] rounded-bl-[12px]"
		>
			<div class="quiz-content-title quiz-inner-title pb-[38px]">
				<h2 class="font-Euroblack text-[32px] tracking-[-1.1px] uppercase">
					ОФОРМЛЕНИЕ ЗАКАЗА
				</h2>
			</div>
			<div class="quiz-content-question pt-[50px]">
				<TransitionGroup>
					<div
						class="quiz-question absolute"
						:key="question.quizQuestionNumber"
						v-for="(question, i) in quizList"
						v-show="currentSlide == i"
					>
						<div
							class="quiz-question-title pl-[2px] flex items-center text-light"
						>
							<div
								class="quiz-question-title-number mr-[30px] relative font-Helvbold text-[14px] bg-green rounded-full w-[32px] h-[32px]"
							>
								<span
									class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
									>{{ question.quizQuestionNumber }}</span
								>
							</div>
							<div class="quiz-question-title-label text-[18px] font-Helvmed">
								{{ question.quizMainQuestion }}
							</div>
						</div>
					</div>
				</TransitionGroup>
			</div>
			<div class="quiz-progress">
				<div class="quiz-progress-line">
					<div class="quiz-progress-line-label"></div>
					<div class="quiz-progress-line-span"></div>
				</div>
				<div class="quiz-buttons flex items-center gap-[15px]">
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
						><span>Далее </span></TheButton
					>
				</div>
			</div>
		</div>
		<div
			class="quiz-cart pt-[68px] flex flex-col items-center text-center rounded-tr-[12px] rounded-br-[12px] bg-dark-800 w-[378px] shrink-0"
		>
			<div class="quiz-cart-title px-[40px] w-full quiz-inner-title pb-[47px]">
				<h2 class="font-Euroblack text-[24px] uppercase tracking-[-0.8px]">
					Ваш заказ
				</h2>
			</div>
			<div class="quiz-cart-inner"></div>
		</div>
	</div>
</template>

<script setup>
let currentSlide = ref(0);
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

let progress = currentSlide.value;
</script>

<style lang="sass">
.v-enter-active,
.v-leave-active
  transition: opacity 1s ease


.v-enter-from,
.v-leave-to
  opacity: 0
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
