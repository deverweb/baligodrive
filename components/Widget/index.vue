<template>
  <div
    ref="$widget"
    class="wg z-[10]"
    :class="{ 'z-[40] active': isActiveWidget }"
    v-if="!isOrder"
  >
    <button class="wg-circle" @click="isActiveWidget = !isActiveWidget">
      <SvgCalendarIcon
        class="w-[18px] h-[18px]"
        :fill="'white'"
      ></SvgCalendarIcon>
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
            :options="bikes"
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
            placeholder="Ваше Имя"
          >
            <SvgPersonIcon opacity="1" fill="#111111"></SvgPersonIcon>
          </CustomTextField>
          <!-- <CustomTextField
            type="number"
            class="ci__widget-form"
            name="client_phone"
            placeholder="Телефон"
          >
            <SvgPhoneIcon></SvgPhoneIcon>
          </CustomTextField> -->
          <CustomPhoneField type="widget" name="client_phone">
            <SvgPhoneIcon></SvgPhoneIcon>
          </CustomPhoneField>
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCommercialStore } from "~~/store/commercial";
import { useFormStore } from "~~/store/form";
gsap.registerPlugin(ScrollTrigger);

let commercialStore = useCommercialStore();
let formStore = useFormStore();
let router = useRouter();
let route = useRoute();

let $widget = ref(null);

const { handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
  // console.log(values);
  formStore.fillForm(values);
  commercialStore.smallFormOrder(commercialStore.token.access_token, values);
  router.push({ path: "/order" });
});

onMounted(() => {
  window.addEventListener("scroll", handleWidgetActive);

  function getDurationHeight() {
    let pageHeight = document.querySelector(".layout").offsetHeight;
    let footerHeight = document.querySelector("footer").offsetHeight;
    // console.log("pageHeight: ", pageHeight);
    // console.log("footerHeight: ", footerHeight);
    return pageHeight - footerHeight;
  }
  // console.log($widget.value);
  // gsap.to(".wg", {
  //   scrollTrigger: {
  //     trigger: ".offer-title",
  //     start: "top top",
  //     end: "top 100px",
  //     markers: true,
  //     pin: true,
  //   },
  //   // duration: 2,
  //   // y: -200,
  // });
  // ScrollTrigger.create({
  // trigger: ".offer",
  // start: "top top",
  // endTrigger: "header",
  // end: () => `+=${getDurationHeight()}`,
  // pin: $widget.value,
  // });
});

onBeforeUnmount(() => {
  // ScrollTrigger.getById("index").kill();
});

let bikes = Object.values(
  commercialStore.bikes.reduce((unique, o) => {
    if (!unique[o.name] || +o.date > +unique[o.name].date) unique[o.name] = o;

    return unique;
  }, {})
);
router.afterEach(() => {
  isActiveWidget.value = false;
});

let isActiveWidget = ref(false);

let handleWidgetActive = (evt) => {
  isActiveWidget.value = false;
  window.removeEventListener("scroll", handleWidgetActive);
};

onUnmounted(() => {
  window.removeEventListener("scroll", handleWidgetActive);
});

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
	// position: sticky
	// right: 100px
	// bottom: 140px
	// top: 0
	// right: 100px
	// margin-left: auto
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
		box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.07)
		+r(768)
			right: 0
			top: 0
			width: auto
			left: 0
			max-height: initial
			position: fixed
			box-shadow: none
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
