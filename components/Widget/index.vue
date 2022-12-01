<template>
  <div
    class="wg z-[10]"
    :class="{ 'z-[30] active': isActiveWidget }"
    v-if="!isOrder"
  >
    <button class="wg-circle" @click="isActiveWidget = !isActiveWidget">
      <SvgCalendarIcon :fill="'white'"></SvgCalendarIcon>
    </button>
    <Transition name="widget">
      <form
        @submit="onSubmit"
        class="wg-table flex flex-col"
        v-show="isActiveWidget"
      >
        <div
          class="wg-head h-[72px] flex items-center justify-center grow-0 shrink-0 tracking-[-0.5px] rounded-t-[12px]"
        >
          <span>Забронировать байк</span>
          <button
            @click="isActiveWidget = !isActiveWidget"
            class="wg-head-close w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] hidden sm:flex rounded-full bg-white items-center justify-center"
          >
            <SvgCloseIcon class="hiddem sm:block" fill="#30B21B"></SvgCloseIcon>
          </button>
        </div>
        <div class="wg-list grow px-[30px] bg-light">
          <CustomDatePicker
            transition="widget-date"
            styleType="widget-form"
            :name="'date'"
            class="dp__widget-form"
            defaultLabel="Модель байка"
          >
          </CustomDatePicker>
          <CustomSelectField
            name="bike"
            :options="commercialStore.bikes"
            class="cs__widget-form"
            :styleType="'widget-form'"
            defaultLabel="Модель байка"
          >
            <SvgBikeIcon :fill="'black'"></SvgBikeIcon>
          </CustomSelectField>
          <CustomTextField
            type="string"
            class="ci__widget-form"
            :name="'client_name'"
            placeholder="Имя Фамилия"
          >
            <SvgPersonIcon opacity="1" fill="#111111"></SvgPersonIcon>
          </CustomTextField>
          <CustomTextField
            type="number"
            class="ci__widget-form"
            name="client_phone"
            placeholder="Телефон"
          >
            <SvgPhoneIcon></SvgPhoneIcon>
          </CustomTextField>
        </div>
        <div
          class="wg-bottom grow-0 h-[130px] shrink-0 py-[30px] bg-light rounded-b-[12px] flex items-center justify-center"
        >
          <TheButton class="w-[292px] btn-primary__light h-[70px] text-[16px]">
            <span>Оформление заказа</span>
          </TheButton>
        </div>
      </form>
    </Transition>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";

import { useCommercialStore } from "~~/store/commercial";
import { useFormStore } from "~~/store/form";

let commercialStore = useCommercialStore();
let formStore = useFormStore();
let router = useRouter();
let route = useRoute();
const { handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
  console.log(values);
  formStore.fillForm(values);
  // commercialStore.smallFormOrder(commercialStore.token.access_token);
  router.push({ path: "/order" });
});

let isActiveWidget = ref(false);
watch(
  () => isActiveWidget.value,
  () => {
    if (isActiveWidget.value) {
      document.body.classList.add("active-widget");
    } else {
      document.body.classList.remove("active-widget");
    }
  }
);
let isOrder = computed(() => {
  return route.path == "/order";
});
</script>

<style lang="sass">
.widget-enter-active,
.widget-leave-active
	transition: all 0.2s ease


.widget-enter-from,
.widget-leave-to
	opacity: 0
	transform: translateY(20px)
.wg
	position: fixed
	right: 100px
	bottom: 80px
	+r(1200)
		right: 70px
		bottom: 50px
	&-circle
		width: 60px
		height: 60px
		border-radius: 50%
		display: flex
		justify-content: center
		align-items: center
		background: $green
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25)
		transition: transform 0.2s ease
		&:active
			transform: scale(0.8)
	&-table
		position: absolute
		bottom: calc(100% + 35px)
		right: 50%
		width: 353px
		max-height: 507px
		+r(768)
			right: 0
			top: 0
			width: auto
			left: 0
			max-height: initial
			position: fixed
			height: 100%
	&-head
		height: 72px
		text-align: center
		color: $light
		display: flex
		align-items: center
		justify-content: center
		+eu
		text-transform: uppercase
		font-size: 16px
		background-color: $dark500
		+r(768)
			justify-content: space-between
			width: 100%
			padding: 0 20px
</style>
