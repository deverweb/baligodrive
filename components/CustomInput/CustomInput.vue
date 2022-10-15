<template>
	<div class="ci">
		<div
			class="z-[2] text-dark text-[16px] flex items-center justify-between relative sm:pt-[17px] sm:pb-[19px] pt-[23px] pb-[20px] pr-[21px] pl-[50px] rounded-[12px] bg-light"
		>
			<div class="absolute left-[18px]">
				<slot></slot>
			</div>
			<Field
				placeholder="Телефон"
				class="whitespace-nowrap bg-light overflow-hidden flex-grow text-ellipsis"
				type="text"
				name="phone"
			></Field>
		</div>
	</div>
</template>

<script setup>
import { Field } from "vee-validate";
</script>

<style lang="sass"></style>
