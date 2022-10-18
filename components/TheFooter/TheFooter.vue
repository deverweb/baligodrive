<template>
	<footer
		class="footer px-[80px] lg:pt-[58px] sm:pt-[68px] lg:px-[48px] sm:px-[25px] 2xl:px-[40px] bg-dark-300 pt-[70px] sm:pb-[41px] pb-[46px]"
	>
		<div class="footer-desktop grid grid-cols-4 lg:hidden">
			<div class="footer-col pt-[4px]">
				<Logo class="text-[32px] tracking-[-1px] mb-[43px]"></Logo>
				<div class="footer-rights">
					Bali.GoDrive © 2022, All rights reserved.
				</div>
			</div>
			<div class="footer-col pl-[23px] pt-[11px]">
				<div
					@click="toggleVisibility"
					class="footer-action cursor-pointer mb-[24px] text-light"
				>
					<SvgBikeIcon
						fill="#30B21B"
						class="w-[19px] h-[19px] relative top-[-1px] mr-[10px]"
					></SvgBikeIcon>
					<span class="tracking-[-0.5px]">Забронировать байк</span>
				</div>
				<div
					class="footer-policy inline-flex text-[16px] items-baseline flex-col"
				>
					<NuxtLink class="inline-block mb-[12px] font-Helvreg" to="/policy"
						>Договор оферты</NuxtLink
					>
					<NuxtLink class="inline-block" to="/policy"
						>Политика конфиденциальности</NuxtLink
					>
				</div>
			</div>
			<div class="footer-col pl-[30px] pt-[11px]">
				<a
					href="mailto:info@godrive.bike"
					class="footer-action mb-[17px] cursor-pointer"
				>
					<SvgMailIcon class="mr-[15px]" fill="#30B21B"></SvgMailIcon>
					<span>info@godrive.bike</span>
				</a>
				<a
					:href="`tel:${'+62 678 345 78 88'.replace(/\s/g, '')}`"
					class="footer-action mb-[17px] cursor-pointer"
				>
					<SvgPhoneIcon
						class="mr-[15px] w-[12px] h-[12px]"
						fill="#30B21B"
					></SvgPhoneIcon>
					<span>+62 678 345 78 88</span>
				</a>
				<div class="footer-action">
					<SvgGeoIcon
						class="mr-[15px] w-[12px] h-[12px]"
						fill="#30B21B"
					></SvgGeoIcon>
					<span>Индонезия, Бали, Чангу</span>
				</div>
			</div>
			<div class="footer-col items-end">
				<div class="footer-payments flex gap-[10px] mb-[37px]">
					<div v-for="pay in payments" class="footer-pay shrink-0">
						<img :src="pay" class="" alt="" />
					</div>
				</div>
				<div class="footer-dev flex">
					<span class="mr-[5px]">Разработка сайта:</span>
					<a href="https://t.me/chelpanoff"> Челпанов Дмитрий</a>
				</div>
			</div>
		</div>
		<div class="footer-tablet hidden lg:grid-cols-2 lg:grid sm:hidden">
			<div class="footer-col">
				<Logo class="text-[28px] tracking-[-0.9px] mb-[33px]"></Logo>
				<div class="footer-col-container">
					<div
						class="footer-policy mb-[16px] inline-flex text-[16px] items-baseline flex-col"
					>
						<NuxtLink class="inline-block mb-[15px] font-Helvreg" to="/policy"
							>Договор оферты</NuxtLink
						>
						<NuxtLink class="inline-block" to="/policy"
							>Политика конфиденциальности</NuxtLink
						>
					</div>
					<div class="footer-dev mb-[14px] flex">
						<span class="mr-[5px]">Разработка сайта:</span>
						<a href="https://t.me/chelpanoff"> Челпанов Дмитрий</a>
					</div>
					<div class="footer-rights">
						Bali.GoDrive © 2022, All rights reserved.
					</div>
				</div>
			</div>
			<div class="footer-col pt-[6px] pl-[13px]">
				<a
					href="mailto:info@godrive.bike"
					class="footer-action mb-[19px] cursor-pointer"
				>
					<SvgMailIcon class="mr-[15px]" fill="#30B21B"></SvgMailIcon>
					<span>info@godrive.bike</span>
				</a>
				<a
					:href="`tel:${'+62 678 345 78 88'.replace(/\s/g, '')}`"
					class="footer-action mb-[19px] cursor-pointer"
				>
					<SvgPhoneIcon
						class="mr-[15px] w-[12px] h-[12px]"
						fill="#30B21B"
					></SvgPhoneIcon>
					<span>+62 678 345 78 88</span>
				</a>
				<div class="footer-action">
					<SvgGeoIcon
						class="mr-[13px] w-[12px] h-[12px]"
						fill="#30B21B"
					></SvgGeoIcon>
					<span>Индонезия, Бали, Чангу</span>
				</div>
				<div class="footer-payments flex gap-[8px] mt-[53px]">
					<div v-for="pay in payments" class="footer-pay shrink-0">
						<img :src="pay" class="max-w-[95px]" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="footer-mobile hidden sm:grid">
			<Logo class="text-[28px] tracking-[-0.9px] mb-[40px]"></Logo>
			<a
				href="mailto:info@godrive.bike"
				class="footer-action mb-[19px] cursor-pointer"
			>
				<SvgMailIcon class="mr-[15px]" fill="#30B21B"></SvgMailIcon>
				<span>info@godrive.bike</span>
			</a>
			<a
				:href="`tel:${'+62 678 345 78 88'.replace(/\s/g, '')}`"
				class="footer-action mb-[19px] cursor-pointer"
			>
				<SvgPhoneIcon
					class="mr-[15px] w-[12px] h-[12px]"
					fill="#30B21B"
				></SvgPhoneIcon>
				<span>+62 678 345 78 88</span>
			</a>
			<div class="footer-action mb-[46px]">
				<SvgGeoIcon
					class="mr-[13px] w-[12px] h-[12px]"
					fill="#30B21B"
				></SvgGeoIcon>
				<span>Индонезия, Бали, Чангу</span>
			</div>
			<div
				class="footer-policy mb-[16px] inline-flex text-[16px] items-baseline flex-col"
			>
				<NuxtLink class="inline-block mb-[15px] font-Helvreg" to="/policy"
					>Договор оферты</NuxtLink
				>
				<NuxtLink class="inline-block" to="/policy"
					>Политика конфиденциальности</NuxtLink
				>
			</div>
			<div class="footer-dev mb-[14px] flex">
				<span class="mr-[5px]">Разработка сайта:</span>
				<a href="https://t.me/chelpanoff"> Челпанов Дмитрий</a>
			</div>
			<div class="footer-rights">Bali.GoDrive © 2022, All rights reserved.</div>
			<div class="footer-payments flex gap-[8px] mt-[37px]">
				<div v-for="pay in payments" class="footer-pay">
					<img :src="pay" class="max-w-[100%]" alt="" />
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { useWidgetStore } from "~~/store/widget";

const payments = [
	"/svg/footer/visa.svg",
	"/svg/footer/master.svg",
	"/svg/footer/mir.svg",
];

const store = useWidgetStore();

const { toggleVisibility } = store;
</script>

<style lang="sass">
@mixin r($screenWidth)
	@media only screen and (max-width: $screenWidth + 'px')
		@content


@mixin rmin($screenWidth)
	@media only screen and (min-width: $screenWidth + 'px')
		@content

.footer
	&-desktop
		+r(1660)
			zoom: 0.8
		+r(1440)
			zoom: 0.7
		+r(1200)
			zoom: 1
	&-col
		display: flex
		flex-direction: column
		svg
			flex-shrink: 0
	&-dev
		color: #454546
		font-size: 16px
		+r(1200)
			font-size: 14px
		a
			position: relative
			transition: color 0.2s ease
			&:hover
				color: $light
				&::before
					background-color: $light
			&::before
				content: ""
				width: 100%
				position: absolute
				width: 100%
				bottom: 3px
				height: 1px
				background-color: #454546
				transition: 0.2s ease all
	&-rights
		color: #454546
		font-size: 16px
		+r(1200)
			font-size: 14px
	&-policy
		a
			transition: all 0.2s ease-in
			color: #454546
			position: relative
			+r(1200)
				font-size: 14px
			&:hover
				color: $light
				&::before
					opacity: 1
			&::before
				content: ""
				width: 100%
				position: absolute
				width: 100%
				bottom: 3px
				height: 1px
				opacity: 0
				background-color: $light
				transition: 0.2s ease all
	&-action
		display: flex
		align-items: center

		span
			color: $light
			+eu
			text-transform: uppercase
			font-size: 16px
			white-space: nowrap
			letter-spacing: -0.5px
			+r(1200)
				font-size: 14px
</style>
