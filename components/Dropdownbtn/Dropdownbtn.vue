<template>
	<div
		class="z-[2] text-dark text-[16px] flex items-center cursor-pointer justify-between relative sm:pt-[17px] sm:pb-[19px] pt-[23px] pb-[20px] pr-[21px] pl-[50px] rounded-[12px] bg-light"
	>
		<div class="absolute left-[18px]">
			<slot></slot>
		</div>
		<div class="whitespace-nowrap overflow-hidden text-ellipsis">
			{{ label }}
		</div>
		<div>
			<SvgArrowIcon
				class="transition"
				:class="{ 'rotate-180': active }"
			></SvgArrowIcon>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			required: true,
			type: String,
		},
		active: {
			required: false,
			type: Boolean,
		},
	},
};
</script>

<style lang="sass"></style>
