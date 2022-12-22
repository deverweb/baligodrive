<template>
  <section
    class="catalog z-[1] relative md:pb-[50px] xsm:pb-[97px] sm:flex sm:flex-col pb-[9px] xsm:flex xsm:flex-col bg-dark-300 text-dark"
  >
    <div class="container">
      <div class="catalog-wrapper mb-[24px] xsm:mb-0 xsm:relative">
        <h2
          v-html="$t('mainPageSlider.title')"
          class="catalog-title section-title text-center mb-[30px] md:mb-[26px] xsm:mb-[31px]"
        ></h2>
        <p
          class="catalog-desc section-desc text-center xsm:max-w-[233px] xsm:mb-[3px] xsm:mx-auto"
        >
          {{ $t("mainPageSlider.subtitle") }}
        </p>
        <div
          class="catalog-drag xsm:flex hidden justify-end xsm:max-h-[35px] xsm:absolute xsm:right-0 xsm:bottom-[-38px]"
        >
          <SvgDragAnim class="max-h-full"></SvgDragAnim>
        </div>
      </div>
    </div>

    <div
      class="catalog-arrows w-[550px] sm:w-[90px] sm:self-center translate-x-[-50%] left-[50%] gap-[0px] sm:static sm:transform-none absolute top-[146px] md:top-[118px] justify-between xsm:mt-0 sm:order-[1] flex xsm:justify-center xsm:gap-[30px] xsm:px-0 sm:top-0 select-none z-[2]"
    >
      <div class="catalog-arrows-prev cursor-pointer">
        <svg
          width="31"
          height="16"
          viewBox="0 0 31 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.292891 7.29289C-0.097633 7.68341 -0.097633 8.31658 0.292891 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65685 0.92893L0.292891 7.29289ZM31 7L0.999998 7L0.999998 9L31 9L31 7Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="catalog-arrows-next cursor-pointer">
        <svg
          width="31"
          height="16"
          viewBox="0 0 31 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.7071 8.70711C31.0976 8.31659 31.0976 7.68342 30.7071 7.2929L24.3431 0.928936C23.9526 0.538412 23.3195 0.538412 22.9289 0.928936C22.5384 1.31946 22.5384 1.95263 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM-1.74846e-07 9L30 9.00001L30 7.00001L1.74846e-07 7L-1.74846e-07 9Z"
            fill="black"
          />
        </svg>
      </div>
    </div>

    <div
      class="catalog-bikes bikes lg:gap-[36px] lg:grid-cols-1"
      v-if="store.bikeModelsArray"
    >
      <Swiper
        class=""
        :modules="modules"
        :navigation="{
          nextEl: '.catalog-arrows-next',
          prevEl: '.catalog-arrows-prev',
        }"
        :loop="true"
        :centeredSlides="true"
        :slides-per-view="'auto'"
        :space-between="24"
        :breakpoints="{
          769: {},
          990: {},
          1600: {},
        }"
      >
        <SwiperSlide
          class="max-w-[440px] xsm:max-w-[340px] xsm:w-[100%]"
          v-for="(bike, i) in store.bikeModelsArray"
        >
          <SectionIndexBikesSlide
            :data-index="('slide= ', i)"
            :bikeName="bike.name"
            :imgSrc="bike.img"
            :id="bike.id"
            :rates="bike.rates"
            :discount="bike.discount"
          >
          </SectionIndexBikesSlide>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { useCommercialStore } from "~~/store/commercial";
import { storeToRefs } from "pinia";
const modules = [Navigation];

let store = useCommercialStore();
// console.log("slider: ", store.bikeModelsArray);
// let { bikes } = storeToRefs(store);
// bikes.value = Object.values(
//   store.bikes.reduce((unique, o) => {
//     if (!unique[o.name] || +o.date > +unique[o.name].date) unique[o.name] = o;

//     return unique;
//   }, {})
// );
// console.log("kek", bikes.value);
</script>

<style lang="sass">
.catalog
	.swiper-wrapper
		padding-top: 40px
		+r(990)
			padding-bottom: 40px
		+r(600)
			padding-top: 44px
			padding-bottom: 43px
	&::before
		content: ""
		width: 100%
		position: absolute
		left: 0
		right: 0
		height: calc(80% + 102px)
		top: -121px
		background-color: $light
		z-index: -1
		border-radius: 70px
		+r(1201)
			height: calc(100% - 100px)
		+r(991)
			top: -93px
			height: calc(100% + 93px)
		+r(600)
			top: -75px
			height: calc(100% + 50px)
</style>
