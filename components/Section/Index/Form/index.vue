<template>
  <section
    class="order relative z-[7] rounded-b-[70px] sm:rounded-b-[44px] bg-dark-300 py-[151px] lg:pb-[71px] lg:pt-[94px] sm:pt-[50px] text-light"
  >
    <div class="container flex lg:flex-col lg:items-center lg:text-center">
      <div class="order-content sm:mb-[78px] max-w-[52%] lg:mb-[46px] lg:max-w-full">
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
            <CustomDatePicker name="date" styleType="index" transition="slide-right" class="mb-[10px] dp__index-form">
            </CustomDatePicker>
            <CustomSelectField
              :styleType="'index'"
              class="mb-[10px] cs__index-form"
              transition="widget-date"
              :active="formData.bikeField.active"
              v-model:selectedOption="indexFormStore.selectedOption"
              :name="formData.bikeField.name"
              :defaultLabel="bikePlaceholder"
              :options="commercialStore.bikeModelsArray"
            >
              <SvgBikeIcon></SvgBikeIcon>
            </CustomSelectField>
            <CustomTextField
              type="string"
              class="ci__index-form mb-[10px]"
              :name="'client_name'"
              :placeholder="namePlaceholder"
            >
              <SvgPersonIcon opacity="1" fill="#111111"></SvgPersonIcon>
            </CustomTextField>

            <CustomPhoneField class="mb-[10px]" type="index" name="client_phone">
              <SvgPhoneIcon></SvgPhoneIcon>
            </CustomPhoneField>
            <CustomSelectField
              v-if="false"
              :styleType="'index-form'"
              class="mb-[10px] cs__index-form"
              :active="formData.surfField.active"
              :name="formData.surfField.name"
              :defaultLabel="formData.surfField.defaultLabel"
              :options="commercialStore.surfBoards"
            >
              <SvgSurfIcon></SvgSurfIcon>
            </CustomSelectField>
            <TheButton
              type="submit"
              class="w-[360px] btn-primary__dark black sm:w-full sm:max-w-full h-[70px] gap-[9px]"
            >
              <SvgCalendarIcon></SvgCalendarIcon>
              <span class="relative top-[1px]">{{ $t("buttonBooking") }}</span>
            </TheButton>
          </div>
        </form>
      </div>

      <SectionIndexFormOrderBike
        class="absolute lg:max-w-[60%] 2xl:z-[0] 2xl:bottom-[5%] 2xl:left-[40%] 2xl:scale-[0.85] lg:scale-100 xsm:max-w-full left-[50%] lg:bottom-auto lg:relative lg:left-0"
      ></SectionIndexFormOrderBike>
    </div>
  </section>
</template>

<script setup>
import { useForm } from "vee-validate";
import { useStorage } from "@vueuse/core";
import { useCommercialStore } from "~~/store/commercial";
import { useFormStore } from "~~/store/form";
import { useIndexFormStore } from "~~/store/indexform";
let { locale } = useI18n();
const { handleSubmit } = useForm();
const router = useRouter();
const commercialStore = useCommercialStore();
const formStore = useFormStore();
const indexFormStore = useIndexFormStore();

let namePlaceholder = computed(() => {
  if (locale.value == "ru") return "Ваше Имя";
  if (locale.value == "en") return "Your Name";
});

let bikePlaceholder = computed(() => {
  if (locale.value == "ru") return "Модель байка";
  if (locale.value == "en") return "Bike model";
});

const formData = ref({
  phone: "",
  bikeField: {
    defaultLabel: "Модель байка",
    name: "bike",
  },
  surfField: {
    defaultLabel: "Модель сёрфа",
    name: "surfboard",
  },
  date: {
    name: "date",
    defaultLabel: "Выберите дату",
    active: false,
  },
});
// let formvalues = useStorage("formvalues");
const onSubmit = handleSubmit((values) => {
  formvalues.value = values;
  formStore.fillForm(values);
  commercialStore.smallFormOrder({
    order_date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString().slice(0, -3),
    client_name: values.client_name,
    client_messenger: " +" + values.client_phone.substring(1),
    order_date_start: values.date.start,
    order_date_end: values.date.end,
    bike_choice: values.bike.name,
  });
  router.push({ path: "/order" });
});
</script>

<style lang="sass"></style>
