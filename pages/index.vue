<template>
	<main class="h-[10000px]">
		<section
			style="background-image: url('./img/offer/offer-bg.png')"
			class="offer px-[80px] pb-[80px] min-h-[850px] h-screen text-white bg-dark-300 bg-center bg-no-repeat bg-cover rounded-t-[44px]"
		>
			<div class="offer-content flex items-end h-full justify-between">
				<h1
					class="offer-title font-Euroblack uppercase text-[74px] leading-none"
				>
					Аренда байков<br />и досок для<br />серфинга на Бали
				</h1>
				<div
					class="offer-service flex flex-col text-center items-center w-[292px]"
				>
					<div class="offer-text mb-[42px] w-full">
						Сервис с большим выбором серфбордов и байков с креплениями под них.
					</div>
					<TheButton class="w-full">
						<SvgCalendarIcon></SvgCalendarIcon>
						<span>Забронировать</span>
					</TheButton>
				</div>
			</div>
		</section>
		<section class="how bg-dark-300 pt-[130px] pb-[260px]">
			<div class="container">
				<h2 class="section-title text-light text-center mb-[22px]">
					Как это<br />работает?
				</h2>
				<p
					class="how-desc mb-[62px] max-w-[370px] text-light text-center mx-auto"
				>
					Мы принимаем онлайн оплату в рублях, гривнах, долларах, евро
					и криптовалюте.
				</p>
				<div class="how-blocks grid grid-cols-3 gap-[24px]">
					<div
						v-for="(action, i) in howActions"
						:key="i"
						:class="action.text ? 'py-[36px]' : 'py-[33px]'"
						class="how-block rounded-[12px] bg-light flex flex-col items-center"
					>
						<span
							class="how-block-num w-[32px] h-[32px] font-Helvbold rounded-full bg-green flex items-center justify-center text-light mb-[12px]"
							>{{ i + 1 }}</span
						>
						<div
							class="how-block-title text-dark font-Helvbold"
							:class="{ 'mb-[10px]': action.text }"
						>
							{{ action.title }}
						</div>
						<div
							v-if="action.text"
							class="how-block-text max-w-[250px] text-center text-dark"
						>
							{{ action.text }}
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="catalog z-[1] pb-[130px] bg-dark-300 text-dark">
			<div class="container">
				<h2 class="catalog-title section-title text-center mb-[22px]">
					Каталог<br />байков
				</h2>
				<p class="catalog-desc section-desc text-center mb-[62px]">
					Выберите и забронируйте байк из каталога
				</p>
				<div class="catalog-bikes bikes grid grid-cols-3 gap-[24px]">
					<Bike v-for="(bike, i) in bikesCards" :key="i" :bike="bike"></Bike>
				</div>
			</div>
		</section>
		<section
			class="order relative z-[4] rounded-b-[44px] bg-dark-300 py-[130px] text-light"
		>
			<div class="container flex">
				<div class="order-content max-w-[52%]">
					<h2 class="section-title order-title mb-[20px]">
						Забронируйте байк И СЁРФ
					</h2>
					<p class="section-desc mb-[48px] max-w-[380px]">
						Мы доставим ваш байк прямо к вилле или вы можете забрать его сами в
						нашем офисе
					</p>
					<Form class="max-w-[360px]">
						<CustomSelect
							:isVisible="false"
							class="mb-[10px]"
							:options="bikeSelectOptions"
							><SvgBikeIcon></SvgBikeIcon>
						</CustomSelect>
						<CustomSelect
							:isVisible="false"
							class="mb-[10px]"
							:options="surfSelectOptions"
							><SvgSurfIcon></SvgSurfIcon>
						</CustomSelect>
						<Dropdownbtn class="mb-[10px]" label="Куда доставить"
							><SvgMapmarkIcon></SvgMapmarkIcon
						></Dropdownbtn>
						<DatePicker></DatePicker>
					</Form>
				</div>
				<OrderBike></OrderBike>
			</div>
		</section>
		<section
			class="service rounded-b-[44px] relative top-[-70px] pt-[200px] pb-[130px] z-[3] bg-light text-dark"
		>
			<div class="service-container mx-auto max-w-[1400px] px-[7px]">
				<h2 class="section-title text-center mb-[40px]">
					КОМПЛЕКСНАЯ<br />УСЛУГА
				</h2>
				<div
					class="service-items grid grid-cols-4 items-center gap-x-[100px] gap-y-[55px]"
				>
					<div
						class="service-item py-[30px] pl-[25px] rounded-[10px]"
						v-for="(service, i) in services"
						:key="i"
					>
						<div class="service-item-img mb-[40px] flex gap-[15px]">
							<img :src="img" :key="i" v-for="(img, i) in service.svg" alt="" />
						</div>

						<p
							class="service-item-text text-[20px] laeding-[26px] font-Helvmed text-black"
						>
							{{ service.text }}
						</p>
					</div>
				</div>
			</div>
		</section>
		<section
			class="faq rounded-b-[44px] relative top-[-70px] pt-[200px] pb-[130px] z-[2] bg-dark text-light"
		>
			<div class="container">
				<h2 class="section-title text-center mb-[20px]">Частые<br />вопросы</h2>
				<p class="section-desc text-center mb-[62px]">
					Все что вам нужно знать о нашем сервисе!
				</p>
				<div class="faq-questions grid grid-cols-2 gap-x-[20px]">
					<div class="faq-questions-col gap-y-[10px] flex flex-col">
						<FaqQuestion
							v-for="(question, i) in faqQuestions.slice(
								0,
								Math.ceil(faqQuestions.length / 2)
							)"
							:question="question"
						></FaqQuestion>
					</div>
					<div class="faq-questions-col gap-y-[10px] col-start-2 flex flex-col">
						<FaqQuestion
							v-for="(question, i) in faqQuestions.slice(
								Math.ceil(faqQuestions.length / 2, faqQuestions.length / 2)
							)"
							:question="question"
						></FaqQuestion>
					</div>
					<!-- <FaqQuestion
						v-for="(question, i) in faqQuestions"
						:question="question"
					></FaqQuestion> -->
				</div>
			</div>
		</section>
		<section class="partner rounded-[44px] bg-light z-[4] py-[130px]">
			<div class="container flex items-center">
				<div class="partner-left text-dark-300">
					<h2 class="section-title">ПАРТНЕРСКАЯ<br />ПРОГРАММА</h2>
					<p class="section-desc">
						Инвестируйте в бизнес аренды скутеров на Бали с фиксированной
						доходностью от 12% годовых в долларах.
					</p>
				</div>
				<div class="partner-right">
					<TheButton class="partner-button h-[79px] w-[357px]">
						<SvgMoneyIcon></SvgMoneyIcon>
						<span>Изучить предложение</span>
					</TheButton>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import CustomSelect from "../components/CustomSelect/CustomSelect.vue";

export default {
	components: { Form, Field, ErrorMessage, CustomSelect },
	head() {
		return {
			title: "Baligodrive",
		};
	},
	setup() {
		return {
			howActions: [
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
					title: "Бронируете и оплачиваете",
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
			],
			bikesCards: [
				{
					title: "yamaha nmax 2022",
					img: "/img/offer/bike.png",
					desc: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.",
					fuel: "15л / 100км",
					priceDay: "5$",
				},
				{
					title: "yamaha nmax 2022",
					subinfo: "С креплением для сёрфа",
					img: "/img/offer/bike.png",
					desc: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.",
					fuel: "15л / 100км",
					priceDay: "5$",
				},
				{
					title: "yamaha nmax 2022",
					subinfo: "С креплением для сёрфа и сёрфбордом",
					img: "/img/offer/bike.png",
					desc: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.",
					fuel: "15л / 100км",
					priceDay: "5$",
				},
			],
			bikeSelectOptions: {
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
			},
			surfSelectOptions: {
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
				defaultValue: "Модель сёрфа",
			},
			services: [
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
			],
			faqQuestions: [
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
				{
					title: "Как долго вы доставляете байк?",
					text: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации.",
				},
			],
		};
	},
};
</script>

<style lang="sass" scoped>
.how-block
	position: relative
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
.catalog
	position: relative
	&::before
		content: ""
		width: 100%
		position: absolute
		left: 0
		right: 0
		height: calc(90% - 130px)
		top: -130px
		background-color: $light
		z-index: -1
		border-radius: 44px
.service
	&-item
		position: relative
		&::before
			content:""
			position: absolute
			left: 0
			right: 0
			top: 0
			bottom: 0
			opacity: 0
			transition: opacity 0.2s ease
			box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.05)
			border-radius: 10px

		&:hover
			&::before
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
</style>
