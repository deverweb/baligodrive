<template>
  <div class="ci relative" ref="rootInput">
    <div
      class="ci-subtitle font-Helvmed text-[14px] mb-[9px] opacity-50"
      v-if="props.subTitle"
    >
      {{ props.subTitle }}
    </div>
    <div class="ci-container">
      <div class="ci-icon-container">
        <slot></slot>
      </div>
      <input
        v-model="value"
        :placeholder="props.placeholder"
        class="ci-input"
        @input="handleChange"
        :class="{ autocomplete: props.autocomplete }"
        type="text"
      />
    </div>
    <Transition name="slide-down">
      <ul
        class="ci-suggests absolute pl-[30px] top-0 left-0 right-0"
        v-if="false"
        v-show="activeList"
      >
        <li class="h-[50px] flex items-center">Test</li>
        <li class="h-[50px] flex items-center">Test</li>
        <li class="h-[50px] flex items-center">Test</li>
        <li class="h-[50px] flex items-center">Test</li>
      </ul>
    </Transition>
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
import { useField } from "vee-validate";
let { locale } = useI18n();

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
  disabled: Boolean,
  autocomplete: Boolean,
});
let rootInput = ref(null);
let isRequired = (value) => {
  if (props.disabled) return true;
  if (props.type == "number") {
    if (!value) {
      if (locale.value == "ru") return "Обязательное поле";
      if (locale.value == "en") return "Required";
    }

    if (!/^\d+$/.test(value)) {
      if (locale.value == "ru") return "Только цифры";
      if (locale.value == "en") return "Numbers only";
    }
    return true;
  }
  if (props.type == "string") {
    if (!value) {
      if (locale.value == "ru") return "Обязательное поле";
      if (locale.value == "en") return "Required";
    }
    return true;
  }
};

let nameRef = toRef(props, "name");

const { errorMessage, value } = useField(nameRef, isRequired);

const emit = defineEmits(["fieldValue"]);
let activeList = ref(false);

const handleChange = (event) => {
  // console.log("event.value", event.target.value);
  // if (!event.target.value) {
  //   activeList.value = false;
  //   return;
  // }
  // activeList.value = true;
  // const displaySuggestions = function (predictions, status) {
  //   if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
  //     alert(status);
  //     return;
  //   }
  //   predictions.forEach((prediction) => {
  //     console.log(prediction);
  //   });
  // };
  // service.value.getQueryPredictions(
  //   {
  //     input: event.target.value,
  //   },
  //   displaySuggestions
  // );
};
let service = ref(null);
onMounted(() => {
  if (props.autocomplete) {
    service.value = new window.google.maps.places.AutocompleteService({
      componentRestrictions: { country: ["IDN"] },
    });
    // rootInput.value.querySelector("input"),
    //   {
    //     types: ["establishment"],
    //     componentRestrictions: { country: ["IDN"] },
    //     fields: ["place_id", "geometry", "name"],
    //   }
  }
});
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
.pac-container
	margin-top: -44px
	margin-left: -53px
	background-color: #353535
	color: $light
	border: none

.pac-item
	color: $light
	border: none
	padding: 8px 4px
	&:hover
		background-color: lighten(#353535, 10%)
	span
		opacity: 1
	&-query
		opacity: 1
		color: $light
	.pac-matched
		color: white
		font-weight: bold
		opacity: 1
.ci
	&-suggests
		background-color: #353535
		top: 100%
		border-radius: 12px
		padding: 0
		z-index: 10
		li
			cursor: pointer
			padding-left: 30px
			&:hover
				background-color: lighten(#353535, 10%)
	&.ci__invest-form
		position: relative
		border-bottom: 1px solid #F3F3F3

		.ci-error
			color: red
			font-size: 12px
		.ci-error-container
			// height: 10px
			bottom: 0
			position: absolute
		.ci-container
			display: flex
			font-size: 16px
			align-items: center
			height: 65px
			position: relative
			padding-right: 21px
			padding-left: 3px
			border-radius: 0
			background-color: white
		.ci-icon-container
			width: 30px
			display: flex
			justify-content: flex-start
		.ci-input
			height: 100%
			white-space: nowrap
			background-color: white
			overflow: hidden
			flex-grow: 1
			text-overflow: ellipsis
			color: $dark
		input
			&:focus::placeholder
				color: transparent
			&::placeholder
				color: $dark
	&.ci__widget-form
		position: relative
		border-bottom: 1px solid #f3f3f3
		input
			&:focus::placeholder
				color: transparent
			&::placeholder
				color: $dark

		.ci-container
			color: $dark
			font-size: 16px
			display: flex
			height: 76px
			align-items: center
			justify-content: flex-start
			position: relative
			padding-right: 21px
			padding-left: 0
			border-radius: 0
			background-color: $light
		.ci-input
			white-space: nowrap
			height: 100%
			background-color: $light
			overflow: hidden
			flex-grow: 1
			text-overflow: ellipsis
		.ci-icon-container
			height: 100%
			display: flex
			align-items: center
			left: 0
			margin-right: 20px
		.ci-error
			color: red
			font-size: 12px
		.ci-error-container
			// height: 10px
			bottom: 0
			position: absolute
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
