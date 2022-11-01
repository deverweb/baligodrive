<template>
  <div class="quiz-question">
    <QuizQuestionTitle
      :num="4"
      :text="'Введите ваши контактные данные'"
    ></QuizQuestionTitle>
    <div class="quiz-question-inner grid gap-x-[30px] gap-y-[32px] grid-cols-2">
      <QuizTextField label="Ваши ФИО" placeholder="Введите ваши ФИО"
        ><SvgPersonIcon class="mr-[10px]"></SvgPersonIcon
      ></QuizTextField>
      <QuizTextField label="Ваш E-mail" placeholder="Введите ваш E-mail"
        ><SvgMailIcon class="mr-[10px]" fill="#69696A"></SvgMailIcon
      ></QuizTextField>
      <QuizTextField label="Ваш номер телефона" placeholder="Введите ваш номер"
        ><SvgPhoneIcon class="mr-[10px]" fill="#69696A"></SvgPhoneIcon
      ></QuizTextField>
      <QuizSelect
        :answers="messengers"
        label="Мессенджеры"
        default-answer="Альтернативный способ связи"
        ><SvgMessageIcon class="mr-[10px]"></SvgMessageIcon
      ></QuizSelect>
    </div>
  </div>
</template>

<script setup>
let messengers = [
  {
    title: "Whatsapp",
  },
  {
    title: "Telegram",
  },
  {
    title: "Viber",
  },
];
</script>

<style lang="sass"></style>
