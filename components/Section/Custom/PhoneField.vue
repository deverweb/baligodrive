<template>
  <div :class="classes" class="flex flex-col items-start pf">
    <div class="ci-subtitle font-Helvmed text-[14px] mb-[9px] opacity-50" v-if="props.subTitle">
      {{ props.subTitle }}
    </div>
    <div class="pf-container">
      <div class="pf-icon-container">
        <slot></slot>
      </div>
      <input type="text" v-model="phone" class="hidden" name="client_phone" id="client_phone" />
      <ClientOnly>
        <vue-tel-input
          class="ml-[7px] phone-input"
          v-model="phoneValue"
          mode="international"
          @country-changed="handleCountryChange"
          @on-input="handleInput"
          :preferredCountries="['ID', 'RU', 'UA']"
          autoformat
          :validCharactersOnly="true"
          :autoDefaultCountry="false"
          placeholder="Номер телефона"
          :dropdownOptions="{
            showFlags: true,
            showSearchBox: true,
            showDialCodeInList: true,
          }"
          :inputOptions="{
            maxlength: 17,
            name: props.name,
            showDialCode: true,
            placeholder: 'Номер телефона',
          }"
        ></vue-tel-input>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";

let { value: phoneValue } = useField(props.name);
let ctCode = ref(0);
const handleCountryChange = (obj) => {
  ctCode.value = obj.dialCode;
};

// const handle = (num, obj) => {
//   console.log("num:", num);
//   console.log("obj:", obj);
// };

const handleInput = (num, obj) => {
  let regexp = new RegExp("^[0-9 ]+$");
  if (regexp.test(num.slice(1))) {
  } else {
    phoneValue.value = num.slice(0, -1);
    return;
  }
  if (num.length < ctCode.value.length + 1) phoneValue.value = "+" + ctCode.value;
};

let phone = ref("");
const props = defineProps({
  name: {
    default: "phone",
    type: String,
  },
  type: String,
  subTitle: String,
});

const classes = computed(() => {
  return props.type + "-phone";
});
</script>

<style lang="sass">
.pf

	&:focus-within
		box-shadow: none
		input
			border: none
			&:focus
				border: none
			&:active
				border: none
	&.order-phone
		color: $light
		font-size: 16px
		background-color: transparent
		z-index: 2
		user-select: none
		border: none
		.pf-container
			height: 67px
			position: relative
			padding: 23px 21px 20px 20px
			border-radius: 12px
			display: flex
			align-items: center
			border: 1px solid rgba(251, 251, 253, 0.3)
			width: 100%
		.ci-subtitle
			color: $light
			opacity: 0.5
		.phone-input
			border: none
			color: $light
			font-size: 16px
			background-color: transparent
			z-index: 2
			width: 100%

			// padding: 23px 21px 20px 50px
			user-select: none
			display: flex
			align-items: center
			height: 100%
			.vti__dropdown-item.highlighted
				background-color: $dark300
			.vti__dropdown-list
				background-color: $dark
			.vti__dropdown
				&:hover
					background: transparent
			input
				background: transparent
				color: $light
			&:focus-within
				box-shadow: none

	&.index-phone
		color: $dark
		font-size: 16px
		background-color: $light
		z-index: 2
		padding: 23px 21px 20px 20px
		height: 67px
		user-select: none
		display: flex
		align-items: flex-start
		border-radius: 12px
		border: none
		.pf-container
			display: flex
			height: 100%
			align-items: center
		.phone-input
			border: none
			color: $dark
			font-size: 16px
			background-color: $light
			z-index: 2
			width: 100%
			// padding: 23px 21px 20px 50px
			user-select: none
			display: flex
			align-items: center
			border-radius: 12px
			height: 100%
			&:focus-within
				box-shadow: none
	&.invest-phone
		padding-left: 3px

		height: 67px
		position: relative
		padding-right: 30px
		padding-left: 20px
		border-radius: 12px
		border: 1px solid #D6D6D6
		.pf-container
			display: flex
			height: 100%
			align-items: center

		.pf-icon-container
			width: 14px
		.vti__dropdown-list
			z-index: 10
		.vue-tel-input
			border-radius: 0
			border: none
			background: transparent
		.phone-input
			height: 71px
			display: flex
			align-items: center
			color: $dark
			font-size: 16px
			z-index: 10
			&:focus-within
				box-shadow: none
			input
				border: none
				&:focus
					border: none
				&:active
					border: none
	&.widget-phone
		.pf-container
			display: flex
			height: 100%
			align-items: center
		.phone-input
			color: $dark
			font-size: 16px
			height: 76px
			+helvr
			border: none
			.vti__dropdown-list
				z-index: 5
				+r(600)
					max-width: calc(100vw - 70px)
					left: -22px
					top: 40px
			&:focus-within
				box-shadow: none
			input
				border: none
				&:focus
					border: none
				&:active
					border: none
</style>
