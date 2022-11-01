<template>
  <div
    class="quiz-cart md:px-[49px] md:w-full md:bg-[#313131] lg:pt-[52px] pt-[69px] pr-[40px] pl-[30px] flex flex-col items-center rounded-tr-[12px] rounded-br-[12px] md:bg-transparent bg-dark-800 w-[378px] lg:px-[10px] lg:w-[275px] shrink-0"
  >
    <div
      class="quiz-cart-title w-full relative text-center lg:text-left quiz-inner-title pb-[47px]"
    >
      <h2 class="font-Euroblack text-[24px] uppercase tracking-[-0.8px]">
        Ваш заказ
      </h2>
    </div>
    <div class="quiz-cart-inner w-full flex lg:flex-col">
      <div
        class="quiz-cart-top lg:border-[#404040] lg:border-solid lg:border-b-[2px] flex flex-col lg:flex-row"
      >
        <QuizCartItem
          class="pl-[10px] lg:pl-[15px]"
          :obj="cart.bike"
        ></QuizCartItem>
        <QuizCartItem
          class="pl-[10px] lg:pl-[15px]"
          :obj="cart.surf"
        ></QuizCartItem>
      </div>
      <div class="quiz-cart-bottom flex flex-col lg:flex-row">
        <div
          class="quiz-cart-date border-[#404040] border-solid border-b-[2px] text-light pt-[43px] pb-[45px] text-center flex flex-col"
        >
          <div class="quiz-cart-date-top text-[16px] mb-[2px]">
            {{ formatedDate }}
          </div>
          <div class="quiz-cart-date-calc text-[14px] opacity-50 font-Helvmed">
            ({{ cart.bike.hourPriceUsd }}$ + {{ cart.surf.hourPriceUsd }}$) x
            {{ calculatedDate }}
            дней
          </div>
        </div>
        <div
          class="quiz-cart-price border-[#404040] border-solid border-b-[2px] text-light py-[49px] text-center flex flex-col"
        >
          <div
            class="quiz-cart-date-top text-[16px] font-Euroblack text-light uppercase"
          >
            к оплате: {{ calculatedPrice }}$
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~~/store/cart";

let cartStore = useCartStore();

let { cart } = cartStore;
let cloneDate = new Date();
let newDate = ref(new Date(cloneDate.setDate(cloneDate.getDate() + 4)));

let formatedDate = computed(() => {
  return `с ${formatDate(cart.date.start)} — по ${formatDate(
    new Date(newDate.value)
  )}`;
});

let calculatedDate = computed(() => {
  return Math.ceil((newDate.value - cart.date.start) / (1000 * 60 * 60 * 24));
});

let calculatedPrice = computed(() => {
  console.log();
  return (
    calculatedDate.value * (cart.bike.hourPriceUsd + cart.surf.hourPriceUsd)
  );
});

const formatDate = (date) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return `${dd}.${mm}.${yyyy}`;
};

// console.log(cart);
</script>

<style lang="sass"></style>
