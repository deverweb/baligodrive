<template>
  <div
    ref="root"
    class="dp select-none relative"
    :class="{ 'z-[5]': isActivePicker }"
  >
    <CustomFieldBtn
      @click="isActivePicker = !isActivePicker"
      :style-type="props.styleType"
      :label="computedLabel"
      :active="isActivePicker"
    >
      <SvgCalendarIcon :fill="'#111111'"></SvgCalendarIcon>
    </CustomFieldBtn>
    <Transition :name="props.transition">
      <CustomDatePickerPanel
        v-show="isActivePicker"
        @daypick="onDatePick"
        @close="isActivePicker = !isActivePicker"
        :active="isActivePicker"
        class="dp-panel lg:h-[364px] sm:h-auto"
      ></CustomDatePickerPanel>
    </Transition>
    <Transition name="text-error">
      <div class="ci-error-container" v-show="errorMessage">
        <div class="ci-error">
          <span>{{ errorMessage }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
let root = ref(null);

const props = defineProps({
  name: String,
  styleType: String,

  transition: {
    default: "slide-right",
    type: String,
  },
});
let isActivePicker = ref(false);

let choosedDate = ref("");
let computedLabel = computed(() => {
  if (choosedDate.value == "") {
    return "От какого — До какого";
  } else {
    return choosedDate.value;
  }
});
const handleOutsideClicks = (e) => {
  if (e.target.closest(".phone-datepicker")) return;
  if (!root.value.isEqualNode(e.target.closest(".dp")))
    isActivePicker.value = false;
};
onMounted(() => {
  document.addEventListener("click", handleOutsideClicks);
});
onUnmounted(() => {
  document.removeEventListener("click", handleOutsideClicks);
});

const onDatePick = (payload) => {
  isActivePicker.value = false;
  choosedDate.value = payload.str;
  value.value = payload.date;
};

const isRequired = (value) => {
  if (!value) return "Необходимо выбрать";
  return true;
};

const { value, errorMessage } = useField(props.name, isRequired);

// const formatDate = (date) => {
//   const yyyy = date.getFullYear()
//   let mm = date.getMonth() + 1 // Months start at 0!
//   let dd = date.getDate()

//   if (dd < 10) dd = "0" + dd
//   if (mm < 10) mm = "0" + mm
//   return `${dd}.${mm}.${yyyy}`
// }
</script>

<style lang="sass">
.widget-date-enter-active, .widget-date-leave-active
	z-index: 5
	transition: .2s all ease-in-out
	+r(1200)
		max-height: 374px
		transition: 0.3s all
	+r(768)
		transition: 0.2s all
		max-height: initial
		z-index: 150
.widget-date-enter-from, .widget-date-leave-to
	opacity: 0
	transform: translateX(20px)
	+r(1200)
		max-height: 0px
	+r(768)
		max-height: initial
		transform: scale(0.5)
.widget-date-enter-active, .widget-date-leave-active
	z-index: 5
	transition: .2s all ease-in-out
	+r(1200)
		max-height: 374px
		transition: 0.3s all
	+r(768)
		transition: 0.2s all
		max-height: initial
		z-index: 150
.slide-right-enter-from, .slide-right-leave-to
	opacity: 0
	transform: translateX(-20px)
	+r(1200)
		transform: translateY(374px)
		max-height: 0px
	+r(768)
		max-height: initial
		transform: scale(0.5)

:root
	--green-600: $green
.datepicker
	&-head
		// &-close
		// 	position: relative
		// 	span
		// 		height: 21px
		// 		width: 2px
		// 		border-radius: 4px
		// 		background: $light
		// 		position: absolute
		// 		top: -10px
		// 		right: 10px
		// 		&:first-child
		// 			transform: rotate(45deg)
		// 		&:last-child
		// 			transform: rotate(-45deg)

.dp
	.vc-container
		+helvr
		--green-600: #{$green}
		+r(1200)
			width: 100%
		+r(600)
			width: 100%
			height: 100%
			border: none
	.vc-day-content
		width: 40px
		height: 40px
		transition: 0.2s ease all

	.vc-header
		margin-bottom: 20px
	.vc-weeks
		padding: 20px
	&.dp__widget-form
		.dp-panel
			right: calc(100% + 55px)
			top: 0
		.vc-pane
			min-width: auto
		.ci-error-container
			position: absolute
			bottom: 0
			z-index: 5
		.ci-error
			color: rgb(220,38, 38)
			font-size: 12px
	&.dp__index-form
		.dp-panel
			position: absolute
			left: calc(100% + 25px)
			top: 0
			+r(1200)
				width: 100%
				left: 0
				top: initial
				bottom: 0
		.ci-error
			color: #dc2626
			font-size: 14px
			padding-top: 4px
			padding-left: 6px
	// &.dp__order-form
	// &.dp__widget-form
</style>
