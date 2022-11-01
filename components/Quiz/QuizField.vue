<template>
  <div class="quiz-field">
    <button
      class="quiz-component w-full relative sm:pl-[23px] sm:pr-[30px] z-[1] flex border-solid bg-dark-900 border-[#69696A] border-[1px] rounded-[12px] h-[67px] pl-[23px] lg:pl-[20px] lg:pr-[24px] pr-[29px] items-center text-light text-[16px]"
      @click="emit('changeVisible')"
    >
      <slot></slot>
      <span
        class="quiz-current lg:text-[14px] text-left pr-[20px] lg:pr-[5px] leading-[1.3]"
        >{{ selectedOptionLabel }}</span
      >
      <SvgArrowIcon
        class="ml-auto w-[10px] h-[10px] lg:w-[8px] lg:h-[8px]"
        stroke="#FBFBFD"
      ></SvgArrowIcon>
    </button>
  </div>
</template>

<script setup>
let props = defineProps({
  selectedOptionLabel: {
    required: false,
    type: String,
  },
});

let emit = defineEmits(["changeVisible"]);
</script>

<style lang="sass">
.quiz-field
  svg
    flex-shrink: 0
</style>
