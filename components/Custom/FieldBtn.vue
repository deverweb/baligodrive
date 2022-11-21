<template>
  <div class="field-btn" :class="computedClass">
    <div class="field-btn-icon">
      <slot></slot>
    </div>
    <div class="field-btn-text">
      {{ props.label }}
    </div>
    <SvgInputFile v-if="props.fileInput"></SvgInputFile>
    <SvgArrowIcon class="transition field-btn-arrow" :class="{ 'rotate-180': props.active }" v-else></SvgArrowIcon>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  active: Boolean,
  fileInput: Boolean,
  styleType: String,
})

const computedClass = computed(() => {
  return {
    "index-form": props.styleType == "index-form",
    "order-form": props.styleType == "order-form",
  }
})
</script>

<style lang="sass">
.field-btn
	user-select: none
	&.order-form
		z-index: 3
		color: $light
		font-size: 16px
		display: flex
		align-items: center
		cursor: pointer
		justify-content: space-between
		position: relative
		background-color: #202020
		padding: 0px 29px 0px 57px
		height: 67px
		border: 1px solid rgba(#fbfbfd, 0.3)
		border-radius: 12px
		+r(768)
			padding-top: 17px
			padding-bottom: 19px
		.field-btn-icon
			position: absolute
			left: 22px
		.field-btn-text
			white-space: nowrap
			overflow: hidden
			text-overflow: ellipsis
		.field-btn-arrow
			height: 11px
			width: 11px
			path
				stroke: $light
	&.index-form
		z-index: 2
		color: $dark
		font-size: 16px
		display: flex
		align-items: center
		cursor: pointer
		justify-content: space-between
		position: relative
		background-color: $light
		padding: 23px 21px 20px 50px
		border-radius: 12px
		+r(768)
			padding-top: 17px
			padding-bottom: 19px
		.field-btn-icon
			position: absolute
			left: 18px
		.field-btn-text
			white-space: nowrap
			overflow: hidden
			text-overflow: ellipsis
</style>
