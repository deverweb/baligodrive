<template>
  <div class="ci">
    <div class="ci-subtitle font-Helvmed text-[14px] mb-[9px] opacity-50" v-if="props.subTitle">{{ props.subTitle }}</div>
    <div class="ci-container">
      <div class="ci-icon-container">
        <slot></slot>
      </div>
      <input v-model="value" :placeholder="props.placeholder" class="ci-input" type="text" />
    </div>
    <Transition name="text-error">
      <div class="ci-error-container" v-if="errorMessage">
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
  name: {
    required: true,
    type: String,
  },
  placeholder: {
    required: true,
    type: String,
  },
  type: String,
  subTitle: String,
})

let isRequired = (value) => {
  if (props.type == "number") {
    if (!value) {
      return "Обязательное поле"
    }

    if (!/^\d+$/.test(value)) {
      return "Только цифры"
    }
    return true
  }
  if (props.type == "string") {
    if (!value) {
      return "Обязательное поле"
    }
    return true
  }
}

let nameRef = toRef(props, "name")

const { errorMessage, value } = useField(nameRef, isRequired)

const emit = defineEmits(["fieldValue"])
</script>

<style lang="sass">
.text-error-enter-active,
.text-error-leave-active
	transition: all 0.3s ease
	max-height: 32px


.text-error-enter-from,
.text-error-leave-to
	max-height: 0px
	opacity: 0
	transform: translateY(-25px)
.ci
	&.ci__index-form

		input
			&:focus::placeholder
				color: transparent
			&::placeholder
				color: $dark
		.ci-container
			color: $dark
			font-size: 16px
			height: 67px
			display: flex
			align-items: center
			justify-content: space-between
			position: relative
			padding-right: 21px
			padding-left: 50px
			border-radius: 12px
			background-color: $light
			z-index: 2
			+r(768)
				height: 60px
		.ci-input
			white-space: nowrap
			height: 100%
			background-color: $light
			overflow: hidden
			flex-grow: 1
			text-overflow: ellipsis
		.ci-icon-container
			position: absolute
			left: 18px
		.ci-error
			color: red
			font-size: 14px
			padding-top: 4px
			padding-left: 6px
		.ci-error-container
			height: 32px


	// &.ci__widget-form
	// 	.ci-container

	&.ci__payment-form
		input
			&:focus::placeholder
				color: transparent
			&::placeholder
				color: $light

		.ci-container
			color: $dark
			font-size: 16px
			height: 67px
			display: flex
			align-items: center
			justify-content: space-between
			position: relative
			padding-right: 21px
			padding-left: 59px
			border-radius: 12px
			background-color: transparent
			z-index: 2
			border: 1px solid rgba(#FBFBFD, 0.3)

		.ci-input
			white-space: nowrap
			height: 100%
			background-color: transparent
			overflow: hidden
			flex-grow: 1
			text-overflow: ellipsis
			color: $light
			font-size: 16px
		.ci-icon-container
			position: absolute
			left: 28px
		.ci-error
			color: red
			font-size: 14px
			padding-top: 4px
			padding-left: 6px
		.ci-error-container
			height: 32px
			position: absolute
	&.ci__contacts-form
		.ci-subtitle
			margin-bottom: 6px
			+r(600)
				margin-bottom: 9px
		.ci-error-container
			position: absolute
			+r(600)
				position: static
		.ci-container
			height: 70px
			+r(600)
				height: 60px
</style>
