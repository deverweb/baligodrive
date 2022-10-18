<template>
	<div class="datepicker-panel absolute">
		<client-only>
			<DatePicker
				:min-date="new Date()"
				is-range
				v-model="range"
				color="green"
				@update:modelValue="listen"
			></DatePicker>
		</client-only>
	</div>
</template>

<script setup>
import { DatePicker } from "v-calendar";
let props = defineProps({
	isVisible: {
		required: true,
		type: Boolean,
	},
});
let range = ref({
	start: new Date(),
	end: null,
});
let count = ref(0);
let emit = defineEmits(["daypick"]);
const listen = (date) => {
	let str = "";
	str = `с ${formatDate(range.value.start)} — до ${formatDate(
		range.value.end
	)}`;

	emit("daypick", str);
};
const dayClick = (day) => {
	let str = "";
	if (count.value == 0) {
		range.value.start = day.date;
		str = `с ${formatDate(range.value.start)} — до`;
		count.value++;
	} else {
		str = `с ${formatDate(range.value.start)} — до ${formatDate(
			range.value.end
		)}`;
		count.value--;
	}
	emit("daypick", str);
};

const formatDate = (date) => {
	const yyyy = date.getFullYear();
	let mm = date.getMonth() + 1; // Months start at 0!
	let dd = date.getDate();

	if (dd < 10) dd = "0" + dd;
	if (mm < 10) mm = "0" + mm;
	return `${dd}.${mm}.${yyyy}`;
};
</script>

<style lang="sass">
:root
  --green-600: $green

.datepicker-panel
  .vc-container
    +helvr
    --green-600: #{$green}
  .vc-day-content
    width: 40px
    height: 40px
    transition: 0.2s ease all

  .vc-header
    margin-bottom: 20px
  .vc-weeks
    padding: 20px
</style>
