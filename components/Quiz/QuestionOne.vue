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
					>1</span
				>
			</div>
			<div class="quiz-question-title-label text-[18px] font-Helvmed">
				Выберите байк и дополнительную комплектацию
			</div>
		</div>
		<div
			class="quiz-question-inner pl-[2px] grid grid-cols-2 gap-x-[30px] gap-y-[32px]"
		>
			<QuizSelect
				:label="`Модель байка`"
				defaultAnswer="Выберите модель"
				:answers="bikesList"
			>
				<SvgBikeIcon fill="#6A6A6A" class="mr-[20px]"></SvgBikeIcon
			></QuizSelect>
			<QuizSelect
				:label="`Защитные шлемы (включено в стоимость)`"
				defaultAnswer="Выберите количество шлемов"
				:answers="helmetOptions"
				><SvgQuizHelmetIcon fill="#6A6A6A" class="mr-[20px]"></SvgQuizHelmetIcon
			></QuizSelect>
			<QuizSelect
				:label="`Комплектация байка`"
				defaultAnswer="Байк с креплением и сёрф (+30$)"
				:answers="equipList"
				><SvgEquipIcon class="mr-[20px]"></SvgEquipIcon
			></QuizSelect>
			<QuizSelect
				:label="`Модель сёрфа`"
				defaultAnswer="Выберите модель"
				:answers="surfList"
				><SvgSurfIcon stroke="#6A6A6A" class="mr-[20px]"></SvgSurfIcon
			></QuizSelect>
		</div>
	</div>
</template>

<script setup>
const bikesList = [
	{
		title: "Модель байка 1",
	},
	{
		title: "Модель байка 2",
	},
	{
		title: "Модель байка 3",
	},
];
const helmetOptions = [
	{
		title: "Опция шлемов 1",
	},
	{
		title: "Опция шлемов 2",
	},
	{
		title: "Опция шлемов 3",
	},
];
const equipList = [
	{
		title: "Комплектация байка 1",
	},
	{
		title: "Комплектация байка 2",
	},
	{
		title: "Комплектация байка 3",
	},
];
const surfList = [
	{
		title: "Модель серфа 1",
	},
	{
		title: "Модель серфа 2",
	},
	{
		title: "Модель серфа 3",
	},
];

let selectedBike = ref(null);
let selectedHelmetOption = ref(null);
let selectedEquipOption = ref(null);
let selectedSurf = ref(null);
</script>

<style lang="sass"></style>
