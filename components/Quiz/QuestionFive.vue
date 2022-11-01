<template>
  <div class="quiz-question">
    <QuizQuestionTitle
      :num="4.1"
      :text="'Подтвердите вашу личность'"
    ></QuizQuestionTitle>
    <div class="quiz-question-inner">
      <div
        class="quiz-question-label text-light opacity-50 text-[14px] mb-[10px] font-Helvmed"
      >
        Подтвердите вашу личность
      </div>
      <label
        for="passport"
        class="quiz-question-file w-full pl-[26px] pr-[30px] flex items-center cursor-pointer rounded-[12px] border-[#69696A] border-[1px] border-solid h-[67px]"
      >
        <SvgFileIcon class="mr-[10px]"></SvgFileIcon>
        <span class="text-[16px] sm:text-[14px] text-light">{{
          useCurrentLabel
        }}</span>
        <input
          type="file"
          @change="handleFiles"
          class="hidden"
          name="passport"
          id="passport"
        />
        <SvgDownloadIcon class="ml-auto"></SvgDownloadIcon>
      </label>
    </div>
  </div>
</template>

<script setup>
let currentLabel = ref("");

const handleFiles = (event) => {
  currentLabel.value = event.target.files[0].name;
};

let useCurrentLabel = computed(() => {
  if (currentLabel.value == "") {
    return "Загрузите фото загранпаспорта";
  } else return currentLabel.value;
});
</script>

<style lang="sass"></style>
