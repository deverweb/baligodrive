<template>
  <div :class="classes" class="flex items-center pf">
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
</template>

<script setup>
import { useField } from "vee-validate";

let { value: phoneValue } = useField(props.name);
let ctCode = ref(0);
const handleCountryChange = (obj) => {
  ctCode.value = obj.dialCode;
};

const handleInput = (num, obj) => {
  if (num.length < ctCode.value.length + 1) phoneValue.value = "+" + ctCode.value;
};

let phone = ref("");
const props = defineProps({
  name: {
    default: "phone",
    type: String,
  },
  type: String,
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
	&.index-phone
		color: $dark
		font-size: 16px
		background-color: $light
		z-index: 2
		padding: 23px 21px 20px 20px
		height: 67px
		user-select: none
		display: flex
		align-items: center
		border-radius: 12px
		border: none
		.phone-input
			border: none
			color: $dark
			font-size: 16px
			background-color: $light
			z-index: 2
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
