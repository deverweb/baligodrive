<template>
  <div
    class="bike bg-light xsm:h-[600px] h-[750px] xsm:px-[31px] xsm:pr-[30px] xsm:pb-[31px] pb-[39px] pt-[33px] xsm:pt-[25px] px-[40px] rounded-[26px] xsm:rounded-[20px] flex flex-col lg:max-w-[440px] lg:mx-auto"
  >
    <div
      class="bike-title xsm:tracking-[-0.2px] lil:text-[18px] font-Helvbold uppercase text-[28px] xsm:text-[22px]"
    >
      {{ props.bikeName }}
    </div>

    <div
      class="bike-img mt-auto mb-[82px] h-[300px] md:h-[280px] xsm:h-[260px] xsm:mb-[63px]"
    >
      <img
        class="object-contain mx-auto max-w-full ml-[-5px]"
        :src="props.imgSrc"
        alt=""
      />
    </div>
    <div class="bike-desc">
      <div
        class="bike-desc__text text-[16px] xsm:tracking-[0.2px] text-dark xsm:text-[12px] xsm:leading-[16px] leading-[20px] xsm:mb-[18px] mb-[26px]"
      >
        В 2022 году Yamaha выпустила этот мотоцикл на рынок, сделав его желанным
        для многих.
      </div>
    </div>
    <div
      class="bike-price flex items-end font-Helvbold justify-between mb-[26px] xsm:mb-[21px]"
    >
      <div class="bike-price__fuel text-[18px] xsm:text-[14px] lil:text-[10px]">
        Стоимость аренды:
      </div>
      <div
        class="bike-price__value text-[18px] xsm:text-[14px] lil:text-[10px]"
      >
        от {{ props.price }}$ / день
      </div>
    </div>
    <div class="bike-bottom flex items-center justify-between">
      <TheButton
        class="h-[70px] btn-primary btn-primary__light white xsm:text-[12px] lil:mr-[8px] lil:text-[10px] lil:gap-[6px] xsm:h-[54px] xsm:w-full xsm:mr-[25px] gap-[11px] w-[250px] px-0 py-0 text-[16px] font-Helvmed text-light"
      >
        <SvgCalendarIcon
          class="flex-shrink-0 w-[19px] xsm:w-[13px]"
        ></SvgCalendarIcon>
        <span class="xsm:tracking-[-0.2px] xsm:top-0 relative top-[1px]"
          >Забронировать</span
        >
      </TheButton>
      <button
        class="bike-detailed font-Helvmed text-center text-[14px] xsm:text-[10px] xsm:tracking-[0.6px]"
      >
        Подробнее
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  bikeName: String,
  imgSrc: String,
  price: String,
  description: String,
});
</script>

<style lang="sass">
@mixin r($screenWidth)
	@media only screen and (max-width: $screenWidth + 'px')
		@content


@mixin rmin($screenWidth)
	@media only screen and (min-width: $screenWidth + 'px')
		@content

.bike
	box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.07)
	+r(600)
		box-shadow: 0px 3.86364px 30.9091px rgba(0, 0, 0, 0.07)

	&-detailed
		position: relative
		color: #AAAAAA
		&::before
			position: absolute
			content: ""
			bottom: -5px
			left: 0
			right: 0
			height: 1px
			background-color: #AAAAAA
			+r(600)
				bottom: -7px
</style>
