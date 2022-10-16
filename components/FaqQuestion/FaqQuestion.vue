<template>
	<div
		@click="isAnswerVisible = !isAnswerVisible"
		class="faq-question select-none bg-light relative rounded-[12px] pl-[37px] xsm:pl-[21px] xsm:pr-[24px] md:pl-[35px] md:pr-[22px] pr-[30px] cursor-pointer"
	>
		<div
			class="faq-question-title flex items-center pt-[20px] pb-[21px] xsm:pb-[19px] xsm:pt-[23px] xsm:items-baseline justify-between"
		>
			<h4
				class="font-Helvmed text-[24px] xsm:max-w-[70%] xsm:text-[20px] xsm:leading-[22px] tracking-[-0.7px] text-dark-200"
			>
				{{ question.title }}
			</h4>
			<ArrowIcon
				strokeWidth="0.8"
				:class="isAnswerVisible ? 'rotate-180' : ''"
				class="w-[26px] transition-transform h-[12px]"
			></ArrowIcon>
		</div>
		<Transition @enter="enter" @leave="leave">
			<div
				v-show="isAnswerVisible"
				class="faq-question-container bg-light left-0 rounded-b-[12px] max-h-0 top-[-10px] overflow-hidden w-full"
			>
				<div
					class="faq-question-answer pt-[1px] pr-[70px] xsm:pr-[10px] sm:pr-[40px] md:pr-[60px] pb-[31px]"
				>
					<p
						class="text-dark text-[16px] leading-[1.25] xsm:text-[14px] xsm:leading-[18px]"
					>
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
