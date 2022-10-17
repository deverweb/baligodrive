<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { EffectCoverflow, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import CustomSelect from "../components/CustomSelect/CustomSelect.vue";
import CalendarIcon from "~~/components/Svg/CalendarIcon.vue";

useHead({
	title: "Baligodrive",
});
const modules = [EffectCoverflow, Navigation];
const { t, locale } = useI18n();
const howActions = [
	{
		title: "Выбираете байк",
	},
	{
		title: "Выбираете дату",
	},
	{
		title: "Бронируете и оплачиваете",
	},
	{
		title: "Приезжаете",
		text: "И мы доставляем вам байк прямо к вилле",
	},
	{
		title: "Катаетесь на байке",
		text: "И мы доставляем вам байк прямо к вилле",
	},
	{
		title: "Привозите байк нам ",
		text: "И мы доставляем вам байк прямо к вилле",
	},
];
const bikesCards = [
	{
		title: "yamaha nmax 2022",
		img: "/img/offer/bike.png",
		desc: "В 2022 году Yamaha выпустила этот мотоцикл на рынок, сделав его желанным для многих.",

		priceDay: "5$",
	},
	{
		title: "yamaha nmax 2022",
		subinfo: "С креплением для сёрфа",
		img: "/img/offer/bike.png",
		desc: "В 2022 году Yamaha выпустила этот мотоцикл на рынок, сделав его желанным для многих.",

		priceDay: "5$",
	},
	{
		title: "yamaha nmax 2022",
		subinfo: "С креплением для сёрфа и сёрфбордом",
		img: "/img/offer/bike.png",
		desc: "В 2022 году Yamaha выпустила этот мотоцикл на рынок, сделав его желанным для многих.",

		priceDay: "5$",
	},
];
const bikeSelectOptions = {
	elements: [
		{
			model: "Модель байка 1",
		},
		{
			model: "Модель байка 2",
		},
		{
			model: "Модель байка 3",
		},
	],
	defaultValue: "Модель байка",
};
const surfSelectOptions = {
	elements: [
		{
			model: "Модель сёрфа 1",
		},
		{
			model: "Модель сёрфа 2",
		},
		{
			model: "Модель сёрфа 3",
		},
	],
	defaultValue: "Сёрфборд*",
};
const services = [
	{
		svg: ["/svg/services/helmet.svg", "/svg/services/clothes.svg"],
		text: "1-2 новых шлема и дождевик включены в стоимость аренды",
	},
	{
		svg: ["/svg/services/phone.svg"],
		text: "Байки оборудованы держателем для телефона или камеры",
	},
	{
		svg: ["/svg/services/insurance.svg"],
		text: "Страховка от угона и поломок включена в стоимость",
	},
	{
		svg: ["/svg/services/repair.svg"],
		text: "Техническая поддержка и беслпатные онлайн-консультации",
	},
	{
		svg: ["/svg/services/bike.svg"],
		text: "Все байки новые - 2022 года выпуска",
	},
	{
		svg: ["/svg/services/surf.svg"],
		text: "3 модели: просто байк, байк с креплениями для сёрфа и сёрфом.",
	},
	{
		svg: ["/svg/services/support.svg"],
		text: "Круглосуточная поддержка клиентов и помощь в дороге",
	},
	{
		svg: ["/svg/services/carrepair.svg"],
		text: "Оперативный выезд команды для ремонта или замены байка",
	},
];

const faqQuestions = [
	{
		title: "Как долго вы доставляете байк?",
		text: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации.",
	},
	{
		title: "Как долго вы доставляете байк?",
		text: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации.",
	},
	{
		title: "Как долго вы доставляете байк?",
		text: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации.",
	},
	{
		title: "Как долго вы доставляете байк?",
		text: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации.",
	},

	{
		title: "Как долго вы доставляете байк?",
		text: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации.",
	},
	{
		title: "Как долго вы доставляете байк?",
		text: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации.",
	},
];
</script>

<template>
	<div>
		<section
			class="offer md:bg-center sm:items-end md:flex md:items-end sm:h-auto md:min-h-[750px] sm:pb-[65px] xl:px-[50px] px-[80px] md:px-[48px] sm:px-[24px] lg:px-[30px] pb-[80px] min-h-[600px] h-screen text-white bg-dark-300 bg-no-repeat bg-cover rounded-t-[70px]"
		>
			<div
				class="offer-content flex md:flex-col md:items-start md:justify-end items-end h-full justify-between"
			>
				<h1
					class="offer-title md:mb-[76px] lil:text-[32px] lil:leading-[34px] sm:mb-[19px] md:text-[72px] font-Euroblack uppercase text-[74px] 2xl:text-[64px] xl:text-[48px] sm:text-[40px]"
				>
					Аренда байков<br />и досок для<br />серфинга на Бали
				</h1>
				<div
					class="offer-service sm:max-w-full hidden md:flex relative items-center sm:flex-col sm:items-start"
				>
					<TheButton
						class="offer-service-button blured gap-[9px] w-[300px] sm:w-[100%] sm:max-w-[340px] sm:h-[70px] h-[82px] mr-[29px] sm:mr-0 sm:order-2"
					>
						<SvgCalendarIcon></SvgCalendarIcon>
						<span>Забронировать</span>
					</TheButton>
					<p
						class="offer-service-text w-[300px] sm:w-[100%] sm:max-w-[340px] sm:tracking-[0.3px] text-[20px] leading-[1.3] tracking-[0.4px] sm:mb-[47px] sm:text-[16px]"
					>
						Сервис с большим выбором серфбордов и байков с креплениями под них.
					</p>
				</div>
			</div>
		</section>
		<section
			class="how bg-dark-300 pt-[123px] pb-[245px] md:pb-[195px] xsm:pb-[155px] md:pt-[93px] sm:pt-[76px]"
		>
			<div class="container">
				<h2
					class="section-title text-light text-center mb-[32px] md:mb-[26px] sm:mb-[31px]"
				>
					Как это<br />работает?
				</h2>
				<p
					class="how-desc section-desc mb-[62px] sm:mb-[51px] max-w-[370px] text-light text-center mx-auto"
				>
					Мы принимаем онлайн оплату в рублях, гривнах, долларах, евро
					и криптовалюте.
				</p>
				<div
					class="how-blocks grid grid-cols-3 gap-[24px] sm:gap-[20px] md:grid-cols-1 md:items-center md:gap-[30px]"
				>
					<div
						v-for="(action, i) in howActions"
						:key="i"
						:class="
							action.text
								? 'py-[36px] sm:pt-[29px] sm:pb-[40px]'
								: 'pt-[33px] pb-[30px] sm:pt-[29px] sm:pb-[36px]'
						"
						class="how-block rounded-[12px] bg-light flex flex-col items-center md:max-w-[440px] md:w-[100%] md:mx-auto"
					>
						<span
							class="how-block-num w-[32px] sm:mb-[10px] h-[32px] font-Helvbold rounded-full bg-green flex items-center justify-center text-[14px] text-light mb-[6px]"
							>{{ `0${i + 1}` }}</span
						>
						<div
							class="how-block-title px-[15px] text-center text-[22px] sm:text-[18px] text-dark font-Helvbold"
							:class="{ 'mb-[6px]': action.text }"
						>
							{{ action.title }}
						</div>
						<div
							v-if="action.text"
							class="how-block-text text-[16px] sm:text-[14px] leading-[20px] sm:leading-[18px] max-w-[250px] sm:max-w-[200px] text-center text-dark"
						>
							{{ action.text }}
						</div>
					</div>
				</div>
			</div>
		</section>
		<section
			class="catalog z-[1] md:pb-[67px] sm:flex sm:flex-col pb-[9px] xsm:flex xsm:flex-col bg-dark-300 text-dark"
		>
			<div class="container">
				<div class="catalog-wrapper mb-[64px] xsm:mb-0">
					<h2
						class="catalog-title section-title text-center mb-[30px] md:mb-[32px]"
					>
						Каталог<br />байков
					</h2>
					<p
						class="catalog-desc section-desc text-center xsm:max-w-[233px] xsm:mb-[3px] xsm:mx-auto"
					>
						Выберите и забронируйте байк из каталога
					</p>
					<div
						class="catalog-drag xsm:flex hidden justify-end xsm:max-h-[35px]"
					>
						<SvgDragAnim class="max-h-full"></SvgDragAnim>
					</div>
				</div>
			</div>

			<div
				class="catalog-arrows w-[550px] sm:w-[90px] sm:self-center translate-x-[-50%] left-[50%] gap-[0px] sm:static sm:transform-none absolute top-[146px] md:top-[124px] justify-between xsm:mt-0 sm:order-[1] flex xsm:justify-center xsm:gap-[30px] xsm:px-0 sm:top-0 select-none z-[2]"
			>
				<div class="catalog-arrows-prev cursor-pointer">
					<svg
						width="31"
						height="16"
						viewBox="0 0 31 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.292891 7.29289C-0.097633 7.68341 -0.097633 8.31658 0.292891 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65685 0.92893L0.292891 7.29289ZM31 7L0.999998 7L0.999998 9L31 9L31 7Z"
							fill="black"
						/>
					</svg>
				</div>
				<div class="catalog-arrows-next cursor-pointer">
					<svg
						width="31"
						height="16"
						viewBox="0 0 31 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M30.7071 8.70711C31.0976 8.31659 31.0976 7.68342 30.7071 7.2929L24.3431 0.928936C23.9526 0.538412 23.3195 0.538412 22.9289 0.928936C22.5384 1.31946 22.5384 1.95263 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM-1.74846e-07 9L30 9.00001L30 7.00001L1.74846e-07 7L-1.74846e-07 9Z"
							fill="black"
						/>
					</svg>
				</div>
			</div>
			<div class="catalog-bikes bikes lg:gap-[36px] lg:grid-cols-1">
				<!-- <Bike v-for="(bike, i) in bikesCards" :key="i" :bike="bike"></Bike> -->
				<Swiper
					class="md:pb-[30px]"
					:modules="modules"
					:navigation="{
						nextEl: '.catalog-arrows-next',
						prevEl: '.catalog-arrows-prev',
					}"
					:loop="true"
					:centeredSlides="true"
					:slides-per-view="'auto'"
					:grab-cursor="true"
					:space-between="24"
					:breakpoints="{
						0: {},
						769: {},
						1600: {},
					}"
				>
					<SwiperSlide
						class="max-w-[440px] xsm:max-w-full xsm:w-[340px]"
						v-for="(bike, i) in bikesCards"
						><Bike :bike="bike"></Bike
					></SwiperSlide>
				</Swiper>
			</div>
		</section>

		<section
			class="order relative z-[7] rounded-b-[70px] bg-dark-300 py-[151px] lg:pb-[71px] lg:pt-[94px] sm:pt-[50px] text-light"
		>
			<div class="container flex lg:flex-col lg:items-center lg:text-center">
				<div
					class="order-content sm:mb-[78px] max-w-[52%] lg:mb-[46px] lg:max-w-full"
				>
					<h2
						class="section-title xsm:text-[26px] order-title mb-[29px] sm:mb-[22px] lg:mb-[26px] lg:max-w-[70%] lg:mx-auto md:max-w-max"
					>
						Забронируйте байк И СЁРФ
					</h2>
					<p
						class="section-desc mb-[49px] sm:max-w-full lg:mb-[51px] sm:mb-[41px] max-w-[380px] lg:mx-auto"
					>
						Мы доставим ваш байк прямо к вилле или вы можете забрать его сами в
						нашем офисе
					</p>
					<Form class="max-w-[360px] lg:mx-auto lg:text-left">
						<CustomInput class="mb-[10px]"
							><SvgPhoneIcon></SvgPhoneIcon
						></CustomInput>
						<CustomSelect
							:isVisible="false"
							class="mb-[10px]"
							:options="bikeSelectOptions"
							:requiredSelect="true"
							><SvgBikeIcon></SvgBikeIcon>
						</CustomSelect>
						<CustomSelect
							:isVisible="false"
							class="mb-[10px]"
							:options="surfSelectOptions"
							:requiredSelect="false"
							><SvgSurfIcon></SvgSurfIcon>
						</CustomSelect>

						<OrderDatePicker class="mb-[15px]"></OrderDatePicker>
						<TheButton
							type="submit"
							class="w-[360px] gradient sm:w-full sm:max-w-full h-[70px] gap-[9px]"
						>
							<CalendarIcon></CalendarIcon>
							<span>Забронировать</span>
						</TheButton>
					</Form>
				</div>
				<OrderBike
					class="absolute lg:max-w-[80%] 2xl:z-[0] 2xl:bottom-[5%] 2xl:left-[40%] 2xl:scale-[0.85] lg:scale-100 sm:max-w-full left-[50%] lg:bottom-auto lg:relative lg:left-0"
				></OrderBike>
			</div>
		</section>
		<section
			class="service z-[6] rounded-b-[70px] md:pb-[46px] relative top-[-70px] pt-[190px] md:pt-[145px] pb-[100px] bg-light text-dark"
		>
			<div
				class="service-container mx-auto max-w-[1433px] px-[7px] md:px-[40px] xsm:px-[20px]"
			>
				<h2 class="section-title text-center mb-[79px] md:mb-[67px]">
					КОМПЛЕКСНАЯ<br />УСЛУГА АРЕНДЫ
				</h2>
				<div
					class="service-items grid grid-cols-4 xsm:grid-cols-1 md:grid-cols-2 md:gap-x-[11px] items-stretch gap-x-[50px] md:gap-y-[5px] gap-y-[39px]"
				>
					<div
						class="service-item md:flex md:px-[20px] md:flex-col md:items-center md:text-center py-[30px] md:pt-[26px] pl-[25px] rounded-[10px]"
						v-for="(service, i) in services"
						:key="i"
					>
						<div
							class="service-item-img xsm:mb-[30px] md:mb-[38px] mb-[36px] flex gap-[22px]"
						>
							<img
								:src="img"
								class="h-[44px]"
								:key="i"
								v-for="(img, i) in service.svg"
								alt=""
							/>
						</div>

						<p
							class="service-item-text md:text-[20px] xsm:text-[16px] xsm:leading-[1.2] xsm:tracking-[-0.8px] xsm:max-w-[250px] md:tracking-[-0.6px] text-[18px] md:max-w-full xl:max-w-[90%] lg:max-w-full max-w-[67%] leading-[1.3] tracking-[-0.9px] font-Helvmed text-black"
						>
							{{ service.text }}
						</p>
					</div>
				</div>
			</div>
		</section>
		<section
			class="faq z-[5] rounded-b-[70px] relative top-[-70px] pt-[120px] md:pt-[93px] xsm:pt-[79px] md:pb-[30px] xsm:pb-[10px] pb-[60px] bg-dark-300 text-light"
		>
			<div class="container mb-[63px]">
				<h2
					class="section-title text-center mb-[30px] md:mb-[26px] xsm:mb-[30px]"
				>
					Частые<br />вопросы
				</h2>
				<p class="section-desc text-center mb-[61px] xsm:mb-[50px]">
					Все что вам нужно знать о нашем сервисе!
				</p>
				<div
					class="faq-questions grid grid-cols-2 gap-x-[20px] md:grid-cols-1 md:max-w-[628px] md:w-full md:mx-auto"
				>
					<div
						class="faq-questions-col gap-y-[10px] flex flex-col md:mb-[10px]"
					>
						<FaqQuestion
							v-for="(question, i) in faqQuestions.slice(
								0,
								Math.ceil(faqQuestions.length / 2)
							)"
							:question="question"
						></FaqQuestion>
					</div>
					<div
						class="faq-questions-col gap-y-[10px] col-start-2 md:col-start-auto flex flex-col"
					>
						<FaqQuestion
							v-for="(question, i) in faqQuestions.slice(
								Math.ceil(faqQuestions.length / 2, faqQuestions.length / 2)
							)"
							:question="question"
						></FaqQuestion>
					</div>
				</div>
			</div>
		</section>
		<section
			class="invest z-[5] md:overflow-hidden rounded-[70px] md:pl-[33px] xsm:pl-[0px] rounded-b-none relative md:pt-[93px] xsm:pt-[76px] sm:pb-[303px] md:pb-[240px] bg-light pb-[110px] pt-[112px] text-dark-300"
		>
			<div class="container">
				<div
					class="invest-content max-w-[50%] md:max-w-[80%] xsm:max-w-full xsm:text-center"
				>
					<h2 class="section-title invest-title mb-[28px] xsm:mb-[27px]">
						ИНВЕСТИРУЙТЕ БЕЗ РИСКОВ
					</h2>
					<p
						class="section-desc invest-desc mb-[31px] md:mb-[28px] xsm:mb-[30px]"
					>
						В связи с политической обстановкой в мире, мы решили предложить
						инвесторам диверсификацию рисков — инвестиции в бизнес аренды
						скутеров на острове Бали.
					</p>
					<TheButton
						class="w-[328px] gradient h-[70px] md:w-[339px] gap-[9px] xsm:max-w-[340px] xsm:w-full text-light"
					>
						<SvgMoneyIcon></SvgMoneyIcon>
						<span class="text-[16px] tracking-[0.3px]"
							>Подробнее об инвестициях</span
						>
					</TheButton>
				</div>
				<div
					class="invest-img absolute bottom-0 left-[51.6%] sm:w-[96%] sm:bottom-0 md:w-[82%] xsm:left-[6.5%] md:left-[20.5%] md:bottom-[-39px]"
				>
					<img :src="'/img/invest-arrow.png'" alt="" />
				</div>
			</div>
		</section>
	</div>
</template>

<style lang="sass" scoped>
@mixin r($screenWidth)
	@media only screen and (max-width: $screenWidth + 'px')
		@content


@mixin rmin($screenWidth)
	@media only screen and (min-width: $screenWidth + 'px')
		@content

.offer
	background: linear-gradient(216.14deg, rgba(0, 0, 0, 0) 50.79%, #000000 107.31%), url('/img/offer/offer-bg.png')
	background-size: cover
	+r(991)
		background: linear-gradient(217.85deg, rgba(0, 0, 0, 0) 48.32%, #000000 84.52%), url('/img/offer/offer-bg.png') center / cover
		height: auto
	+r(769)
		min-height: 552px
		height: calc(100vh - 80px)
		display: flex
		align-items: flex-end
	&-title
		letter-spacing: -2.4px
		line-height: 0.96
		+r(991)
			line-height: 1
		+r(768)
			letter-spacing: -1.5px
			line-height: 44px
		+r(380)
			line-height: 32px
.how-block
	position: relative
	z-index: 1
	&::after
		+r(991)
			content: ""
			background-color: $light
			opacity: 0.3
			width: 2px
			position: absolute
			left: 50%
			transform: translateX(-50%)
			height: 30px
			bottom: -30px
	&:last-child
		&::after
			+r(991)
				display: none
	&:not(:nth-child(3n))
		&::before
			content: ""
			position: absolute
			top: 50%
			transform: translateY(-50%)
			background-color: $light
			height: 2px
			width: 100%
			opacity: 0.3
			right: -24px
			z-index: -1
			+r(991)
				display: none

.catalog
	position: relative
	.swiper
		+r(768)
			padding-bottom: 30px
	&::before
		content: ""
		width: 100%
		position: absolute
		left: 0
		right: 0
		height: calc(80% + 102px)
		top: -121px
		background-color: $light
		z-index: -1
		border-radius: 70px
		+r(1201)
			height: calc(100% - 100px)
		+r(991)
			top: -93px
			height: calc(100% + 93px)
		+r(600)
			top: -75px
			height: calc(100% + 50px)

.service
	&-item
		position: relative
		transition: all 0.2s ease
		&::before
			content:""
			position: absolute
			left: 0
			right: 0
			top: 0
			bottom: 0
			opacity: 0
			transition: all 0.2s ease
			box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.05)
			border-radius: 10px

		&:hover
			transform: translate(-10px, -10px)
			+r(600)
				transform: translate(0px, -10px)
			&::before
				transform: translate(-10px, -10px)
				+r(600)
					transform: translate(0px, -10px)
				opacity: 1
.partner
	&-button
		box-shadow: 0px 10px 40px rgba(48, 178, 27, 0.4)
		position: relative
		&::after, &::before
			border-radius: 12px
			border: 1px solid #30B21B
			content: ""
			position: absolute
			left: 50%
			top: 50%
			transform: translate(-50%, -50%)
		&::before
			opacity: 0.25
			width: 116%
			height: 176%
		&::after
			opacity: 0.15
			width: 133%
			height: 251%
.faq
	position: relativeq
	&::before
		content: ""
		left: 0
		right: 0
		top: -150px
		bottom: -200px
		position: absolute
		z-index: -1
		background-color: $dark300
</style>
