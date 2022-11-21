<template>
  <div class="dp select-none relative" :class="{ 'z-[5]': isActivePicker }">
    <CustomFieldBtn @click="isActivePicker = !isActivePicker" :style-type="'index-form'" :label="computedLabel" :active="isActivePicker">
      <SvgCalendarIcon :fill="'#111111'"></SvgCalendarIcon>
    </CustomFieldBtn>
    <Transition name="slide-right">
      <CustomDatePickerPanel @daypick="onDatePick" :active="isActivePicker" v-show="isActivePicker" class="dp-panel"></CustomDatePickerPanel>
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
import { useField } from "vee-validate"

const props = defineProps({
  name: String,
})
let isActivePicker = ref(true)

let choosedDate = ref("")
let computedLabel = computed(() => {
  if (choosedDate.value == "") {
    return "От какого — До какого"
  } else {
    return choosedDate.value
  }
})

const onDatePick = (payload) => {
  isActivePicker.value = false
  choosedDate.value = payload.str
}

const isRequired = (value) => {
  if (!value) return "Необходимо выбрать"
  return true
}

const { value, errorMessage } = useField(props.name, isRequired)

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
.slide-right-enter-active, .slide-right-leave-active
	z-index: 5
	transition: 0.2s all ease-in-out
.slide-right-enter-from, .slide-right-leave-to
	opacity: 0
	transform: translateX(-20px)

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
.datepicker-panel
	+r(600)
		position: fixed
		top: 0
		left: 0
		right: 0
		bottom: 0

.dp
	&-panel
		position: absolute
		left: calc(100% + 25px)
		bottom: -40px
	.vc-container
		+helvr
		--green-600: #{$green}
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
	&.dp__index-form
		.ci-error
			color: #dc2626
			font-size: 14px
			padding-top: 4px
			padding-left: 6px
	&.dp__order-form
	&.dp__widget-form
</style>
