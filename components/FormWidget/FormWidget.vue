<template>
	<div v-if="isOrderPage" class="wg z-10 fixed right-[100px] bottom-[80px]">
		<div
			@click="toggleVisibility"
			class="wg-fixed-button transition-transform w-[60px] h-[60px] bg-green rounded-full cursor-pointer"
		>
			<SvgCalendarIcon fill="white" class="absolute wg-svg"></SvgCalendarIcon>
		</div>
		<Transition name="enterIn">
			<div v-show="visible" class="wg-form w-[352px] absolute right-[50%]">
				<h3
					class="wg-form-title tracking-[-0.5px] rounded-[12px] rounded-b-none text-center py-[24px] whitespace-nowrap bg-dark-500 font-Euroblack text-[16px] uppercase"
				>
					Забронировать байк
				</h3>
				<Form
					@submit="handleSubmit"
					class="text-dark bg-white text-[16px] px-[32px] rounded-b-[12px] pb-[30px] wg-form-form relative"
				>
					<div
						class="wg-form-phone pt-[6px] wg-field h-[74px] flex items-center"
					>
						<SvgPhoneIcon class="h-[14px] mr-[16px] w-[14px]"></SvgPhoneIcon>
						<Field
							name="phone"
							class="leading-[1] w-[80%] h-full"
							placeholder="Номер телефона"
							:rules="validateTextField"
							v-model="textField"
						></Field>
					</div>
					<ErrorMessage
						name="phone"
						class="text-[12px] absolute text-red-600 font-bold"
					></ErrorMessage>
					<SimpleSelect
						:answers="commercialData.bikes"
						name="bike"
						:maxHeight="260"
						class="select-none z-[7] wg-field h-[77px]"
						label="Модель байка"
						:requiredChoice="true"
					>
						<SvgBikeIcon
							class="w-[18px] h-[18px] mr-[12px] relative"
						></SvgBikeIcon>
					</SimpleSelect>
					<SimpleSelect
						:answers="commercialData.surfBoards"
						name="surf"
						:maxHeight="187"
						class="select-none z-[6] wg-field h-[77px]"
						label="Сёрфборд"
						:requiredChoice="false"
					>
						<SvgSurfIcon class="relative mr-[12px]"></SvgSurfIcon>
					</SimpleSelect>
					<FormWidgetDateSelect
						class="select-none h-[77px] cursor-pointer wg-field"
					></FormWidgetDateSelect>
					<div class="wg-form-bottom pt-[30px]">
						<TheButton
							class="w-[292px] max-w-[100%] h-[70px] rounded-[12px] white text-light"
						>
							<span>Оформление заказа</span>
						</TheButton>
					</div>
				</Form>
			</div>
		</Transition>
	</div>
</template>

<script setup>
import SimpleSelect from "./SimpleSelect.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { useWidgetStore } from "@/store/widget";
import { storeToRefs } from "pinia";
import { useCommercialStore } from "~~/store/commercial";
import { useCartStore } from "~~/store/cart";

const cartStore = useCartStore();

const { cart, fillTheCart } = cartStore;

const widgetStore = useWidgetStore();
const commercialStore = useCommercialStore();
const { commercialData } = commercialStore;

const { push } = useRouter();
const route = useRoute();
const { visible } = storeToRefs(widgetStore);
const { toggleVisibility } = widgetStore;
let textField = ref("");

let isOrderPage = computed(() => {
	return route.path !== "/order";
});

const handleSubmit = (values) => {
	console.log(values);
	toggleVisibility();
	// fillTheCart({
	// 	bike: values.bike,
	// 	phone: values.phone,
	// 	surf: values.surf,
	// 	date: values.date,
	// });
	fillTheCart(values);
	console.log(cart);
	push("/order");
};

onMounted(() => {
	window.addEventListener("click", closeOnClick);
});

const validateTextField = (value) => {
	if (textField.value == "") return "Не может быть пустым";
	if (!/^\d+$/.test(textField.value)) {
		return "Только цифры";
	}
	return true;
};

function closeOnClick(event) {
	if (visible.value && !event.target.closest(".wg")) {
		toggleVisibility();
		window.removeEventListener("click", closeOnClick);
	}
}
</script>

<style lang="sass" scoped>
.enterIn-enter-active, .enterIn-leave-active
	transition: all 200ms ease-in

.enterIn-enter-from, .enterIn-leave-to
	transform: translateY(20px)
	opacity: 0
.wg
	filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.1))
	&-field
		border-bottom: 1px solid #f3f3f3
		border-bottom: 1px solid black
	&-form
		bottom: calc(100% + 30px)
		input
			&:focus::placeholder
				color: transparent
			&::placeholder
				color: $dark


		&-label
			border-bottom: 1px solid #F3F3F3
			// border-bottom: 1px solid black
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
