<template>
  <Transition name="bmodal">
    <div
      @click="handleOutsideClick"
      :class="{ 'z-[1000]': globalStore.activeInvestModal }"
      class="imodal"
      v-show="globalStore.activeInvestModal"
    >
      <div
        class="imodal-window w-[560px] xsm:h-full xsm:w-full items-center relative flex justify-between flex-col"
      >
        <button
          @click="globalStore.activeInvestModal = false"
          class="absolute xsm:hidden right-[20px] top-[20px]"
        >
          <SvgCloseIcon></SvgCloseIcon>
        </button>
        <div
          class="imodal-top xsm:px-[25px] xsm:h-[100px] xsm:rounded-none tracking-[-0.6px] w-full rounded-t-[20px] h-[107px] flex items-center text-center justify-center bg-[#282828] font-Euroblack text-[20px] uppercase"
        >
          <span class="xsm:hidden">Подробнее об инвестициях</span>
          <div
            class="imodal-top-mobile w-full justify-between hidden xsm:flex items-center"
          >
            <span class="text-[16px] tracking-[-0.5px]"
              >Инвестиция в байки</span
            >
            <button
              @click="globalStore.activeInvestModal = false"
              class="rounded-full flex items-center justify-center lil:w-[30px] lil:h-[30px] w-[50px] h-[50px] bg-white"
            >
              <SvgCloseIcon
                fill="#30B21B"
                class="lil:w-[10px] lil:h-[10px]"
              ></SvgCloseIcon>
            </button>
          </div>
        </div>
        <form
          @submit="onSubmit"
          class="imodal-form xsm:px-[25px] xsm:flex-grow flex flex-col w-full items-center xsm:rounded-none rounded-b-[20px] bg-white"
        >
          <div
            :class="{ 'opacity-50 pointer-events-none': formLoading }"
            class="imodal-body xsm:flex xsm:flex-col xsm:items-center w-[292px] xsm:w-full pb-[60px]"
          >
            <CustomTextField
              class="ci__invest-form w-full mb-[7px]"
              type="string"
              :placeholder="yourName"
              :name="'client_name'"
            >
              <SvgPersonIcon fill="#000000" opacity="1"></SvgPersonIcon>
            </CustomTextField>
            <CustomPhoneField
              class="mb-[10px]"
              type="invest"
              :name="'client_phone'"
            >
              <SvgPhoneIcon></SvgPhoneIcon>
            </CustomPhoneField>
            <CustomSelectField
              name="invest_size"
              class="cs__invest-form"
              styleType="invest"
              :default-label="'Сумма инвестиций'"
              :options="[
                'до 20000$',
                '20000$ - 50000$',
                '50000$ - 100000$',
                '100000$ - 200000$',
                'от 200000$',
              ]"
            >
              <SvgMoneyIcon fill="#000000"></SvgMoneyIcon>
            </CustomSelectField>
            <TheButton
              :loading="formLoading"
              class="btn-primary__light mt-[50px] xsm:max-w-[320px] self-center xsm:w-full w-[292px] h-[70px]"
            >
              <span class="text-[16px] font-Helvmed"
                >Получить консультацию</span
              >
            </TheButton>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useGlobalStore } from "~~/store/global";
import { useCommercialStore } from "~~/store/commercial";

import { useForm } from "vee-validate";
const { handleSubmit } = useForm();
let formLoading = ref(false);
const onSubmit = handleSubmit(async (values, { resetForm }) => {
  formLoading.value = true;
  commercialStore.investFormOrder({
    date:
      new Date().toLocaleDateString() +
      " " +
      new Date().toLocaleTimeString().slice(0, -3),
    client_name: values.client_name,
    client_phone: " +" + values.client_phone.substring(1),
    invest_size: values.invest_size,
  });
  // commercialStore.smallFormOrder(commercialStore.token.access_token, values);
  // router.push({ path: "/order" });
  resetForm();

  await new Promise((resolve, reject) =>
    setTimeout(() => {
      formLoading.value = false;
      globalStore.activeInvestModal = false;
      resolve();
    }, 1500)
  );
});

let { locale } = useI18n();
let globalStore = useGlobalStore();
let commercialStore = useCommercialStore();
watch(
  () => {
    return globalStore.activeInvestModal;
  },
  () => {
    if (globalStore.activeInvestModal) {
      document.body.classList.add("active-popup");
    } else {
      document.body.classList.remove("active-popup");
    }
  }
);

let yourName = computed(() => {
  if (locale.value == "ru") return "Ваше имя";
  if (locale.value == "en") return "Your name";
});

// globalStore.activeInvestModal = true;
</script>

<style lang="sass">
.imodal
	position: fixed
	display: grid
	place-items: center
	top: 0
	left: 0
	right: 0
	bottom: 0
	min-height: 100vh
	overflow-x: hidden
	overflow-y: auto
	background: rgba(black, 0.7)
	// padding: 127px
	&-form
		padding-top: 27px
	&-window
		filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.1))
</style>
