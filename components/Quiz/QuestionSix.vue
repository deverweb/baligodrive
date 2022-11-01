<template>
  <div class="quiz-question">
    <QuizQuestionTitle
      :num="5"
      :text="'Выберите способ оплаты'"
    ></QuizQuestionTitle>
    <div class="quiz-question-inner">
      <div class="quiz-radio">
        <input name="payment" type="radio" id="callback" />
        <label for="callback">Оплата после консультации менеджара </label>
      </div>
      <div class="quiz-radio">
        <input name="payment" type="radio" id="rucard" />
        <label for="rucard">Оплата картой на сайте (Россия)</label>
      </div>
      <div class="quiz-radio">
        <input name="payment" type="radio" id="globalcard" />
        <label for="globalcard">Оплата картой на сайте (для всего мира)</label>
      </div>
      <div class="quiz-radio">
        <input name="payment" type="radio" id="binance" />
        <label for="binance">Оплата криптовалютой через Binance Pay</label>
      </div>
    </div>
  </div>
</template>

<script setup>
let currentLabel = ref("");
</script>

<style lang="sass" scoped>
.quiz-radio
	margin-bottom: 30px
	&:last-child
		margin-bottom: 0
	input
		opacity: 0
		z-index: -1
		left: -99999px
		position: absolute
		visibility: hidden
		&:checked + label
			&::before
				border-color: $green
			&::after
				background-color: $green
	label
		position: relative
		cursor: pointer
		&::before
			content: ""
			border: 1px solid #545454
			border-radius: 50%
			height: 15px
			width: 15px
			display: inline-block
			margin-right: 20px
			transition: 0.15s all ease
		&::after
			content: ""
			position: absolute
			transition: 0.15s all ease
			width: 5px
			height: 5px
			background-color: transparent
			border-radius: 50%
			left: 5px
			top: 30%
</style>
