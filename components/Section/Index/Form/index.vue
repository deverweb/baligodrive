<template>
  <section
    class="order relative z-[7] rounded-b-[70px] sm:rounded-b-[44px] bg-dark-300 py-[151px] lg:pb-[71px] lg:pt-[94px] sm:pt-[50px] text-light"
  >
    <div class="container flex lg:flex-col lg:items-center lg:text-center">
      <div
        class="order-content sm:mb-[78px] max-w-[52%] lg:mb-[46px] lg:max-w-full"
      >
        <h2
          ref="formEl"
          class="section-title xsm:text-[26px] order-title mb-[29px] sm:mb-[22px] lg:mb-[26px] lg:max-w-[70%] lg:mx-auto md:max-w-max"
        >
          Забронируйте байк И СЁРФ
        </h2>
        <p
          class="section-desc mb-[49px] sm:max-w-full lg:mb-[51px] sm:mb-[41px] max-w-[380px] lg:mx-auto"
        >
          Мы доставим ваш байк прямо к вилле или вы можете забрать его сами в
          нашем офисе
        </p>
        <form @submit="onSubmit" class="form">
          <div class="max-w-[360px] lg:mx-auto lg:text-left">
            <CustomDatePicker
              name="date"
              styleType="index-form"
              class="mb-[10px] dp__index-form"
            >
            </CustomDatePicker>
            <CustomSelectField
              :styleType="'index-form'"
              class="mb-[10px] cs__index-form"
              :active="formData.bikeField.active"
              :name="formData.bikeField.name"
              :defaultLabel="formData.bikeField.defaultLabel"
              :options="bikes"
            >
              <SvgBikeIcon></SvgBikeIcon>
            </CustomSelectField>
            <CustomTextField
              type="number"
              @fieldValue="handleTextField"
              class="ci__index-form mb-[10px]"
              placeholder="Телефон"
              name="client_phone"
              v-model="formData.phone"
            >
              <SvgPhoneIcon></SvgPhoneIcon>
            </CustomTextField>
            <CustomTextField
              type="string"
              class="ci__index-form mb-[10px]"
              :name="'client_name'"
              placeholder="Имя Фамилия"
            >
              <SvgPersonIcon opacity="1" fill="#111111"></SvgPersonIcon>
            </CustomTextField>
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
              <span class="relative top-[1px]">Забронировать</span>
            </TheButton>
          </div>
        </form>
      </div>
      <SectionIndexFormOrderBike
        class="absolute lg:max-w-[80%] 2xl:z-[0] 2xl:bottom-[5%] 2xl:left-[40%] 2xl:scale-[0.85] lg:scale-100 sm:max-w-full left-[50%] lg:bottom-auto lg:relative lg:left-0"
      ></SectionIndexFormOrderBike>
    </div>
  </section>
</template>

<script setup>
import { useForm } from "vee-validate";
import { useCommercialStore } from "~~/store/commercial";
import { useFormStore } from "~~/store/form";

const { handleSubmit } = useForm();
const router = useRouter();
const bikes = ref([]);
const commercialStore = useCommercialStore();
const formStore = useFormStore();

bikes.value = Object.values(
  commercialStore.bikes.reduce((unique, o) => {
    if (!unique[o.name] || +o.date > +unique[o.name].date) unique[o.name] = o;

    return unique;
  }, {})
);

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

const onSubmit = handleSubmit((values) => {
  formStore.fillForm(values);
  commercialStore.smallFormOrder(commercialStore.token.access_token, values);
  router.push({ path: "/order" });
});

const handleTextField = (value) => {
  formData.value.phone = value;
};
</script>

<style lang="sass"></style>
