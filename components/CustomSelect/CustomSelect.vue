<template>
	<div
		ref="root"
		:class="isVisible ? 'z-[5]' : 'z-[4]'"
		class="cs select-none relative text-dark text-[16px]"
	>
		<Dropdownbtn
			@click="changeVisible"
			:class="{ shadow: isVisible }"
			:label="selectedOptionLabel"
			:active="isVisible"
			class="cs-current"
			><slot></slot
		></Dropdownbtn>
		<Transition @enter="enter" @leave="leave">
			<div
				class="cs-list-container max-h-0 top-0 opacity-0 absolute rounded-[12px] bg-light w-full"
				v-show="isVisible"
			>
				<ul class="cs-list pt-[80px] pb-[10px]">
					<!-- <li
						class="cs-list-item pr-[21px] bg-light hover:bg-dark py-[20px] pl-[50px] cursor-pointer"
						@click="selectOption(props.emptyLabel)"
						v-if="props.emptyLabel"
					>
						{{ props.emptyLabel }}
					</li> -->
					<li
						v-for="(option, i) in options"
						@click="selectOption(option)"
						class="cs-list-item pr-[21px] bg-light hover:bg-dark py-[20px] pl-[50px] cursor-pointer"
					>
						{{ option.name }}
					</li>
				</ul>
			</div>
		</Transition>
		<Transition name="fadeIn">
			<div
				class="cs-error-container h-[25px] overflow-hidden"
				v-show="!isValid && dirty"
			>
				<div class="cs-error">
					<span class="text-red-600 text-[14px] pt-[4px] pl-[2px]">{{
						errorMessage
					}}</span>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup>
const props = defineProps({
	options: {
		type: Array,
		required: true,
	},
	defaultLabel: {
		type: String,
		required: true,
	},
	requiredSelect: {
		type: Boolean,
		required: false,
		default: false,
	},
	emptyLabel: {
		type: String,
		required: false,
	},
});
const emits = defineEmits(["selectOption"]);
let isVisible = ref(false);
let selectedOption = ref(null);
let isValid = ref(false);
let dirty = ref(false);
let errorMessage = computed(() => {
	return "ERrormesage";
});
function enter(element) {
	element.style.maxHeight =
		element.querySelector(".cs-list").scrollHeight + "px";
	element.style.opacity = "1";
}
function leave(element) {
	element.style.maxHeight = "0px";
	element.style.opacity = "0";
}

let selectedOptionLabel = computed(() => {
	if (selectedOption.value == null) {
		return props.defaultLabel;
	} else {
		return selectedOption.value;
	}
});
const root = ref(null);

let changeVisible = () => {
	dirty.value = true;
	isVisible.value = !isVisible.value;
	if (isVisible.value) window.addEventListener("click", closeCSonWindowClick);
};
let selectOption = (option) => {
	if (typeof option === "object") {
		selectedOption.value = option.name;
	}
	if (typeof option === "string") {
		selectedOption.value = option;
	}
	isValid.value = true;
	isVisible.value = false;
	window.removeEventListener("click", closeCSonWindowClick);
};
const closeCSonWindowClick = (event) => {
	if (
		isVisible.value === true &&
		!root.value.isEqualNode(event.target.closest(".cs"))
	) {
		isVisible.value = false;
		window.removeEventListener("click", closeCSonWindowClick);
	}
};

onUnmounted(() => {
	window.removeEventListener("click", closeCSonWindowClick);
});
</script>

<style lang="sass" scoped>
.cs-list-item
	transition: background 0.2s ease-in-out
	&:hover
		background-color: darken($light, 5%)

.cs-list-container
	overflow: hidden
	transition: 0.4s max-height cubic-bezier(0, 0.55, 0.45, 1), opacity 0.4s cubic-bezier(0, 0.55, 0.45, 1)
	transition: 0.2s max-height ease-out, opacity 0.25s ease-out
.cs-current
	position: relative
	&.shadow
		&::before
			opacity: 1
	&::before
		position: absolute
		content: ""
		top: 0
		left: 0
		right: 0
		height: 100%
		width: 100%
		opacity: 0
		transition: opacity 0.2s ease-in-out 0.1s
		box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.12)
</style>
