<template>
  <div class="quiz-question">
    <QuizQuestionTitle
      :num="3"
      :text="'Выберите локации доставки и возврата'"
    ></QuizQuestionTitle>
    <div class="quiz-question-inner grid grid-cols-2 gap-x-[30px] gap-y-[32px]">
      <QuizSelect
        :label="`Локация доставки`"
        defaultAnswer="Выбрать отель / виллу / координаты"
        :answers="locationList"
      >
        <SvgGeoIcon fill="#545455" class="mr-[10px]"></SvgGeoIcon
      ></QuizSelect>
      <QuizSelect
        :label="`Время доставки`"
        defaultAnswer="Выбрать время доставки"
        :answers="timeList"
        ><SvgClockIcon class="mr-[10px]"></SvgClockIcon
      ></QuizSelect>
      <QuizSelect
        :label="`Комплектация байка`"
        defaultAnswer="Выбрать отель / виллу / координаты"
        :answers="locationList"
        ><SvgGeoIcon fill="#545455" class="mr-[10px]"></SvgGeoIcon
      ></QuizSelect>
      <QuizSelect
        :label="`Время возвратаа`"
        defaultAnswer="Выбрать время возврата"
        :answers="timeList"
        ><SvgClockIcon class="mr-[10px]"></SvgClockIcon
      ></QuizSelect>
    </div>
  </div>
</template>

<script setup>
const locationList = [
  { title: "Локация 1" },
  { title: "Локация 2" },
  { title: "Локация 3" },
  { title: "Локация 4" },
];
const timeList = [
  { title: "10:00" },
  { title: "11:00" },
  { title: "12:00" },
  { title: "13:00" },
  { title: "14:00" },
  { title: "15:00" },
  { title: "16:00" },
  { title: "17:00" },
  { title: "18:00" },
  { title: "19:00" },
  { title: "20:00" },
];
</script>

<style lang="sass"></style>
