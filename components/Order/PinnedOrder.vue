<template>
  <div
    ref="orderSticky"
    class="order-sticky max-w-[40%] md:hidden md:max-w-full md:pt-[50px] absolute xl:max-w-[230px]"
  >
    <div class="order-sticky-container">
      <div
        class="order-view px-[40px] md:pb-[36px] md:items-center md:flex-col xl:pl-[22px] pb-[27px] xl:pb-[30px] flex md:rounded-t-[44px] rounded-t-[17px] bg-dark-300 md:pt-[68px] pt-[42px]"
      >
        <div class="order-view-text shrink-0 md:text-center">
          <div
            class="font-Euroblack uppercase md:mb-[80px] md:text-[30px] mb-[48px] xl:mb-[36px] tracking-[-0.6px]"
          >
            Ваш заказ:
          </div>
          <div class="order-view-list md:hidden">
            <div
              class="order-view-item mb-[38px] xl:mb-[32px] flex items-start"
            >
              <SvgBikeIcon :fill="'#30B21B'"></SvgBikeIcon>
              <div class="ml-[15px] order-view-item-container">
                <div
                  class="order-view-item-name font-Helvmed text-[16px] mb-[7px] xl:mb-[4px] leading-[1]"
                >
                  {{ props.bikeName }}
                </div>
                <div
                  class="order-view-item-price text-[14px] opacity-50 font-Helvmed"
                >
                  {{ props.dayPriceUSD }}$ / день ({{ props.fullPrice }}$ итого)
                </div>
              </div>
            </div>

            <div class="order-view-item flex items-start">
              <SvgCalendarIcon :fill="'#30B21B'"></SvgCalendarIcon>
              <div class="ml-[18px] order-view-item-container">
                <div
                  class="order-view-item-name font-Helvmed text-[16px] mb-[5px] leading-[20px]"
                >
                  с {{ props.dateStrStart }} <br />по
                  {{ props.dateStrEnd }}
                </div>
                <div
                  class="order-view-item-price text-[14px] opacity-50 font-Helvmed"
                >
                  {{ props.dayPriceUSD }}$ x {{ props.dateDif }} суток
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="order-view-images w-[45%] md:mb-[90px] md:max-h-[360px] md:flex xl:hidden md:ml-0 flex ml-auto flex-shrink-0"
        >
          <img
            class="flex-shrink-0 h-[230px] object-contain"
            :src="props.bikeImage"
            alt=""
          />
          <img
            v-if="false"
            class="flex-shrink-0"
            :src="props.bikeImage"
            alt=""
          />
        </div>
        <div
          class="order-view-list hidden md:self-start md:gap-x-[54px] md:pl-[8px] md:flex md:items-start"
        >
          <div
            class="order-view-item md:mb-0 mb-[38px] xl:mb-[32px] flex items-start"
          >
            <SvgBikeIcon :fill="'#30B21B'"></SvgBikeIcon>
            <div class="ml-[15px] order-view-item-container">
              <div
                class="order-view-item-name font-Helvmed text-[16px] mb-[7px] xl:mb-[4px] leading-[1]"
              >
                {{ props.bikeName }}
              </div>
              <div
                class="order-view-item-price text-[14px] opacity-50 font-Helvmed"
              >
                {{ props.dayPriceUSD }}$ / день ({{ props.fullPrice }}$ итого)
              </div>
            </div>
          </div>

          <div class="order-view-item flex items-start">
            <SvgCalendarIcon :fill="'#30B21B'"></SvgCalendarIcon>
            <div class="ml-[18px] order-view-item-container">
              <div
                class="order-view-item-name font-Helvmed text-[16px] mb-[5px] leading-[20px]"
              >
                с {{ props.dateStrStart }} <br />по
                {{ props.dateStrEnd }}
              </div>
              <div
                class="order-view-item-price text-[14px] opacity-50 font-Helvmed"
              >
                {{ props.dayPriceUSD }} x {{ props.dateDif }}$ суток
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="order-summary px-[40px] bg-green md:px-[50px] md:text-dark flex justify-between items-center font-Euroblack text-[18px] h-[92px] uppercase md:rounded-b-[44px] rounded-b-[12px]"
      >
        <div
          class="order-summary-container flex justify-between w-full xl:hidden md:flex"
        >
          <span class="tracking-[-0.6px]">ИТОГОВАЯ СТОИМОСТЬ АРЕНДЫ:</span>
          <span class="tracking-[-0.6px]">{{ props.fullPrice }}$</span>
        </div>
        <div
          class="order-summary-container w-full justify-between hidden xl:flex md:hidden"
        >
          <span class="tracking-[-0.6px]">ИТОГО:</span>
          <span class="tracking-[-0.6px]">{{ props.fullPrice }}$</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  bikeName: String || Number,
  bikeImage: String || Number,
  fullPrice: Number,
  dayPriceUSD: Number,
  dateStrStart: String || Number,
  dateStrEnd: String || Number,
  dateDif: Number,
});

const orderSticky = ref(null);

defineExpose({
  orderSticky,
});
</script>

<style lang="sass"></style>
