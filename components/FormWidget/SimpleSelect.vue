<template>
	<div class="wg-select pb-[5px] cursor-pointer relative">
		<div
			@click="wgListVisible = !wgListVisible"
			class="wg-phone-label pr-[6px] pt-[31px] pb-[20px] flex items-center"
		>
			<slot></slot>
			<div class="wg-phone-label-text">
				<span class="">{{ selectedLabel }}</span>
			</div>
			<SvgArrowIcon
				:class="{ 'rotate-180': wgListVisible }"
				class="ml-auto duration-300 w-[10px] h-[18px] relative top-[3px]"
			></SvgArrowIcon>
		</div>
		<Field
			:name="name"
			as="select"
			class="hidden"
			v-model="selected"
			:rules="requiredChoice ? validateSelect : null"
		>
			<option v-for="answer in props.answers" :value="answer.name">
				{{ answer.name }}
			</option>
		</Field>
		<Transition name="fromTop">
			<div
				:style="`max-height: ${props.maxHeight}px`"
				class="wg-select-list-container overflow-auto max-h-[255px] z-[0] top-[75px] absolute bg-light w-full"
				v-show="wgListVisible"
			>
				<ul class="wg-list pt-[5px] pb-[11px]">
					<li
						v-for="(answer, i) in props.answers"
						@click="selectOption(answer)"
						class="wg-list-item text-[16px] h-[61px] text-[#111111] pr-[21px] bg-[#f5f5f5] hover:bg-white flex items-center pl-[30px] cursor-pointer"
					>
						{{ answer.name }}
					</li>
				</ul>
			</div></Transition
		>
		<Transition name="error">
			<ErrorMessage
				class="text-[12px] absolute text-red-600 font-bold z-[-1]"
				:name="name"
			></ErrorMessage>
		</Transition>
	</div>
</template>

<script setup>
import { ErrorMessage, Field } from "vee-validate";

let wgListVisible = ref(false);
let selectedItem = ref(null);
let selected = ref(null);
let props = defineProps({
	label: {
		type: String,
		required: true,
	},
	answers: {
		type: Array,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	requiredChoice: {
		type: Boolean,
		required: true,
	},
	maxHeight: {
		type: Number,
		required: true,
	},
});
let selectOption = (option) => {
	selected.value = option;
	selectedItem.value = option;
	wgListVisible.value = false;
};
let selectedLabel = computed(() => {
	if (selectedItem.value !== null) {
		return selectedItem.value.name;
	} else return props.label;
});
let validateSelect = (value) => {
	//
	if (!value) return "Необходимо выбрать";

	return true;
};
</script>

<style lang="sass">

.fromTop-enter-active, .fromTop-leave-active
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1)

.fromTop-enter-from,
.fromTop-leave-to
  transform: translate3d(0, -20px, 0)
  opacity: 0
</style>
