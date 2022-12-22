<template>
  <section
    class="invest z-[5] md:overflow-hidden sm:rounded-[44px] rounded-[70px] md:pl-[33px] xsm:pl-[0px] rounded-b-none relative md:pt-[93px] xsm:pt-[76px] sm:pb-[303px] pt-[120px] md:pb-[310px] pb-[203px] bg-light text-dark-300"
  >
    <div class="container">
      <div
        class="invest-content max-w-[50%] md:max-w-[80%] xsm:max-w-full xsm:text-center"
      >
        <h2
          class="font-Euroblack text-[48px] leading-[0.96] sm:text-[26px] lil:text-[22px] uppercase tracking-[-2px] invest-title mb-[28px] xsm:mb-[27px]"
        >
          {{ $t("mainPageInvest.title") }}
        </h2>
        <p
          class="section-desc invest-desc mb-[31px] md:mb-[28px] xsm:mb-[30px]"
        >
          {{ $t("mainPageInvest.text") }}
        </p>
        <TheButton
          @click="globalStore.activeInvestModal = true"
          class="w-[328px] z-[3] btn-primary__light white h-[70px] md:w-[339px] gap-[9px] xsm:max-w-[340px] xsm:w-full text-light"
        >
          <SvgMoneyIcon fill="white"></SvgMoneyIcon>
          <span class="text-[16px] tracking-[0.3px] relative top-[1px]">{{
            $t("mainPageInvest.btnText")
          }}</span>
        </TheButton>
      </div>
      <div
        class="invest-img absolute bottom-[70px] xsm:w-[80%] left-[51.6%] sm:bottom-[30px] sm:left-[40%] md:w-[60%] xsm:left-[12.5%] md:left-[40.5%] md:bottom-[49px]"
      >
        <img :src="'/img/index/invest-arrow.png'" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useGlobalStore } from "~~/store/global";

let globalStore = useGlobalStore();
</script>

<style lang="sass"></style>
