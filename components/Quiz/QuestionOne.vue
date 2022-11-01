<template>
  <div class="quiz-question">
    <QuizQuestionTitle
      :num="1"
      :text="'Выберите байк и дополнительную комплектацию'"
    ></QuizQuestionTitle>
    <div
      class="quiz-question-inner grid grid-cols-2 sm:grid-cols-1 gap-x-[30px] gap-y-[32px]"
    >
      <QuizSelect
        :label="`Модель байка`"
        defaultAnswer="Выберите модель"
        :answers="bikesList"
      >
        <SvgBikeIcon fill="#6A6A6A" class="mr-[20px]"></SvgBikeIcon
      ></QuizSelect>
      <QuizSelect
        :label="`Защитные шлемы (включено в стоимость)`"
        defaultAnswer="Выберите количество шлемов"
        :answers="helmetOptions"
        ><SvgQuizHelmetIcon fill="#6A6A6A" class="mr-[20px]"></SvgQuizHelmetIcon
      ></QuizSelect>
      <QuizSelect
        :label="`Комплектация байка`"
        defaultAnswer="Выберите комплектацию"
        :answers="equipList"
        ><SvgEquipIcon class="mr-[20px]"></SvgEquipIcon
      ></QuizSelect>
      <QuizSelect
        :label="`Модель сёрфа`"
        defaultAnswer="Выберите модель"
        :answers="surfList"
        ><SvgSurfIcon stroke="#6A6A6A" class="mr-[20px]"></SvgSurfIcon
      ></QuizSelect>
    </div>
  </div>
</template>

<script setup>
const bikesList = [
  {
    title: "Модель байка 1",
  },
  {
    title: "Модель байка 2",
  },
  {
    title: "Модель байка 3",
  },
];
const helmetOptions = [
  {
    title: "Опция шлемов 1",
  },
  {
    title: "Опция шлемов 2",
  },
  {
    title: "Опция шлемов 3",
  },
];
const equipList = [
  {
    title: "Комплектация байка 1",
  },
  {
    title: "Комплектация байка 2",
  },
  {
    title: "Комплектация байка 3",
  },
];
const surfList = [
  {
    title: "Модель серфа 1",
  },
  {
    title: "Модель серфа 2",
  },
  {
    title: "Модель серфа 3",
  },
];

let selectedBike = ref(null);
let selectedHelmetOption = ref(null);
let selectedEquipOption = ref(null);
let selectedSurf = ref(null);
</script>

<style lang="sass"></style>
