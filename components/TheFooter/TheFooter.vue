<template>
	<footer class="footer px-[80px] bg-dark-300 pt-[70px] pb-[37px]">
		<div class="footer-desktop grid grid-cols-4">
			<div class="footer-logo footer-col">
				<Logo class="text-[32px]"></Logo>
				<div class="footer-rights">
					Bali.GoDrive © 2022, All rights reserved.
				</div>
			</div>
			<div class="footer-col">
				<div class="footer-action cursor-pointer">
					<SvgBikeIcon fill="#30B21B"></SvgBikeIcon>
					<span>Забронировать байк</span>
				</div>
				<div class="footer-policy inline-flex align-baseline flex-col">
					<NuxtLink class="inline-block" to="/policy">Договор оферты</NuxtLink>
					<NuxtLink class="inline-block" to="/policy"
						>Политика конфиденциальности</NuxtLink
					>
				</div>
			</div>
			<div class="footer-col">
				<a href="mailto:info@godrive.bike" class="footer-action cursor-pointer">
					<SvgMailIcon fill="#30B21B"></SvgMailIcon>
					<span>info@godrive.bike</span>
				</a>
				<a
					:href="`tel:${'+62 678 345 78 88'.replace(/\s/g, '')}`"
					class="footer-action cursor-pointer"
				>
					<SvgPhoneIcon fill="#30B21B"></SvgPhoneIcon>
					<span>+62 678 345 78 88</span>
				</a>
				<div class="footer-action cursor-pointer">
					<SvgGeoIcon fill="#30B21B"></SvgGeoIcon>
					<span>Индонезия, Бали, Чангу</span>
				</div>
			</div>
			<div class="footer-col">
				<div class="footer-payments flex gap-[10px]">
					<div v-for="pay in payments" class="footer-pay">
						<img :src="pay" class="" alt="" />
					</div>
				</div>
				<div class="footer-dev flex">
					<span>Разработка сайта:</span>
					<a href="https://t.me/chelpanoff"> Челпанов Дмитрий</a>
				</div>
			</div>
		</div>
		<div class="footer-tablet"></div>
		<div class="footer-mobile"></div>
	</footer>
</template>

<script setup>
const payments = [
	"/svg/footer/visa.svg",
	"/svg/footer/master.svg",
	"/svg/footer/mir.svg",
];
</script>

<style lang="sass">
.footer
	&-logo
	&-pay
	&-dev
		color: #454546
		font-size: 16px

		a
			border-bottom: 1px solid #454546
	&-rights
		color: $light
		opacity: 0.2
	&-policy
		a
			transition: all 0.2s ease-in
			color: $light
			opacity: 0.2
			border-bottom: 1px solid transparent
			&:hover
				opacity: 1
				border-bottom: 1px solid $light
	&-action
		display: flex
		align-items: center
		svg
			margin-right: 10px
		span
			color: $light
			+eu
			text-transform: uppercase
			font-size: 16px
			white-space: nowrap
</style>
