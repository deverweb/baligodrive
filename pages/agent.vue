<template>
  <div class="">
    <section class="agent-slider">
      <SectionSliderMain class="agent pt-[140px] text-white rounded-[70px] md:rounded-[44px]"></SectionSliderMain>
    </section>
    <section class="agent-form justify-between order flex py-[151px]">
      <div class="agent-form-left min-w-[360px]">
        <div class="relative z-[7] lg:pb-[71px] lg:pt-[94px] sm:pt-[50px] text-light">
          <div class="container flex lg:flex-col lg:items-center lg:text-center">
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
                    class="ci__index-form mb-[10px]"
                    :name="'hotel_name'"
                    :placeholder="'Hotel/villa name'"
                  >
                    <SvgPersonIcon opacity="1" fill="#111111"></SvgPersonIcon>
                  </SectionCustomTextField>
                  <SectionCustomTextField
                    type="string"
                    class="ci__index-form mb-[10px]"
                    :name="'agent_number'"
                    :placeholder="'Agent WhatsApp number'"
                  >
                    <SvgPhoneIcon></SvgPhoneIcon>
                  </SectionCustomTextField>

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
      <div class="agent-form-pinned w-full max-w-[640px]" v-if="indexFormStore.selectedOption && selectedDate">
        <SectionPinnedOrder
          class="static agent-pinned"
          :bike-name="indexFormStore.selectedOption.name"
          :bike-image="indexFormStore.selectedOption.img"
          :full-price="formStore.computedPrice"
          :day-price-u-s-d="computedDayPrice"
          :date-dif="formStore.dateDif"
          :date-str-end="formStore.computedDateStrEnd"
          :date-str-start="formStore.computedDateStrStart"
        >
        </SectionPinnedOrder>
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
