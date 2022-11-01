<template>
  <div class="datepicker select-none relative z-[1] text-dark text-[16px]">
    <!-- <Calendar></Calendar> -->
    <Dropdownbtn @click="setVisible" :label="label">
      <SvgCalendarIcon fill="#111111"></SvgCalendarIcon>
    </Dropdownbtn>
    <Transition name="popin">
      <DatePickerPanel
        v-show="isVisible"
        :active="isVisible"
        @daypick="dayPick"
      ></DatePickerPanel>
    </Transition>
  </div>
</template>

<script setup>
let label = ref("От какого — До какого");
let isVisible = ref(false);

const dayPick = (data) => {
  label.value = data;
};
const setVisible = () => {
  isVisible.value = !isVisible.value;
  if (isVisible.value) {
    window.addEventListener("click", closeCSonWindowClick);
  }
};
const closeCSonWindowClick = (event) => {
  if (isVisible.value === true && !event.target.closest(".datepicker")) {
    isVisible.value = false;
    window.removeEventListener("click", closeCSonWindowClick);
  }
};

onUnmounted(() => {
  window.removeEventListener("click", closeCSonWindowClick);
});
</script>

<style lang="sass" scoped>
.datepicker
	&-panel
		left: calc(100% + 25px)
		bottom: calc(0% + -30px)
.popin-enter-active,
.popin-leave-active
	transition: opacity 0.3s ease, transform 0.3s ease


.popin-enter-from,
.popin-leave-to
	transform: translateY(-15px)
	opacity: 0
</style>
