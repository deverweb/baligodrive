<template>
	<div class="ci">
		<div
			class="z-[2] text-dark text-[16px] h-[67px] sm:h-[60px] flex items-center justify-between relative pr-[21px] pl-[50px] rounded-[12px] bg-light"
		>
			<div class="absolute left-[18px]">
				<slot></slot>
			</div>
			<Field
				placeholder="Телефон"
				class="whitespace-nowrap h-full bg-light overflow-hidden flex-grow text-ellipsis"
				type="text"
				name="phone"
			></Field>
		</div>
	</div>
</template>

<script setup>
import { Field } from "vee-validate";
</script>

<style lang="sass">
.ci
	input
		&:focus::placeholder
			color: transparent
		&::placeholder
			color: $dark
</style>
