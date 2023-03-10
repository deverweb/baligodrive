<template>
  <div class="">
    <section class="agent-slider">
      <SectionSliderMain class="agent pt-[140px] text-white rounded-[70px] md:rounded-[44px]"></SectionSliderMain>
    </section>
    <section class="agent-form order py-[151px]">
      <div class="container flex justify-between md:flex-col">
        <div class="agent-form-left min-w-[360px]">
          <div class="relative z-[7] text-light">
            <div class="flex lg:flex-col lg:items-center lg:text-center">
              <div class="order-content sm:mb-[78px] lg:mb-[46px] lg:max-w-full">
                <h2
                  ref="formEl"
                  class="section-title xsm:text-[26px] order-title mb-[29px] sm:mb-[22px] lg:mb-[26px] lg:max-w-[70%] lg:mx-auto md:max-w-max"
                >
                  {{ $t("mainPageForm.title") }}
                </h2>
                <p
                  id="orderbike"
                  class="section-desc mb-[49px] sm:max-w-full lg:mb-[51px] sm:mb-[41px] max-w-[380px] lg:mx-auto"
                >
                  {{ $t("mainPageForm.subtitle") }}
                </p>
                <form @submit="onSubmit" class="form">
                  <div class="max-w-[360px] lg:mx-auto lg:text-left">
                    <SectionCustomDatePicker
                      v-model:selectedDate="selectedDate"
                      name="date"
                      styleType="index"
                      transition="slide-right"
                      class="mb-[10px] dp__index-form"
                    >
                    </SectionCustomDatePicker>
                    <SectionCustomSelectField
                      :styleType="'index'"
                      class="mb-[10px] cs__index-form"
                      transition="widget-date"
                      v-model:selectedOption="indexFormStore.selectedOption"
                      :name="'bike'"
                      :defaultLabel="'Bike Model'"
                      :options="commercialStore.bikeModelsArray"
                    >
                      <SvgBikeIcon></SvgBikeIcon>
                    </SectionCustomSelectField>
                    <SectionCustomTextField
                      type="string"
                      validation="name"
                      class="ci__index-form mb-[10px]"
                      :name="'hotel_name'"
                      :placeholder="'Hotel/villa name'"
                    >
                      <SvgPersonIcon opacity="1" fill="#111111"></SvgPersonIcon>
                    </SectionCustomTextField>
                    <SectionCustomPhoneField class="mb-[10px]" type="index" name="agent_number">
                      <SvgPhoneIcon></SvgPhoneIcon>
                    </SectionCustomPhoneField>

                    <TheButton class="w-[360px] btn-primary__dark black sm:w-full sm:max-w-full h-[70px] gap-[9px]">
                      <SvgCalendarIcon></SvgCalendarIcon>
                      <span class="relative top-[1px]">{{ $t("buttonBooking") }}</span>
                    </TheButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          class="agent-form-pinned md:hidden w-full max-w-[550px]"
          v-if="indexFormStore.selectedOption && selectedDate"
        >
          <SectionPinnedOrder
            class="static agent-pinned"
            :rup="true"
            :bike-name="indexFormStore.selectedOption.name"
            :bike-image="indexFormStore.selectedOption.img"
            :full-price="formStore.computedRupPrice"
            :day-price-u-s-d="computedDayPriceRup"
            :date-dif="formStore.dateDif"
            :date-str-end="formStore.computedDateStrEnd"
            :date-str-start="formStore.computedDateStrStart"
          >
          </SectionPinnedOrder>
        </div>
        <div
          v-if="formStore.bike && selectedDate"
          class="order-mobile-modal sm:pt-[40px] hidden md:block md:max-w-full md:pt-[50px]"
        >
          <div class="order-mobile-container hidden md:block">
            <div
              class="order-view sm:pb-[8px] sm:px-[25px] px-[40px] md:pb-[36px] md:items-center md:flex-col xl:pl-[42px] pb-[27px] xl:pb-[10px] flex md:rounded-t-[44px] rounded-t-[17px] bg-dark-300 sm:pt-[40px] md:pt-[68px] pt-[42px]"
            >
              <div class="order-view-text md:text-center">
                <div
                  class="font-Euroblack uppercase md:mb-[80px] md:text-[30px] sm:mb-[40px] sm:text-[24px] mb-[48px] xl:mb-[36px] tracking-[-0.6px]"
                >
                  {{ translate("Ваш заказ:", "Your order:") }}
                </div>
              </div>
              <div
                class="order-view-images md:justify-center md:mb-[90px] sm:mb-[52px] md:max-h-[360px] md:flex xl:hidden md:ml-0 flex ml-auto flex-shrink-0"
              >
                <img
                  class="flex-shrink-0 object-contain sm:w-[85%] sm:mr-[25px] sm:object-contain mr-[25px] md:mr-0"
                  :src="formStore.bike.img"
                  alt=""
                />
                <img
                  v-if="false"
                  class="flex-shrink-0 sm:w-[20%] sm:object-contain"
                  src="/img/order/modal-surf.png"
                  alt=""
                />
              </div>
              <div
                class="order-view-list md:justify-center md:w-full sm:flex-col sm:pl-0 hidden md:self-start md:gap-x-[54px] md:flex md:items-start"
              >
                <div
                  class="order-view-item sm:w-full sm:mb-[39px] md:mb-0 mb-[38px] xl:mb-[32px] flex items-start sm:items-center"
                >
                  <SvgBikeIcon :fill="'#30B21B'"></SvgBikeIcon>
                  <div class="ml-[18px] sm:w-full sm:flex sm:items-center sm:relative order-view-item-container">
                    <div class="order-view-item-name font-Helvmed text-[16px] mb-[7px] xl:mb-[4px] leading-[1]">
                      {{ formStore.bike.name }}
                    </div>
                    <div
                      v-if="!formStore.rate.isMonthly && !formStore.rate.isFixed"
                      class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed"
                    >
                      {{ formStore.rate.dayPriceUSD }} rup / {{ translate("день", "day") }} ({{
                        formStore.computedRupPrice
                      }}
                      rup {{ translate("итого", "total") }})
                    </div>
                    <div
                      v-if="formStore.rate.isMonthly && formStore.dateDif > 30"
                      class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed"
                    >
                      {{ (formStore.rate.dayPriceUSD / 30).toFixed(2) }} rup / {{ translate("день", "day") }} ({{
                        formStore.computedRupPrice
                      }}
                      rup {{ translate("итого", "total") }})
                    </div>
                    <div
                      v-if="(formStore.rate.isMonthly || formStore.rate.isFixed) && formStore.dateDif <= 30"
                      class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed"
                    >
                      {{ formStore.computedRupPrice }} rup {{ translate("итого", "total") }}
                    </div>
                    <div class="order-view-item-price sm:ml-auto hidden sm:text-[16px] sm:block">
                      {{ formStore.computedRupPrice }} rup
                    </div>
                    <!-- <div v-if="formStore.rate.isMonthly && formStore.dateDif > 30"  class="order-view-item-price sm:ml-auto hidden sm:text-[16px] sm:block">
                    {{ (formStore.rate.dayPriceUSD/30).toFixed(2) }}$
                  </div> -->
                    <div
                      class="order-view-item-price text-[14px] opacity-50 font-Helvmed hiddem: sm:block absolute right-0 sm:text-[12px] bottom-[-15px]"
                    >
                      <!-- {{ formStore.rate.dayPriceUSD }}rup / день -->
                    </div>
                  </div>
                </div>

                <div class="order-view-item sm:w-full sm:mb-[39px] flex items-start sm:items-center">
                  <SvgCalendarIcon :fill="'#30B21B'"></SvgCalendarIcon>
                  <div class="ml-[18px] sm:w-full sm:flex sm:items-center sm:relative order-view-item-container">
                    <div class="order-view-item-name font-Helvmed text-[16px] mb-[4px] leading-[1]">
                      {{ translate("с", "from") }} {{ formStore.computedDateStrStart }} {{ translate("по", "to") }}
                      {{ formStore.computedDateStrEnd }}
                    </div>

                    <div
                      v-if="!formStore.rate.isMonthly && !formStore.rate.isFixed"
                      class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed"
                    >
                      {{ formStore.rate.dayPriceUSD }} rup x {{ formStore.dateDif }} {{ translate("суток", "days") }}
                    </div>
                    <div
                      v-if="formStore.rate.isMonthly && formStore.dateDif > 30"
                      class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed"
                    >
                      {{ (formStore.rate.dayPriceUSD / 30).toFixed(2) }} rup x {{ formStore.dateDif }}
                      {{ translate("суток", "days") }}
                    </div>
                    <div
                      v-if="(formStore.rate.isMonthly || formStore.rate.isFixed) && formStore.dateDif <= 30"
                      class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed"
                    >
                      {{ formStore.dateDif }} {{ translate("суток", "days") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="order-summary sm:px-[25px] px-[40px] bg-green md:px-[50px] flex justify-between items-center font-Euroblack text-[16px] h-[92px] uppercase md:rounded-b-[44px] rounded-b-[12px]"
            >
              <div class="order-summary-container flex justify-between w-full xl:hidden md:flex sm:hidden">
                <span class="tracking-[-0.6px]">{{
                  translate("ИТОГОВАЯ СТОИМОСТЬ АРЕНДЫ:", "TOTAL RENTAL COST:")
                }}</span>
                <span class="tracking-[-0.6px]">{{ formStore.computedRupPrice }} rup</span>
              </div>
              <div class="order-summary-container w-full justify-between hidden xl:flex md:hidden sm:flex">
                <span class="tracking-[-0.6px]">{{ translate("ИТОГО:", "TOTAL:") }}:</span>
                <span class="tracking-[-0.6px]">{{ formStore.computedRupPrice }} rup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import { useCommercialStore } from "~~/store/commercial";
import { useIndexFormStore } from "~~/store/indexform";
import { useFormStore } from "~~/store/form";

const { handleSubmit } = useForm();
const router = useRouter();
const route = useRoute();
const indexFormStore = useIndexFormStore();
const commercialStore = useCommercialStore();
const formStore = useFormStore();
const selectedDate = ref(null);
const { locale } = useI18n();

const translate = (ruStr, engStr) => {
  return locale.value == "ru" ? ruStr : engStr;
};
locale.value = "en";

watch(
  () => indexFormStore.selectedOption,
  () => {
    formStore.fillBikeInfo(indexFormStore.selectedOption);
  }
);

watch(
  () => selectedDate.value,
  () => {
    formStore.fillDateInfo(selectedDate.value);
  }
);

const computedDayPrice = computed(() => {
  if (formStore.dateDif > 30 && (formStore.rate.isMonthly || formStore.rate.isFixed)) {
    return Number((formStore.rate.dayPriceUSD / 30).toFixed(2));
  } else {
    return formStore.rate.dayPriceUSD;
  }
});

const computedDayPriceRup = computed(() => {
  if (formStore.dateDif > 30 && (formStore.rate.isMonthly || formStore.rate.isFixed)) {
    return Number((formStore.rate.dayPriceRUP / 30).toFixed(2));
  } else {
    return formStore.rate.dayPriceRUP;
  }
});

const onSubmit = handleSubmit((values) => {
  formStore.fillAgentForm(values);
  router.push({ path: "/agentform" });
});
</script>

<style lang="sass">
.agent
	&-pinned
		max-width: initial
</style>
