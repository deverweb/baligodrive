<template>
	<div class="wg z-10 fixed right-[100px] bottom-[80px]">
		<div
			@click="toggleIsOpened"
			class="wg-fixed-button transition-transform w-[60px] h-[60px] bg-green rounded-full cursor-pointer"
		>
			<SvgCalendarIcon fill="white" class="absolute wg-svg"></SvgCalendarIcon>
		</div>
		<Transition>
			<div v-show="isOpened" class="wg-form w-[352px] absolute right-[50%]">
				<h3
					class="wg-form-title tracking-[-0.5px] rounded-[12px] rounded-b-none px-[39px] py-[24px] whitespace-nowrap bg-dark-500 font-Euroblack text-[16px] uppercase text-center"
				>
					Забронировать байк
				</h3>
				<form
					@submit.prevent="handleSubmit"
					class="text-dark bg-white text-[16px] pl-[32px] pr-[32px] rounded-b-[12px] pb-[30px]"
				>
					<PhoneSelect class="wg-form-label"></PhoneSelect>
					<SimpleSelect label="Модель байка">
						<SvgBikeIcon></SvgBikeIcon>
					</SimpleSelect>
					<SimpleSelect label="Сёрфборд">
						<SvgSurfIcon></SvgSurfIcon>
					</SimpleSelect>
					<DateSelect></DateSelect>
				</form>
			</div>
		</Transition>
	</div>
</template>

<script setup>
import PhoneSelect from "./PhoneSelect.vue";
import SimpleSelect from "./SimpleSelect.vue";
import { Form } from "vee-validate";

let isOpened = ref(true);

const toggleIsOpened = () => {
	isOpened.value = !isOpened.value;
};

const handleSubmit = () => {
	console.log("hello world");
};

onMounted(() => {
	window.addEventListener("click", closeOnClick);
});

function closeOnClick(event) {
	if (isOpened.value === true && !event.target.closest(".wg")) {
		isOpened.value = false;
		window.removeEventListener("click", closeOnClick);
	}
}
</script>

<style lang="sass" scoped>
.wg
	filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.1))
	&-form
		bottom: calc(100% + 30px)
		&-label
			border-bottom: 1px solid #F3F3F3
			border-bottom: 1px solid black
	&-fixed
		&-button
			box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25)
			&:active
				transform: scale(0.9)
	&-svg
		top: 50%
		left: 50%
		transform: translate(-50%, -50%)
</style>
