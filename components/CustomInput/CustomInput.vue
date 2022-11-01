<template>
	<div class="ci">
		<div
			class="z-[2] text-dark text-[16px] h-[67px] sm:h-[60px] flex items-center justify-between relative pr-[21px] pl-[50px] rounded-[12px] bg-light"
		>
			<div class="absolute left-[18px]">
				<slot></slot>
			</div>
			<Field
				placeholder="Телефон"
				class="whitespace-nowrap h-full bg-light overflow-hidden flex-grow text-ellipsis"
				type="text"
				name="phone"
				v-model="inputValue"
			/>
		</div>
		<Transition name="fadeIn">
			<div class="ci-error-container overflow-hidden h-[25px]">
				<div class="ci-error text-red-600 text-[14px] pt-[4px] pl-[2px]">
					<ErrorMessage name="phone"></ErrorMessage>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup>
import { ErrorMessage, Field } from "vee-validate";

const props = defineProps({
	required: {
		required: true,
		type: Boolean,
	},
});

const emit = defineEmits(["validField"]);
let used = ref(false);

let inputValue = ref("");
let validateTextField = (value) => {
	if (value == "") {
		return "Обязательное поле";
	}

	if (!/^\d+$/.test(value)) {
		return "Только цифры";
	}
	return true;
};

// let isValid = computed(() => {
// 	if (used.value) {
// 		return inputValue.value !== "" && /^\d+$/.test(inputValue.value);
// 	}
// });

// const onBlurHandler = () => {
// 	used.value = true;
// 	if (isValid.value) {
// 		emit("validField", true);
// 	} else {
// 		emit("validField", false);
// 	}
// };
</script>

<style lang="sass">
.ci
	input
		&:focus::placeholder
			color: transparent
		&::placeholder
			color: $dark

.fadeIn-enter-active, .fadeIn-leave-active
	transition: .2s ease all
	max-height: 25px

.fadeIn-enter-from, .fadeIn-leave-to
	max-height: 0px
	opacity: 0
</style>
