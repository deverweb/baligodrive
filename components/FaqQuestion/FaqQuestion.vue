<template>
	<div
		@click="isAnswerVisible = !isAnswerVisible"
		class="faq-question select-none bg-light relative rounded-[12px] px-[37px] cursor-pointer"
	>
		<div class="faq-question-title flex items-center py-[26px] justify-between">
			<h4 class="font-Helvmed text-[24px] text-dark-200">
				{{ question.title }}
			</h4>
			<ArrowIcon class="w-[26px] h-[12px]"></ArrowIcon>
		</div>
		<Transition @enter="enter" @leave="leave">
			<div
				v-show="isAnswerVisible"
				class="faq-question-container bg-light left-0 rounded-b-[12px] max-h-0 top-[-10px] overflow-hidden w-full"
			>
				<div class="faq-question-answer pr-[37px] pb-[30px] pt-[10px]">
					<p class="max-w-[82%] text-dark">
						{{ question.text }}
					</p>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script>
import ArrowIcon from "../Svg/ArrowIcon.vue";
export default {
	props: {
		question: {
			require: true,
			type: Object,
		},
	},
	methods: {
		enter(element, done) {
			element.style.maxHeight = element.scrollHeight + "px";
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
	setup() {
		const isAnswerVisible = ref(false);
		return { isAnswerVisible };
	},
	components: { ArrowIcon },
};
</script>

<style lang="sass" scoped>
.faq-question-container
	transition: 0.4s max-height cubic-bezier(0, 0.55, 0.45, 1), opacity 0.4s cubic-bezier(0, 0.55, 0.45, 1)
	transition: 0.2s max-height ease-out, opacity 0.25s ease-out
</style>
