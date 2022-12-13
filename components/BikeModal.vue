<template>
  <Transition name="bmodal">
    <div
      :class="{ 'z-[1000]': globalStore.activeBikeModal }"
      class="bmodal text-[#111111]"
      v-show="globalStore.activeBikeModal"
      v-if="globalStore.activeBikeModal"
      @click="handleOutsideClick"
    >
      <div class="bmodal-window relative flex justify-between md:flex-col">
        <div
          class="bmodal-top h-[57px] hidden xsm:flex justify-between items-center"
        >
          <div
            class="text-dark tracking-[-0.6px] uppercase font-Euroblack text-[20px]"
          >
            <span class="text-green">BALI.</span>GODRIVE
          </div>
          <button
            class="bmodal-close"
            @click="globalStore.activeBikeModal = false"
          >
            <SvgCloseIcon
              class="w-[20px] h-[20px]"
              fill="#000000"
            ></SvgCloseIcon>
          </button>
        </div>
        <button
          class="bmodal-close xsm:hidden"
          @click="globalStore.activeBikeModal = false"
        >
          <SvgCloseIcon class="w-[20px] h-[20px]" fill="#000000"></SvgCloseIcon>
        </button>
        <div class="bmodal-left">
          <div class="bmodal-title xsm:order-1 hidden md:block text-center">
            {{ bike?.model }}
          </div>
          <div class="bmodal-price xsm:order-2 hidden md:block text-center">
            (от {{ bike?.hourPriceUsd }}$ / день)
          </div>
          <div class="bmodal-img xsm:order-3">
            <img
              :src="bikeImg"
              class="max-w-[90%] h-[450px] xsm:h-full"
              alt=""
            />
          </div>
          <div
            class="bmodal-paint xsm:mb-[56px] xsm:order-4 hidden md:flex mb-[31px]"
          >
            <SectionOrderRadioField
              @bikeImgChanged="handleRadioChange"
              type="bmodal"
              :showPrice="false"
              :bg="false"
              :name="'bikeValue'"
              :options="bike?.bikes"
            ></SectionOrderRadioField>
          </div>
          <p
            class="bmodal-description xsm:order-6 xsm:mb-[37px] mb-[45px] xsm:text-[14px] hidden md:flex flex-grow text-[16px] xsm:leading-[143%] leading-[125%]"
          >
            Honda Vario 160 - Этот байк подходит для тех, кто хочет что-то
            маневренное и динамичное. Он будет комфортен для перемещения по
            городу и в то же время достаточно лёгкий в управлении и резвый для
            совершения обгона на трассе. Диодная оптика и комбинированные
            тормоза выделяют этот байк на фоне других моделей данного класса.
            Байк оснащен багажником 18л, в который свободно влезает мотошлем.
          </p>
          <ul class="bmodal-list xsm:order-5 xsm:mb-[57px] md:mb-[43px]">
            <li>
              <span>Год выпуска:</span>
              <span>2020</span>
            </li>
            <li>
              <span>Объем багажника:</span>
              <span>18 литров</span>
            </li>
            <li>
              <span>Мощность:</span>
              <span>11,1 л.с</span>
            </li>
            <li>
              <span>Объем топливного бака:</span>
              <span>5,5 литров</span>
            </li>
            <li>
              <span>Средний расход:</span>
              <span>2,3 литра / 100 км</span>
            </li>
          </ul>
        </div>
        <div class="bmodal-right flex flex-col">
          <div class="bmodal-title text-[#181818] md:hidden">
            {{ bike?.model }}
          </div>
          <div class="bmodal-price md:hidden">
            (от {{ bike?.hourPriceUsd }}$ / день)
          </div>
          <div class="bmodal-paint md:hidden mb-[31px]">
            <SectionOrderRadioField
              @bikeImgChanged="handleRadioChange"
              type="bmodal"
              :showPrice="false"
              :bg="false"
              :name="'bikeValue'"
              :options="bike?.bikes"
            ></SectionOrderRadioField>
          </div>
          <p
            class="bmodal-description md:hidden flex-grow text-[16px] leading-[125%]"
          >
            Honda Vario 160 - Этот байк подходит для тех, кто хочет что-то
            маневренное и динамичное. Он будет комфортен для перемещения по
            городу и в то же время достаточно лёгкий в управлении и резвый для
            совершения обгона на трассе. Диодная оптика и комбинированные
            тормоза выделяют этот байк на фоне других моделей данного класса.
            Байк оснащен багажником 18л, в который свободно влезает мотошлем.
          </p>
          <div class="bmodal-bottom xsm:flex-col flex gap-[26px] md:gap-[32px]">
            <TheButton
              @click="handleBron"
              class="btn-primary__light xsm:mb-[8px] self-end xsm:w-full gap-[11px] shrink-0 text-light hover:text-dark w-[250px] h-[70px]"
              ><SvgCalendarIcon class="w-[13px] h-[13px]"></SvgCalendarIcon>
              <span class="text-[16px]">Забронировать</span>
            </TheButton>
            <div class="bmodal-after text-[14px]">
              <span class="font-Helvbold"
                >В стоимость аренды также входят:</span
              >
              <p class="font-Helvmed">
                полная страховка от повреждений и угона, шлемы, дождевик,
                аптечка, держатель для телефона.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div></Transition
  >
</template>

<script setup>
import { useCommercialStore } from "~~/store/commercial";
import { useGlobalStore } from "~~/store/global";
import { useIndexFormStore } from "~~/store/indexform";

let commercialStore = useCommercialStore();
let globalStore = useGlobalStore();
let indexForm = useIndexFormStore();
// globalStore.activeBikeModal = true;

// let bike = ref({});
// bike.value.bikes = [];
// bike.value.hourPriceUsd = 0;
// bike.value.model = "";

const handleOutsideClick = (event) => {
  if (!event.target.closest(".bmodal-window")) {
    globalStore.activeBikeModal = false;
  } else return;
};
let img = ref("");
const handleRadioChange = (value) => {
  img.value = value.img;
  // console.log(bike.value);
  // console.log("handle change");
};

const handleBron = () => {
  globalStore.activeBikeModal = false;
  indexForm.changeSelectedOption(bike.value);
  document.querySelector(".order ").scrollIntoView({ behavior: "smooth" });
};

let bikeImg = computed(() => {
  if (!bike) return "";
  if (!img.value) return bike.value.img;
  return img.value;
});

let bike = computed(() => {
  return {
    ...commercialStore.bikeModelsArray.find(
      (val) => val.id == globalStore.activeBikeId
    ),
  };
});

watch(
  () => globalStore.activeBikeModal,
  () => {
    if (globalStore.activeBikeModal) {
      document.body.classList.add("active-bmodal");
    } else {
      document.body.classList.remove("active-bmodal");
      img.value = "";
    }
  }
);
</script>

<style lang="sass">
.bmodal
	position: fixed
	display: grid
	place-items: center
	top: 0
	left: 0
	right: 0
	bottom: 0
	min-height: 100vh
	overflow-x: hidden
	overflow-y: auto
	background: rgba(black, 0.7)
	padding: 127px
	+r(1600)
		padding: 80px
	+r(1440)
		padding: 50px
	+r(990)
		padding: 20px
	+r(600)
		padding: 0
	&-top
		border-bottom: 1px solid rgba(#333333, 0.2)
		padding-left: 25px
		padding-right: 39px
		padding-top: 3px
		background: white
		position: fixed
		top: 0
		left: 0
		right: 0

	&-left
		width: 44.2%
		display: flex
		flex-direction: column
		+r(990)
			width: 100%
		+r(600)
			padding-left: 25px
			padding-right: 25px
			padding-top: 25px
	&-right
		width: 50%
		padding-top: 4px
		+r(990)
			width: 100%
		+r(600)
			padding-left: 25px
			padding-right: 25px
	&-enter-active, &-leave-active
		transition: all 0.2s ease
		.bmodal
			transition: all 0.2s ease
			&-window
				transition: all 0.2s ease
	&-enter-from, &-leave-to
		opacity: 0


	&-list
		display: flex
		flex-direction: column
		row-gap: 8px
		li
			display: flex
			align-items: baseline
			white-space: nowrap
			justify-content: space-between
			color: #111111
			+helvm
			font-size: 14px
	&-window
		box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.07)
		border-radius: 26px
		background-color: white
		padding: 60px
		min-height: 740px
		+r(1440)
			padding: 40px
		+r(990)
			min-height: initial
			padding: 50px
			padding-top: 55px
		+r(600)
			border-radius: 0px
			padding: 0
			padding-top: 58px
			padding-bottom: 30px

	&-img
		display: flex
		flex-grow: 1
		justify-content: center
		margin-bottom: 5px
		+r(990)
			height: 490px
		+r(600)
			height: 326px
		img
			object-fit: contain
	&-title
		+helvb
		font-size: 28px
		text-transform: uppercase
		margin-bottom: 3px
		+r(600)
			margin-bottom: -2px
	&-price
		+helvb
		margin-bottom: 36px
		letter-spacing: 0.1px
	&-close
		position: absolute
		right: 40px
		top: 40px
		+r(990)
			right: 49px
			top: 48px
		+r(600)
			position: static
</style>
