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
						<svg
							width="17"
							height="17"
							viewBox="0 0 17 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.4577 3.54175H12.7493V2.12508C12.7493 1.93722 12.6747 1.75705 12.5419 1.62421C12.409 1.49138 12.2289 1.41675 12.041 1.41675C11.8532 1.41675 11.673 1.49138 11.5401 1.62421C11.4073 1.75705 11.3327 1.93722 11.3327 2.12508V3.54175H5.66602V2.12508C5.66602 1.93722 5.59139 1.75705 5.45855 1.62421C5.32571 1.49138 5.14554 1.41675 4.95768 1.41675C4.76982 1.41675 4.58965 1.49138 4.45682 1.62421C4.32398 1.75705 4.24935 1.93722 4.24935 2.12508V3.54175H3.54102C2.97743 3.54175 2.43693 3.76563 2.03841 4.16415C1.6399 4.56266 1.41602 5.10316 1.41602 5.66675V6.37508H15.5827V5.66675C15.5827 5.10316 15.3588 4.56266 14.9603 4.16415C14.5618 3.76563 14.0213 3.54175 13.4577 3.54175Z"
								fill="#FBFBFD"
							/>
							<path
								d="M1.41602 13.4584C1.41602 14.022 1.6399 14.5625 2.03841 14.961C2.43693 15.3595 2.97743 15.5834 3.54102 15.5834H13.4577C14.0213 15.5834 14.5618 15.3595 14.9603 14.961C15.3588 14.5625 15.5827 14.022 15.5827 13.4584V7.79175H1.41602V13.4584Z"
								fill="#FBFBFD"
							/>
						</svg>
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
		<section class="order rounded-b-[44px] bg-dark-300 py-[130px] text-light">
			<div class="container">
				<div class="order-content max-w-[50%]">
					<h2 class="section-title order-title mb-[20px]">
						Забронируйте байк И СЁРФ
					</h2>
					<p class="section-desc mb-[48px]">
						Мы доставим ваш байк прямо к вилле или вы можете забрать его сами в
						нашем офисе
					</p>
					<Form class="max-w-[360px]">
						<CustomSelect
							:isVisible="false"
							class="mb-[10px]"
							:options="bikeSelectOptions"
							><svg
								width="17"
								height="15"
								viewBox="0 0 17 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.6866 14.4663C12.3299 14.4498 11.2435 13.3367 11.2601 11.9801C11.2767 10.6236 12.3899 9.53739 13.7466 9.55397C15.1033 9.57055 16.1897 10.6837 16.1731 12.0402C16.1565 13.3967 15.0433 14.4829 13.6866 14.4663Z"
									fill="#111111"
								/>
								<path
									d="M2.47761 14.4668C1.12091 14.4503 0.0345254 13.3371 0.0510991 11.9806C0.0676729 10.6241 1.18093 9.53788 2.53762 9.55446C3.89432 9.57104 4.9807 10.6841 4.96413 12.0407C4.94756 13.3972 3.8343 14.4834 2.47761 14.4668Z"
									fill="#111111"
								/>
								<path
									d="M7.46125 2.50795C7.31571 2.65238 7.11943 2.73414 6.91439 2.73572L5.58195 7.53324C5.34156 8.39818 5.55672 9.33418 6.17396 9.98628C6.17396 9.98628 6.96685 10.8406 8.15386 10.8419C8.52836 10.8393 8.8866 10.6886 9.15042 10.4228C9.41423 10.157 9.56219 9.79766 9.56201 9.42316C9.56208 8.90479 9.50417 8.38803 9.38935 7.88253C9.24127 7.30248 9.14465 7.11322 8.96701 6.74931C8.38728 6.66996 8.16349 5.81697 8.59215 5.12236C9.04172 4.39189 10.0272 4.30822 11.2152 4.72392C12.4032 5.13963 13.5132 4.9155 15.0472 4.6532C16.5895 4.38957 16.8308 6.75595 15.7169 6.75595H15.0435C15.8396 7.22999 16.4864 7.91838 16.9099 8.7425C16.9584 8.83584 16.988 8.93782 16.997 9.04262C17.0061 9.14742 16.9944 9.25297 16.9626 9.35325C16.9309 9.45353 16.8797 9.54657 16.8119 9.62704C16.7442 9.70752 16.6613 9.77385 16.5679 9.82226C16.4787 9.86705 16.3779 9.88297 16.2793 9.8678C16.1807 9.85262 16.0892 9.80712 16.0177 9.73759C15.6472 9.3609 15.1894 9.08157 14.6849 8.92445C14.3705 8.83038 14.0445 8.78054 13.7164 8.77636C12.8591 8.77733 12.0372 9.11834 11.431 9.72457C10.8249 10.3308 10.4839 11.1527 10.4831 12.01C10.4831 12.0764 10.4851 12.1434 10.489 12.2109C10.4905 12.2336 10.4873 12.2563 10.4796 12.2777C10.4719 12.2991 10.4599 12.3187 10.4443 12.3352C10.4288 12.3518 10.41 12.365 10.3891 12.374C10.3682 12.383 10.3458 12.3876 10.323 12.3875H6.57107C6.35791 12.3815 6.15404 12.299 5.9967 12.1551C5.83935 12.0111 5.73905 11.8154 5.7141 11.6036C5.63617 10.9896 5.38371 10.4108 4.98668 9.93599C4.58966 9.46115 4.06474 9.1102 3.47422 8.92478C3.15981 8.83072 2.83383 8.78088 2.50568 8.7767C1.7589 8.77604 1.03513 9.0351 0.458378 9.50949C0.223299 9.7024 -0.110392 9.43113 0.0340405 9.16351L0.0380249 9.15654C0.517719 8.30577 1.24628 7.62216 2.12584 7.19755C2.25168 7.13646 2.37918 7.08168 2.50734 7.03154C2.55051 4.81091 5.12806 2.73671 5.12806 2.73671C4.43578 2.77722 4.41154 2.08793 4.41154 2.08793C4.36904 1.2522 4.93482 0.582496 5.71543 0.536676C5.91205 0.526477 6.10698 0.577646 6.27324 0.683101L6.7248 0.966656C6.87597 1.06403 7.03554 1.14771 7.2016 1.21668C7.31589 1.26291 7.41774 1.33529 7.49899 1.42801C7.58024 1.52073 7.63861 1.63121 7.66943 1.75058C7.66943 1.75058 7.87761 1.81234 7.95398 1.88339C8.00799 1.92955 8.0475 1.99034 8.06774 2.05844C8.08798 2.12654 8.08808 2.19905 8.06804 2.26721C8.048 2.33537 8.00867 2.39627 7.95479 2.44258C7.90091 2.48889 7.83479 2.51863 7.76439 2.5282C7.76439 2.5282 7.65814 2.54613 7.46125 2.50795Z"
									fill="#111111"
								/>
							</svg>
						</CustomSelect>
						<CustomSelect
							:isVisible="false"
							class="mb-[10px]"
							:options="surfSelectOptions"
						>
							<svg width="17" height="17" viewBox="0 0 17 17" fill="none">
								<path
									d="M5.89688 5.89688C1.75313 9.9875 1.0625 15.9375 1.0625 15.9375C1.0625 15.9375 7.0125 15.2469 11.1031 11.1031C15.1937 6.95937 15.9375 1.0625 15.9375 1.0625C15.9375 1.0625 9.9875 1.75313 5.89688 5.89688Z"
									stroke="black"
									stroke-width="2"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M5.84375 5.89697V7.49072C5.84375 8.44697 6.32187 9.3501 7.17188 9.82822C8.02188 10.3063 8.5 11.2095 8.5 12.1657V13.1751"
									stroke="black"
									stroke-width="2"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M8.5 3.77197V5.84385C8.5 6.8001 8.97812 7.70322 9.82812 8.18135C10.6781 8.65947 11.1562 9.5626 11.1562 10.5188V11.0501"
									stroke="black"
									stroke-width="2"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</CustomSelect>
					</Form>
				</div>
			</div>
			<div class="order-bike"></div>
		</section>
	</main>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import CustomSelect from "../components/CustomSelect/CustomSelect.vue";

export default {
	components: { Form, Field, ErrorMessage, CustomSelect },
	setup() {
		// let changeIsVisible = () => {};
		// onMounted(() => {
		// 	window.addEventListener("click", function (event) {});
		// });

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
		};
	},
	// methods: {
	// 	select(option) {
	// 		console.log(option);
	// 	},
	// },
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
</style>
