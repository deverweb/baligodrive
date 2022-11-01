<template>
  <div class="wg-datepicker h-full">
    <div
      @click="showDatePicker"
      class="wg-datepicker-label flex items-center h-full pr-[6px]"
    >
      <SvgCalendarIcon fill="#111111" class="mr-[10px]"></SvgCalendarIcon>
      <div class="wg-phone-label-text">
        <span class="">{{ selectedDateLabel }}</span>
      </div>
      <SvgArrowIcon
        class="ml-auto w-[10px] h-[18px] relative top-[2px]"
      ></SvgArrowIcon>
    </div>
    <Field
      class="hidden"
      :rules="validateDateField"
      name="date"
      type="text"
      v-model="dateObj"
    />
    <Transition name="fromLeft">
      <div
        v-show="!isVisible"
        class="wg-datepicker absolute left-[-100%] top-0"
      >
        <DatePickerPanel
          :active="isVisible"
          :range="range"
          @daypick="dayPick"
        ></DatePickerPanel>
      </div>
    </Transition>
    <Transition>
      <ErrorMessage
        class="text-[12px] text-red-600 font-bold"
        name="date"
      ></ErrorMessage>
    </Transition>
  </div>
</template>

<script setup>
import { ErrorMessage, Field } from "vee-validate";

let isVisible = ref(true);
let defaultLabel = ref("От какого — До какого");
let dateLabel = ref("");
let dateObj = ref(null);
let range = ref({
  start: new Date(),
  end: null,
});
let showDatePicker = () => {
  isVisible.value = !isVisible.value;
};
let dayPick = (option, option2) => {
  dateLabel.value = option;
  dateObj.value = option2;
  isVisible.value = false;
};

let selectedDateLabel = computed(() => {
  if (dateLabel.value !== "") {
    return dateLabel.value;
  } else return defaultLabel.value;
});
let validateDateField = (value) => {
  if (dateObj.value == null) return "Нужно выбрать дату";
  return true;
};
</script>

<style lang="sass">
.fromLeft-enter-active
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1)
.fromLeft-leave-active
  transition-duration: none


.fromLeft-enter-from,
.fromLeft-leave-to
  transform: translate3d(20px, 0, 0)
  opacity: 0
</style>
