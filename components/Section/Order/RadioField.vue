<template>
  <div class="order-radio">
    <div
      class="flex flex-wrap sm:gap-x-[20px] sm:gap-y-[17px] items-center md:gap-[28px] gap-[21px]"
    >
      <div
        :data-id="option.id"
        ref="root"
        class="order-option flex flex-col cursor-pointer"
        v-for="(option, i) in props.options"
      >
        <Field
          class="hidden"
          v-model="checked"
          :id="props.name + option.id"
          type="radio"
          :name="props.name"
          :value="option"
          @change="handleChange(option)"
        ></Field>
        <label :for="props.name + option.id" class="order-option-container">
          <div
            :class="{ 'bg-[#1B1B1B]  hover:bg-[#262626]': props.bg }"
            class="order-option-card justify-center overflow-hidden flex sm:mb-[13px] mb-[16px] rounded-[13px] sm:w-[100px] sm:h-[100px] w-[104px] h-[104px]"
          >
            <img class="h-full" :src="option.img" alt="" />
          </div>
          <div class="order-option-name font-Helvmed text-[14px] text-center">
            {{ option.name }}
          </div>
          <div
            v-if="props.showPrice"
            class="order-option-price opacity-50 font-Helvmed text-[14px] mt-[2px] text-center"
          >
            {{ option.price }}$ / день
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Field } from "vee-validate";

const props = defineProps({
  options: {
    required: true,
    type: Array,
  },
  name: {
    required: true,
    type: String,
  },

  bg: {
    required: true,
    type: Boolean,
  },
  showPrice: {
    required: true,
    type: Boolean,
  },
});

const emit = defineEmits(["bikeImgChanged"]);

const handleChange = (value) => {
  if (value.bike) {
    emit("bikeImgChanged", value);
  }
};

let checked = ref(props.options[0]);
</script>

<style lang="sass">
.order
	label
		cursor: pointer
	&-option
		&:hover
			.order-option-card,, .order-option-name
				opacity: 1
		&-card
			background-repeat: no-repeat
			background-size: 105%
			background-position: center center
			opacity: 0.5
			transition: all 0.2s ease
			img
				border-radius: 13px
				border: 2px solid transparent
		&-name
			opacity: 0.5
			transition: all 0.2s ease
		input
			&:checked
				+ label
					.order-option-card, .order-option-name
						opacity: 1
					.order-option-card
						opacity: 1
						img
							border: 2px solid $green
</style>
