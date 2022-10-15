<template>
	<button
		class="button-primary z-[1] rounded-[12px] flex items-center justify-center text-center"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.button-primary
	border-width: 1px
	border-style: solid
	border-color: rgba(255,255,255, 0)
	position: relative
	transition: all 0.2s linear
	background-color: $green
	&.gradient
		transition: all 0.3s ease
		border: none
		background-size: 200% 100%
		background-position: 50% 0
		// background-image: linear-gradient(92.17deg, #3AD720 0%, #239810 97.4%, #229610 100%)
		background-image: linear-gradient(92.17deg, #3AD720 1%, #239810 52.4%, #229610 100%)

		background-repeat: no-repeat
		&:hover
			background-position: 0% 0
	&.blured
		background: none
		&:hover

			border-color: rgba(white, 1)
			border: 1px solid white
			&::before
				backdrop-filter: blur(4px)
			&::after
				opacity: 0
		&::after, &::before
			content: ""
			width: 100%
			height: 100%
			position: absolute
			top: 0
			left: 0
			z-index: -1
		&::after
			background-color: $green
			opacity: 1
			transition: all 0.2s ease
			border-radius: 12px
		&::before
			transition: all 0.2 ease
			border-radius: 12px
			backdrop-filter: blur(0px)
</style>
