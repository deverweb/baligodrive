<template>
  <div class="quiz-question-title mb-[38px] flex items-center text-light">
    <div
      class="quiz-question-title-number mr-[30px] flex-shrink-0 sm:mr-[15px] relative font-Helvbold text-[14px] bg-green rounded-full sm:w-[25px] sm:h-[25px] w-[32px] h-[32px]"
    >
      <span
        class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        >{{ props.num }}</span
      >
    </div>
    <div
      class="quiz-question-title-label text-[18px] sm:text-[16px] sm:leading-[20px] sm:pr-[30px] font-Helvmed"
    >
      {{ props.text }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  num: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style lang="sass"></style>
