<template>
  <div class="flex items-center h-[76px] field">
    <slot></slot>
    <input
      type="text"
      v-model="phone"
      class="hidden"
      name="client_phone"
      id="client_phone"
    />
    <ClientOnly>
      <vue-tel-input
        :class="classes"
        class="ml-[7px]"
        v-model="phone"
        mode="international"
        autoformat
        defaultCountry="RU"
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
let phone = ref("");
const props = defineProps({
  name: {
    default: "phone",
    type: String,
  },
  type: String,
});
const telValidate = (telnumber) => {
  if (telnumber.valid) {
    phone.value = telnumber.number;
  } else {
    phone.value = "";
  }
};

const classes = computed(() => {
  if (props.type == "widget") return "widget-phone";
  if (props.type == "index") return "index-phone";
  if (props.type == "order") return "order-phone";
});
</script>

<style lang="sass">
.field
	&.index__phone
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
	// .vue-tel-input
	// 	&.index-phone

.vue-tel-input
	&.index-phone
		.field
			color: $dark
			font-size: 16px
			background-color: $light
			z-index: 2
			padding: 23px 21px 20px 50px
			user-select: none
			display: flex
			align-items: center
			border-radius: 12px
	&.widget-phone
		color: $dark
		font-size: 16px
		+helvr
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
	border: none
</style>
