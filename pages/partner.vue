<template>
  <section
    class="rounded-t-[70px] sm:rounded-t-[44px] relative poffer pl-[85px] min-h-[996px] h-screen bg-dark-700"
  >
    <div class="poffer-content h-full flex flex-col pt-[287px]">
      <h1
        class="text-[70px] mb-[32px] relative left-[-5px] tracking-[-2.2px] max-w-[60%] lg:max-w-[80%] md:max-w-none font-Euroblack uppercase leading-[67px]"
      >
        ИнвестиРУЙТЕ<br />в бизнес аренды скутеров на балИ
      </h1>
      <p
        class="mb-[81px] leading-[25px] w-[100%] max-w-[571px] text-[20px] tracking-[0.3px]"
      >
        И получайте фиксированную доходность от 12% годовых в долларах и с
        ежемесячными выплатами процентов.
      </p>
      <div class="poffer-content-invest flex items-center">
        <TheButton class="w-[330px] h-[79px] black gap-[10px] mr-[40px]">
          <SvgMoneyIcon></SvgMoneyIcon>
          <span>Инвестировать</span>
        </TheButton>
        <button class="poffer-how flex items-center cursor-pointer gap-[16px]">
          <SvgPlayIcon></SvgPlayIcon>
          <span>Как это работает?</span>
        </button>
      </div>
    </div>
    <div class="poffer-bike absolute right-[-20px]">
      <img :src="'/img/partner/offer-bike.png'" alt="" />
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "Baligodrive Partner",
});
</script>

<style lang="sass"></style>
