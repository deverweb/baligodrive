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
					>3</span
				>
			</div>
			<div class="quiz-question-title-label text-[18px] font-Helvmed">
				Выберите локации доставки и возврата
			</div>
		</div>
		<div
			class="quiz-question-inner pl-[2px] grid grid-cols-2 gap-x-[30px] gap-y-[32px]"
		>
			<QuizSelect
				:label="`Локация доставки`"
				defaultAnswer="Выбрать отель / виллу / координаты"
				:answers="locationList"
			>
				<SvgGeoIcon fill="#545455" class="mr-[10px]"></SvgGeoIcon
			></QuizSelect>
			<QuizSelect
				:label="`Время доставки`"
				defaultAnswer="Выбрать время доставки"
				:answers="timeList"
				><SvgClockIcon class="mr-[10px]"></SvgClockIcon
			></QuizSelect>
			<QuizSelect
				:label="`Комплектация байка`"
				defaultAnswer="Выбрать отель / виллу / координаты"
				:answers="locationList"
				><SvgGeoIcon fill="#545455" class="mr-[10px]"></SvgGeoIcon
			></QuizSelect>
			<QuizSelect
				:label="`Время возвратаа`"
				defaultAnswer="Выбрать время возврата"
				:answers="timeList"
				><SvgClockIcon class="mr-[10px]"></SvgClockIcon
			></QuizSelect>
		</div>
	</div>
</template>

<script setup>
const locationList = [
	{ title: "Локация 1" },
	{ title: "Локация 2" },
	{ title: "Локация 3" },
	{ title: "Локация 4" },
];
const timeList = [
	{ title: "10:00" },
	{ title: "11:00" },
	{ title: "12:00" },
	{ title: "13:00" },
	{ title: "14:00" },
	{ title: "15:00" },
	{ title: "16:00" },
	{ title: "17:00" },
	{ title: "18:00" },
	{ title: "19:00" },
	{ title: "20:00" },
];
</script>

<style lang="sass"></style>
