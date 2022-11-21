<template>
  <div ref="root" class="cs" :class="{ 'z-[4]': isSelectActive }">
    <div class="cs-subtitle font-Helvmed text-[14px] mb-[9px] opacity-50" v-if="props.subTitle">{{ props.subTitle }}</div>
    <CustomFieldBtn :styleType="props.styleType" :class="{ shadow: isSelectActive }" :active="isSelectActive" class="cs-current z-[3]" @click="isSelectActive = !isSelectActive" :label="computedLabel"><slot></slot></CustomFieldBtn>

    <Field class="hidden" v-model="localSelectedOption" :rules="isRequired" :name="props.name" as="select"></Field>
    <Transition name="select-down">
      <div v-show="isSelectActive" class="cs-list-container z-[2]">
        <ul class="cs-list">
          <li @click.stop="selectOption(option)" v-for="(option, i) in props.options" class="cs-list-item">
            <span v-if="option.name">{{ option.name }}</span>
            <span v-else="option.name">{{ option }}</span>
          </li>
        </ul>
      </div>
    </Transition>
    <Transition name="text-error">
      <div class="cs-error-container z-[1] h-[25px]" v-show="error">
        <div class="cs-error">
          <ErrorMessage :name="props.name" class="text-red-600 text-[14px] pt-[4px] pl-[2px]"></ErrorMessage>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { Field, ErrorMessage, useIsFieldValid, useFieldError } from "vee-validate"

let error = useFieldError(props.name)

const props = defineProps({
  options: {
    type: Object || Array,
    required: false,
    default: {},
  },
  subTitle: String,
  styleType: String,
  defaultLabel: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
let localSelectedOption = ref(null)
let isSelectActive = ref(false)
let isFieldValid = useIsFieldValid(props.name)
let touched = ref(false)
let root = ref(null)

const handleOutsideClicks = (e) => {
  if (!root.value.isEqualNode(e.target.closest(".cs"))) isSelectActive.value = false
}
onMounted(() => {
  document.addEventListener("click", handleOutsideClicks)
})
onUnmounted(() => {
  document.removeEventListener("click", handleOutsideClicks)
})

let computedLabel = computed(() => {
  if (localSelectedOption.value) {
    if (localSelectedOption.value.name) {
      return localSelectedOption.value.name
    } else return localSelectedOption.value
  } else {
    return props.defaultLabel
  }
})

let emit = defineEmits(["toggleActive"])

const selectOption = (option) => {
  isSelectActive.value = false
  localSelectedOption.value = option
}

let isRequired = (value) => {
  if (!value) return "Необходимо выбрать"
  return true
}
</script>

<style lang="sass">

.select-down-enter-active,
.select-down-leave-active
	transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1)


.select-down-enter-from,
.select-down-leave-to
	opacity: 0
	transform: translateY(-20px)
.cs
	&.cs__order-form
		position: relative
		color: $light
		font-size: 16px
		scrollbar-color: #6969dd #e0e0e0
		scrollbar-width: thing
		.cs-error-container
			position: absolute
		.cs-list-container
			left: 0
			top: 40px
			position: absolute
			border-radius: 12px
			background-color: #353535
			width: 100%
			padding-bottom: 20px
			padding-top: 70px
			padding-right: 28px
		.cs-list
			max-height: 310px
			overflow: auto
			&::-webkit-scrollbar
				width: 4px
			&::-webkit-scrollbar-thumb
				background: #dcdcdc
				border-radius: 3px
			&::-webkit-scrollbar-track
				background: #676767
				border-left: 1px solid transparent
				border-right: 1px solid transparent
				background-clip: padding-box
			li
				padding: 0px 21px 0px 51px
				height: 61px
				cursor: pointer
				display: flex
				align-items: center
				font-size: 16px
				background-color: #353535
				+r(768)
					padding: 14px 21px 14px 51px
				&:hover
					background-color: #3E3E3E
		.cs-current
			position: relative
			&.shadow
				&::before
					opacity: 1
			&::before
				position: absolute
				content: ""
				top: 0
				left: 0
				right: 0
				height: 100%
				width: 100%
				opacity: 0
				transition: opacity 0.2s ease-in-out 0.1s
				box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.12)
	&.cs__index-form
		position: relative
		color: $dark
		font-size: 16px
		.cs-error-container
			position: static
		.cs-list-container
			left: 0
			top: 40px
			position: absolute
			border-radius: 12px
			background-color: $light
			width: 100%
		.cs-list
			padding-top: 40px
			padding-bottom: 10px
			li
				padding: 20px 21px 20px 51px
				cursor: pointer
				background-color: $light
				+r(768)
					padding: 14px 21px 14px 51px
				&:hover
					background-color: darken($light, 10)
		.cs-current
			position: relative
			z-index: 3
			&.shadow
				&::before
					opacity: 1
			&::before
				position: absolute
				content: ""
				top: 0
				left: 0
				right: 0
				height: 100%
				width: 100%
				opacity: 0
				transition: opacity 0.2s ease-in-out 0.1s
				box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.12)
</style>
