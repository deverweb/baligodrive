<template>
  <div class="datepicker-panel xsm:px-[25px] absolute xsm:flex xsm:flex-col xsm:bg-[#181818]" :class="{ 'z-[50]': props.active }">
    <!-- <div class="datepicker-head shrink-0 justify-between hidden xsm:flex h-[66px] items-baseline w-full border-[#333333] border-b-[1px] border-solid">
      <Logo class="text-[20px]"></Logo>
      <div class="datepicker-head-close">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="datepicker-body hidden xsm:flex xsm:flex-col text-center">
      <div class="datepicker-body-title font-Euroblack text-[32px]">ВЫБЕРИТЕ ДАТЫ БРОНИ</div>
      <div class="datepicker-body-text">Выберите дату взятия в аренду и дату возврата, чтобы забронировать байк</div>
    </div> -->
    <client-only>
      <DatePicker :min-date="new Date()" is-range v-model="range" color="green" @update:modelValue="listen"></DatePicker>
    </client-only>
  </div>
</template>

<script setup>
import { DatePicker } from "v-calendar"

const props = defineProps({
  active: {
    type: Boolean,
    required: true,
  },
})

let range = ref({
  start: new Date(),
  end: null,
})
let emit = defineEmits(["daypick"])
const listen = (date) => {
  let str = ""
  str = `с ${formatDate(range.value.start)} — до ${formatDate(range.value.end)}`
  emit("daypick", { str, date })
}

const formatDate = (date) => {
  const yyyy = date.getFullYear()
  let mm = date.getMonth() + 1 // Months start at 0!
  let dd = date.getDate()

  if (dd < 10) dd = "0" + dd
  if (mm < 10) mm = "0" + mm
  return `${dd}.${mm}.${yyyy}`
}
</script>

<style lang="sass">
@mixin r($screenWidth)
	@media only screen and (max-width: $screenWidth + 'px')
		@content


@mixin rmin($screenWidth)
	@media only screen and (min-width: $screenWidth + 'px')
		@content

:root
	--green-600: $green
.datepicker
	&-head
		&-close
			position: relative
			span
				height: 21px
				width: 2px
				border-radius: 4px
				background: $light
				position: absolute
				top: -10px
				right: 10px
				&:first-child
					transform: rotate(45deg)
				&:last-child
					transform: rotate(-45deg)
.datepicker-panel
	+r(600)
		position: fixed
		top: 0
		left: 0
		right: 0
		bottom: 0

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
</style>
