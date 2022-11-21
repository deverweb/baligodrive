<template>
  <button class="btn-primary flex items-center justify-center rounded-[12px]">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style lang="sass">

.btn-primary
	transition: all 0.2s ease
	background-color: $green
	svg, path
		transition: all 0.2s ease
	&__dark
		&:hover
			background-color: transparent
			color: $light
			border: 1px solid $light
	&__light
		&:hover
			background-color: $light
			color: $dark
			border: 1px solid $dark
			svg
				// stroke: $dark300
				fill: $dark300
				path
					// stroke: $dark300
					fill: $dark300
	&__blur
		color: $light
		border: 1px solid $green
		&:hover
			border: 1px solid $light
			background-color: rgba($green, 0)
			backdrop-filter: blur(4px)
</style>
