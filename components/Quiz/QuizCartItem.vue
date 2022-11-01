<template>
  <div
    class="quiz-cart-item items-center lg:border-none border-[#404040] border-solid border-b-[2px] py-[20px] flex gap-[20px]"
  >
    <div
      class="quiz-cart-item-img w-[70px] h-[70px] bg-[#404040] rounded-[10px] flex items-center justify-center"
    >
      <img class="object-contain" :src="props.obj.imgSrc" alt="" />
    </div>
    <div class="quiz-cart-item-text flex flex-col">
      <div
        class="quiz-cart-item-name text-light text-[16px] font-Helvmed mb-[3px]"
      >
        {{ props.obj.name }}
      </div>
      <div
        class="quiz-cart-item-price opacity-[0.5] text-light font-Helvmed text-[14px]"
      >
        {{ props.obj.hourPriceUsd }}$ / день
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="sass"></style>
