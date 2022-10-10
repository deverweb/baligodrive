<template>
	<div class="wg-phone pb-[5px] cursor-pointer" @click="clickMe">
		<div
			class="wg-phone-label relative pr-[6px] pt-[31px] pb-[20px] flex items-center"
		>
			<SvgPhoneIcon
				class="mr-[16px]"
				@click="isActive = !isActive"
			></SvgPhoneIcon>
			<div class="wg-phone-label-text absolute" :class="{ active: isActive }">
				<span
					class="z-[1] absolute w-[230px] text-ellipsis overflow-hidden"
					@click="isActive = !isActive"
					>{{ phone_label }}</span
				>

				<Field
					type="text"
					v-model="phone"
					ref="inputField"
					name="phone"
					class="absolute w-[230px] z-[0]"
					:class="{ 'z-[1]': isActive }"
					@blur="handleBlur"
					@keyup.enter="handleBlur"
				/>
			</div>
			<SvgArrowIcon
				@click="isActive = !isActive"
				class="ml-auto w-[10px] h-[18px] relative top-[2px]"
			></SvgArrowIcon>
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
	if (phone.value == phone_label.value) {
	}
	isActive.value = false;
};

watch(
	() => isActive.value,
	() => {
		if (isActive.value) {
			inputField.value.focus();
		} else {
		}
		// console.log("active now");
	}
);
</script>

<style lang="sass">
.wg
	&-phone
		&-label
			&-text
				width: calc(100% - 38px)
				left: 62px
				top: 50%
				input
					opacity: 0
					// visibility: hidden
				&.active
					span
						opacity: 0
						position: absolute
						// visibility: hidden
					input
						opacity: 1
						visibility: visible
						position: absolute
</style>
