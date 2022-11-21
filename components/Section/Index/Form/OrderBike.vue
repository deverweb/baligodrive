<template>
  <div class="orderbike">
    <img class="object-contain max-w-none lg:max-w-full" :src="bikeImageSrc" alt="" />
    <SectionIndexFormTooltip class="left-[9.4%] top-[29.5%] sm:left-[13.6%] sm:top-[12.1%]" :tooltip="tooltips.first"></SectionIndexFormTooltip>
    <SectionIndexFormTooltip class="left-[48.3%] top-[33.4%] sm:left-[73.6%] sm:top-[18.6%]" :tooltip="tooltips.second"></SectionIndexFormTooltip>
    <SectionIndexFormTooltip class="left-[-0.7%] top-[61.5%] sm:top-[49.4%] sm:left-[35%]" :tooltip="tooltips.third"></SectionIndexFormTooltip>
    <SectionIndexFormTooltip class="left-[41.2%] top-[59.6%] sm:left-[66.6%] sm:top-[60.2%]" :tooltip="tooltips.fourth"></SectionIndexFormTooltip>
  </div>
</template>

<script setup>
const bikeImageSrc = "/img/index/order-bike.png"
const tooltips = {
  first: {
    info: "Все байки оборудованы держателем для телефона или камеры",
    svg: "/svg/camera.svg",
  },
  second: {
    info: "Все байки оборудованы держателем для телефона или камеры",
    svg: "/svg/umbrella.svg",
  },
  third: {
    info: "Все байки оборудованы держателем для телефона или камеры",
    svg: "/svg/wrench.svg",
  },
  fourth: {
    info: "Все байки оборудованы держателем для телефона или камеры",
    svg: "/svg/helmet.svg",
  },
}
</script>

<style lang="sass"></style>
