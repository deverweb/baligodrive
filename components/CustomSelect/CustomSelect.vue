<template>
	<div
		ref="root"
		:class="canSee ? 'z-[5]' : 'z-[4]'"
		class="cs select-none relative text-dark text-[16px]"
	>
		<div
			@click="changeVisible"
			:class="{ shadow: canSee }"
			class="cs-current z-[2] flex items-center cursor-pointer justify-between relative pt-[25px] pb-[21px] pr-[21px] pl-[50px] rounded-[12px] bg-light"
		>
			<div class="cs-icon absolute left-[18px]">
				<slot></slot>
			</div>
			<div class="cs-label whitespace-nowrap overflow-hidden text-ellipsis">
				{{ selectedOption }}
			</div>
			<div class="cs-arrow">
				<svg
					width="8"
					height="6"
					viewBox="0 0 8 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 1.5L4 4.5L7 1.5"
						stroke="#111111"
						stroke-width="1.3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</div>
		<Transition @enter="enter" @leave="leave">
			<div
				class="cs-list-container max-h-0 top-0 opacity-0 absolute rounded-[12px] bg-light w-full"
				v-show="canSee"
			>
				<ul class="cs-list pt-[80px] pb-[10px]">
					<li
						v-for="(element, i) in options.elements"
						:key="i"
						@click="selectOption(element)"
						class="cs-list-item pr-[21px] bg-light hover:bg-dark py-[20px] pl-[50px] cursor-pointer"
					>
						{{ element.model }}
					</li>
				</ul>
			</div>
		</Transition>
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Object,
			required: true,
		},
		isVisible: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		enter(element, done) {
			element.style.maxHeight =
				element.querySelector(".cs-list").scrollHeight + "px";
			element.style.opacity = "1";
			done();
		},
		afterEnter(element) {
			element.style.transition = null;
		},
		leave(element) {
			element.style.maxHeight = "0px";
			element.style.opacity = "0";
		},
	},
	emits: ["selectOption"],
	setup({ options, isVisible }) {
		let selectedOption = ref(options.defaultValue);
		let canSee = ref(isVisible);
		const root = ref(null);
		let changeVisible = () => {
			canSee.value = !canSee.value;
			if (canSee.value) window.addEventListener("click", closeCSonWindowClick);
		};
		let selectOption = (option) => {
			selectedOption.value = option.model;
			canSee.value = false;
			window.removeEventListener("click", closeCSonWindowClick);
		};
		const closeCSonWindowClick = (event) => {
			if (
				canSee.value === true &&
				!root.value.isEqualNode(event.target.closest(".cs"))
			) {
				canSee.value = false;
				window.removeEventListener("click", closeCSonWindowClick);
			}
		};

		onUnmounted(() => {
			window.removeEventListener("click", closeCSonWindowClick);
		});
		return {
			selectedOption,
			selectOption,
			canSee,
			root,
			changeVisible,
		};
	},
};
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
