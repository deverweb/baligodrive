<template>
	<div class="quiz-question">
		<div
			class="quiz-question-title mb-[38px] pl-[2px] flex items-center text-light"
		>
			<div
				class="quiz-question-title-number mr-[30px] relative font-Helvbold text-[14px] bg-green rounded-full w-[32px] h-[32px]"
			>
				<span
					class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
					>4</span
				>
			</div>
			<div class="quiz-question-title-label text-[18px] font-Helvmed">
				Введите ваши контактные данные
			</div>
		</div>
		<div class="quiz-question-inner grid gap-x-[30px] gap-y-[32px] grid-cols-2">
			<QuizTextField label="Ваши ФИО" placeholder="Введите ваши ФИО"
				><SvgPersonIcon class="mr-[10px]"></SvgPersonIcon
			></QuizTextField>
			<QuizTextField label="Ваш E-mail" placeholder="Введите ваш E-mail"
				><SvgMailIcon class="mr-[10px]" fill="#69696A"></SvgMailIcon
			></QuizTextField>
			<QuizTextField label="Ваш номер телефона" placeholder="Введите ваш номер"
				><SvgPhoneIcon class="mr-[10px]" fill="#69696A"></SvgPhoneIcon
			></QuizTextField>
			<QuizSelect
				:answers="messengers"
				label="Мессенджеры"
				default-answer="Альтернативный способ связи"
				><SvgMessageIcon class="mr-[10px]"></SvgMessageIcon
			></QuizSelect>
		</div>
	</div>
</template>

<script setup>
let messengers = [
	{
		title: "Whatsapp",
	},
	{
		title: "Telegram",
	},
	{
		title: "Viber",
	},
];
</script>

<style lang="sass"></style>
