<template>
  <section class="how bg-dark-300">
    <div class="container">
      <h2 class="section-title text-light text-center mb-[32px] md:mb-[26px] sm:mb-[31px]">Как это<br />работает?</h2>
      <p class="how-desc section-desc mb-[62px] sm:mb-[51px] max-w-[370px] text-light text-center mx-auto">Мы принимаем онлайн оплату в рублях, гривнах, долларах, евро и криптовалюте.</p>
      <div class="how-blocks grid grid-cols-3 gap-[24px] sm:gap-[20px] md:grid-cols-1 md:items-center md:gap-[30px]">
        <div
          v-for="(action, i) in props.blocks"
          :key="i"
          :class="action.text ? 'py-[36px] sm:pt-[29px] sm:pb-[40px]' : 'pt-[33px] pb-[30px] sm:pt-[29px] sm:pb-[36px]'"
          class="how-block rounded-[12px] bg-light flex flex-col items-center md:max-w-[440px] md:w-[100%] md:mx-auto"
        >
          <span class="how-block-num w-[32px] sm:mb-[10px] h-[32px] font-Helvbold rounded-full bg-green flex items-center justify-center text-[14px] text-light mb-[6px]">{{ `0${i + 1}` }}</span>
          <div class="how-block-title px-[15px] text-center text-[22px] sm:text-[18px] text-dark font-Helvbold" :class="{ 'mb-[6px]': action.text }">
            {{ action.title }}
          </div>
          <div v-if="action.text" class="how-block-text text-[16px] sm:text-[14px] leading-[20px] sm:leading-[18px] max-w-[250px] sm:max-w-[200px] text-center text-dark">
            {{ action.text }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  sectionTitle: {
    type: String,
    required: true,
  },
  sectionSubtitle: {
    type: String,
    required: true,
  },
  blocks: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="sass"></style>
