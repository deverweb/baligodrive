<template>
	<div class="quiz w-full mx-auto text-light max-w-[1368px] h-[700px] flex">
		<div
			class="quiz-content pt-[80px] grow px-[78px] bg-[#2B2B2B] rounded-tl-[12px] rounded-bl-[12px]"
		>
			<div class="quiz-content-title quiz-inner-title pb-[40px]">
				<h2 class="font-Euroblack text-[32px] uppercase">ОФОРМЛЕНИЕ ЗАКАЗА</h2>
			</div>
			<div class="quiz-question"></div>
			<div class="quiz-progress"></div>
		</div>
		<div
			class="quiz-cart pt-[80px] flex flex-col items-center text-center rounded-tr-[12px] rounded-br-[12px] bg-dark-800 w-[378px] shrink-0"
		>
			<div class="quiz-cart-title quiz-inner-title pb-[40px]">
				<h2 class="font-Euroblack text-[32px] uppercase">Ваш заказ</h2>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="sass">
.quiz-inner-title
	+eu
	font-size: 32px
	text-transform: uppercase
	padding-bottom: 40px
	position: relative
	&::before
		content: ""
		position: absolute
		left: 0
		right: 0
		bottom: -20px
		height: 2px
		background-color: #3F3F40
</style>
