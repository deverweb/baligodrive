<template>
  <div
    class="offer px-[80px] xsm:px-[25px] md:px-[50px] lg:px-[30px] md:pb-[28px] pb-[50px] xsm:min-h-[470px] md:min-h-[650px] rounded-t-[70px] sm:rounded-t-[44px] xsm:h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] h-[calc(100vh-20px)] bg-center bg-cover"
  >
    <div
      class="offer-inner flex flex-col xsm:justify-center justify-end h-full"
    >
      <h1
        class="offer-title xsm:leading-[1.08] xsm:mb-[23px] xsm:tracking-[-1.6px] md:mb-[78px] xsm:text-[calc(var(--index)*3)] sm:text-[calc(var(--index)*4)] max-w-[70%] xl:max-w-[80%] tracking-[-2.6px] md:max-w-none md:leading-[1] md:text-[72px] text-[74px] font-Euroblack uppercase leading-[0.96]"
      >
        Аренда байков и досок для серфинга на Бали
      </h1>
      <div class="offer-block hidden md:flex sm:flex-col">
        <TheButton
          @click="handleOfferClick"
          class="btn-primary__blur mr-[30px] xsm:h-[70px] xsm:max-w-[340px] xsm:w-full sm:mr-0 gap-[9px] text-[18px] w-[300px] h-[82px]"
        >
          <SvgCalendarIcon></SvgCalendarIcon>
          <span>Забронировать</span>
        </TheButton>
        <p
          class="max-w-[300px] sm:mb-[45px] font-Helvmed text-[20px] xsm:max-w-[340px] xsm:text-[16px] leading-[1.3] sm:order-[-1]"
        >
          Сервис с большим выбором серфбордов и байков с креплениями под них.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleOfferClick = () => {
  document.querySelector(".order ").scrollIntoView({ behavior: "smooth" });
};
</script>

<style lang="sass" scoped>
.offer
	background: linear-gradient(216.14deg,transparent 50.79%,#000 107.31%), url('/img/index/offer-bg.png') no-repeat left / cover
	+r(991)
		background: linear-gradient(217.85deg, rgba(0, 0, 0, 0) 48.32%, #000000 84.52%), url('/img/index/offer-bg.png') no-repeat left / cover
	+r(768)
		background: linear-gradient(216.14deg, rgba(0, 0, 0, 0) 16.88%, #000000 81.14%), url('/img/index/offer-bg.png') left bottom / cover
</style>
