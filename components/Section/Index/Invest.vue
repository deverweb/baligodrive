<template>
  <section class="invest z-[5] md:overflow-hidden sm:rounded-[44px] rounded-[70px] md:pl-[33px] xsm:pl-[0px] rounded-b-none relative md:pt-[93px] xsm:pt-[76px] sm:pb-[303px] pt-[112px] md:pb-[240px] pb-[110px] bg-light text-dark-300">
    <div class="container">
      <div class="invest-content max-w-[50%] md:max-w-[80%] xsm:max-w-full xsm:text-center">
        <h2 class="section-title invest-title mb-[28px] xsm:mb-[27px]">ИНВЕСТИРУЙТЕ БЕЗ РИСКОВ</h2>
        <p class="section-desc invest-desc mb-[31px] md:mb-[28px] xsm:mb-[30px]">В связи с политической обстановкой в мире, мы решили предложить инвесторам диверсификацию рисков — инвестиции в бизнес аренды скутеров на острове Бали.</p>
        <TheButton class="w-[328px] btn-primary__light white h-[70px] md:w-[339px] gap-[9px] xsm:max-w-[340px] xsm:w-full text-light">
          <SvgMoneyIcon></SvgMoneyIcon>
          <span class="text-[16px] tracking-[0.3px] relative top-[1px]">Подробнее об инвестициях</span>
        </TheButton>
      </div>
      <div class="invest-img absolute bottom-0 left-[51.6%] sm:w-[96%] sm:bottom-0 md:w-[82%] xsm:left-[6.5%] md:left-[20.5%] md:bottom-[-39px]">
        <img :src="'/img/index/invest-arrow.png'" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="sass"></style>
