<template>
  <section class="faq z-[5] rounded-b-[70px] sm:rounded-b-[44px] relative top-[-70px] pt-[120px] md:pt-[93px] xsm:pt-[79px] md:pb-[30px] xsm:pb-[10px] pb-[60px] bg-dark-300 text-light">
    <div class="container mb-[63px]">
      <h2 class="section-title text-center mb-[30px] md:mb-[26px] xsm:mb-[30px]">{{ props.title }}</h2>
      <p class="section-desc text-center mb-[61px] xsm:mb-[50px]">{{ props.subTitle }}</p>
      <div class="faq-questions grid grid-cols-2 gap-x-[20px] md:grid-cols-1 md:max-w-[628px] md:w-full md:mx-auto">
        <div class="faq-questions-col gap-y-[10px] flex flex-col md:mb-[10px]">
          <SectionFaqQuestion v-for="(question, i) in props.questions.slice(0, Math.ceil(props.questions.length / 2))" :question="question"></SectionFaqQuestion>
        </div>
        <div class="faq-questions-col gap-y-[10px] col-start-2 md:col-start-auto flex flex-col">
          <SectionFaqQuestion v-for="(question, i) in props.questions.slice(Math.ceil(props.questions.length / 2, props.questions.length / 2))" :question="question"></SectionFaqQuestion>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
let props = defineProps({
  title: {
    required: true,
    type: String,
  },
  subTitle: {
    required: true,
    type: String,
  },
  questions: {
    required: true,
    type: Array,
  },
})
</script>

<style lang="sass"></style>
