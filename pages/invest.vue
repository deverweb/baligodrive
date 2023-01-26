<template>
  <div class="">
		<section class="invest-offer bg-[#202020] px-[80px] flex items-center min-h-[800px] h-screen rounded-t-[70px] sm:rounded-t-[44px]">
			<div class="flex flex-col max-w-[1170px]">
				<h1 class=" font-Euroblack uppercase text-[70px] leading-[1] mb-[10px]">ИнвестиРУЙТЕ в бизнес аренды скутеров на балИ</h1>
				<p class="mb-[80px]">И получайте фиксированную доходность от 12% годовых в долларах и с ежемесячными выплатами процентов.</p>
				<div class="flex items-center">
					<TheButton class="w-[330px] mr-[40px] gap-[10px] h-[79px] btn-primary__dark">
						<SvgMoneyIcon fill="#fff"></SvgMoneyIcon>
						<span>Инвестировать</span>
					</TheButton>
					<button class="flex items-center">

						<span class="grid mr-[15px] place-items-center rounded-full h-[25px] w-[25px] border-[#626262] border-solid border-[1px]  ">
							<svg class="relative left-[1px]" width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7 4.5L0.25 8.39711L0.25 0.602885L7 4.5Z" fill="white"/>
							</svg>
						</span>
						<span class="opacity-30 text-[#fff] text-[18px]">Как это работает?</span>
					</button>
				</div>
			</div>
		</section>
		<div class="invest-blocks bg-[#181818] py-[130px] rounded-b-[70px] sm:rounded-b-[44px]">
			<SectionSimpleSixBlocks
				class="mb-[80px]  "
				:blocks="indexSixBlocks"
				:subtitleWidth="570"
				:sectionTitle="'КТО МЫ И ПОЧЕМУ<br>НАМ ДОВЕРЯЮТ?'"
				:sectionSubtitle="'Наша команда работает уже более 7 лет в сфере транспорта. Мы — главные партнёры компаний-агрегаторов Bolt и Uber.'"
			></SectionSimpleSixBlocks>
			<div class="invest-video flex items-center">
				<div class="container">
					<div class="invest-video-text max-w-[45%]">
					<div class="invest-video-title font-Euroblack uppercase text-[46px] mb-[20px]">Uber shuttle</div>
					<p>Наша команда работает уже более 7 лет в сфере транспорта. Мы — главные партнёры компаний-агрегаторов Bolt и Uber.</p>
				</div>
				<div class="invest-video-player"></div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script setup>

const indexSixBlocks = [
	{
		title: "7 лет на рынке",
		text: "Уже более 7 лет работаем в сфере транспорта и агрегаторов"
	},
	{
		title: "Запускали Uber и Bolt",
		text: "Участвовали в запуске Uber и Bolt в России, Украине, Польше и Казахстане"
	},
	{
		title: "Партнёры Uber и Bolt",
		text: "Являемся крупнейшими партнёрами Uber и Bolt в Украине"
	},
	{
		title: "Uber Shuttle",
		text: "В 2019 году успешно запустили проект в Киеве, сейчас он работает во Львове"
	},
	{
		title: "Партнёры DiDi",
		text: "В 2020 году заключили партнерство для запуска компании в России"
	},
	{
		title: "Диверсифицируем риски",
		text: "Вывели на рынок политически стабильной Индонезии новый сервис — GoDrive"
	},
]
</script>

<style lang="sass">
.invest-offer
	background-image: url("/img/invest/offer-bike.png")
	background-repeat: no-repeat
	background-position: right -20px bottom -100px
	background-size: 45%
</style>
