<template>
	<div class="wg-phone cursor-pointer" @click="clickMe">
		<div class="wg-phone-label pt-[33px] pb-[22px] flex items-center">
			<SvgPhoneIcon class="mr-[16px]"></SvgPhoneIcon>
			<div class="wg-phone-label-text">
				<span @click="setActive" v-show="!isActive">{{ phone_label }}</span>

				<input
					type="text"
					v-model="phone"
					ref="inputField"
					name="phone"
					class="absolute"
					@blur="handleBlur"
				/>
			</div>
			<SvgArrowIcon class="ml-auto"></SvgArrowIcon>
		</div>
		<ul class="wg-phone-list">
			<li></li>
		</ul>
	</div>
</template>

<script setup>
import { Field } from "vee-validate";
let phone_label = ref("Номер телефона");
let phone = ref("");
let isActive = ref(false);
let inputField = ref(null);

const handleBlur = () => {
	if (phone.value) {
		console.log(phone.value);
		console.log("в ифе");
		phone_label.value = phone.value;
	}
};

const setActive = () => {
	isActive.value = true;
	console.log(inputField.value);
	inputField.value.focus();
};
</script>

<style lang="sass"></style>
