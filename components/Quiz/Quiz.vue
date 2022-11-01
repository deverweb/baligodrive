<template>
  <div
    class="quiz mt-[160px] sm:mt-0 md:flex-col w-full mx-auto text-light md:mt-[32px] md:px-[0px] md:h-auto max-w-[1368px] h-[700px] flex"
  >
    <div
      class="quiz-content md:overflow-visible overflow-hidden sm:pb-[50px] lg:pb-[72px] pb-[64px] sm:px-[25px] md:px-[49px] lg:px-[30px] flex flex-col pt-[66px] grow px-[80px] bg-[#2B2B2B] md:bg-transparent rounded-tl-[12px] rounded-bl-[12px]"
    >
      <div
        class="quiz-content-title sm:pb-[36px] sm:text-center relative left-[-2px] quiz-inner-title uppercase font-Euroblack pb-[38px]"
      >
        <h2
          class="font-Euroblack text-[32px] sm:text-[28px] sm:leading-[27px] tracking-[-1.1px] uppercase"
        >
          ОФОРМЛЕНИЕ ЗАКАЗА
        </h2>
      </div>
      <div
        class="quiz-content-question sm:h-[658px] md:h-[417px] sm:pt-[42px] relative pt-[50px]"
      >
        <Transition name="quiz"
          ><QuizQuestionOne
            class="w-full absolute"
            v-if="currentSlide == 1"
          ></QuizQuestionOne
        ></Transition>
        <Transition name="quiz"
          ><QuizQuestionTwo
            class="w-full absolute"
            v-if="currentSlide == 2"
          ></QuizQuestionTwo
        ></Transition>
        <Transition name="quiz"
          ><QuizQuestionThree
            class="w-full absolute"
            v-if="currentSlide == 3"
          ></QuizQuestionThree
        ></Transition>
        <Transition name="quiz"
          ><QuizQuestionFour
            class="w-full absolute"
            v-if="currentSlide == 4"
          ></QuizQuestionFour
        ></Transition>
        <Transition name="quiz"
          ><QuizQuestionFive
            class="w-full absolute"
            v-if="currentSlide == 5"
          ></QuizQuestionFive
        ></Transition>
        <Transition name="quiz">
          <QuizQuestionSix
            class="w-full absolute"
            v-if="currentSlide == 6"
          ></QuizQuestionSix
        ></Transition>
      </div>
      <div
        class="quiz-bottom sm:gap-[50px] mt-auto sm:flex-col flex gap-[68px] lg:gap-[39px] items-center w-full"
      >
        <QuizProgress
          class="shrink grow sm:order-2"
          :progress="calculatedProgress"
        ></QuizProgress>
        <div
          class="quiz-buttons sm:justify-between sm:w-full flex items-center sm:gap-[23px] gap-[15px] shrink-0 grow-0"
        >
          <button
            :disabled="currentSlide == 1"
            @click="changeSlide(-1)"
            class="quiz-buttons-prev sm:flex-shrink-0 h-[67px] w-[67px] rounded-[12px] flex items-center justify-center border-solid border-[2px] border-[#515151]"
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
                fill="#FFFFFF"
              />
            </svg>
          </button>
          <TheButton
            @click="changeSlide(1)"
            c
            class="w-[180px] sm:w-full h-[67px] black"
            ><span>{{ nextButtonLabel }} </span></TheButton
          >
        </div>
      </div>
    </div>
    <QuizCart class="sm:hidden"></QuizCart>
  </div>
</template>

<script setup>
let currentSlide = ref(1);

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

const changeSlide = (direction) => {
  if (direction == -1 && currentSlide.value > 1) {
    currentSlide.value--;
  }
  if (direction == 1 && currentSlide.value < slidesProgress.length) {
    currentSlide.value++;
  }
};
</script>
<style lang="sass">

.quiz-enter-active, .quiz-leave-active
  transition: all 0.2s cubic-bezier(0.61,0.3,0.8,0.97)
  // transition-delay: 0.1s
.quiz-enter-from
  transform: translateX(-50%)
  opacity: 0
.quiz-leave-to
  opacity: 0
  transform: translateX(50%)
.quiz
  &-buttons
    &-prev
      opacity: 0.5
      transition: opacity 0.2s ease
      &:hover
        opacity: 1
      &:disabled
        opacity: 0.5
        cursor: not-allowed
.quiz-inner-title
  &::before
    content: ""
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: 2px
    background-color: #3F3F40
</style>
