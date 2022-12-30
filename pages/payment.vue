<template>
  <div
    class="pt-[220px] md:pt-[100px] sm:pt-[70px] pb-[80px] px-[80px] sm:px-[25px] xl:px-[50px] payment bg-[#202020] rounded-t-[74px] md:rounded-t-[44px]"
  >
    <div class="payment-body relative">
      <div class="payment-left w-[54%] md:w-full xl:w-[65%] lg:w-[70%]">
        <div
          class="payment-title mb-[50px] pb-[50px] sm:mb-[40px] sm:text-center lil:text-[24px] xsm:text-[28px] sm:pb-[30px] sm:text-[36px] text-[48px] font-Euroblack"
        >
          ОПЛАТА ЗАКАЗА
        </div>
        <div class="payment-form">
          <SectionOrderStep
            class="mb-[38px]"
            number="6"
            text="Выберите метод оплаты"
          ></SectionOrderStep>
          <div class="payment-checkboxbody">
            <SectionOrderNormalRadioField
              field-value="consult"
              name="payment"
              :checked="true"
              class="mb-[30px] ml-[30px] sm:ml-0"
              v-model:isChecked="paymentType"
            >
              <span class="sm:leading-[1] text-[18px] sm:text-[15px]"
                >Оплата после консультации менеджера
              </span>
            </SectionOrderNormalRadioField>
            <SectionOrderNormalRadioField
              field-value="russiacard"
              name="payment"
              :checked="false"
              class="mb-[30px] ml-[30px] sm:ml-0"
              v-model:isChecked="paymentType"
            >
              <span class="sm:leading-[1] text-[18px] sm:text-[15px]"
                >Оплата картой на сайте (Россия)
              </span>
            </SectionOrderNormalRadioField>
            <SectionOrderNormalRadioField
              field-value="worldcard"
              name="payment"
              :checked="false"
              class="mb-[30px] ml-[30px] sm:ml-0"
              v-model:isChecked="paymentType"
            >
              <span class="sm:leading-[1] text-[18px] sm:text-[15px]"
                >Оплата картой на сайте (для всего мира)</span
              >
            </SectionOrderNormalRadioField>
            <SectionOrderNormalRadioField
              field-value="binance"
              name="payment"
              :checked="false"
              class="ml-[30px] sm:ml-0"
              v-model:isChecked="paymentType"
            >
              <span class="sm:leading-[1] text-[18px] sm:text-[15px]"
                >Оплата криптовалютой через Binance Pay</span
              >
            </SectionOrderNormalRadioField>
          </div>
          <TheButton
            @click="onSubmit"
            class="w-[300px] xsm:h-[67px] xsm:max-w-[300px] xsm:w-full gap-[15px] sm:mt-[50px] mt-[70px] h-[70px] btn-primary__dark"
          >
            <SvgMoneyIcon class="sm:hidden" fill="#ffffff"></SvgMoneyIcon>
            <span class="sm:text-[16px]">Оплатить заказ</span>
          </TheButton>
        </div>
      </div>
      <div class="payment-sticky absolute w-full right-0 top-0">
        <OrderPinnedOrder
          class="top-0 right-0"
          ref="orderSticky"
          :bike-name="formStore.bike.name"
          :bike-image="formStore.bikeImage"
          :full-price="formStore.computedPrice"
          :day-price-u-s-d="formStore.rate.dayPriceUSD"
          :date-dif="formStore.dateDif"
          :date-str-end="formStore.computedDateStrEnd"
          :date-str-start="formStore.computedDateStrStart"
        >
        </OrderPinnedOrder>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "~~/store/form";

const formStore = useFormStore();
let paymentType = ref("consult");

formStore.fillForm({
  date: {
    start: "2022-12-30T04:34:23.560Z",
    end: "2022-12-31T04:34:23.560Z",
  },
  bike: {
    model: "HONDA VARIO 160 CC",
    bikes: [
      {
        id: "9221",
        hourPriceUsd: "15",
        img: "https://rentsyst.com/static/cache/vehicle/22441/vehicle_list_33445.jpg",
        brand: "HONDA",
        mark: "VARIO 160 CC",
        name: "HONDA VARIO 160 CC",
        drawing: "Red Bull",
      },
    ],
    discount: 20,
    rates: [
      {
        minDays: 1,
        maxDays: 4,
        dayPriceUSD: 15,
        dayPriceRUP: 210000,
      },
      {
        minDays: 5,
        maxDays: 7,
        dayPriceUSD: 14,
        dayPriceRUP: 210000,
      },
      {
        minDays: 8,
        maxDays: 14,
        dayPriceUSD: 11,
        dayPriceRUP: 170000,
      },
      {
        minDays: 15,
        maxDays: 21,
        dayPriceUSD: 9,
        dayPriceRUP: 130000,
      },
      {
        minDays: 22,
        maxDays: 90,
        dayPriceUSD: 7,
        dayPriceRUP: 100000,
      },
    ],
    id: "9221",
    hourPriceUsd: "15",
    img: "https://rentsyst.com/static/cache/vehicle/22441/vehicle_list_33445.jpg",
    brand: "HONDA",
    mark: "VARIO 160 CC",
    name: "HONDA VARIO 160 CC",
    drawing: "Red Bull",
  },
  client_name: "23333333",
  client_phone: "+62 22 2222222",
});
formStore.bikeImage =
  "https://rentsyst.com/static/cache/vehicle/22441/vehicle_list_33445.jpg";

const onSubmit = () => {
  console.log(paymentType.value);
};
</script>

<style lang="sass">
.payment-title
	border-bottom: 1px solid rgba(#FBFBFD, 0.1)
</style>
