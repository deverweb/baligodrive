<template>
	<div v-show="isVisible" class="datepicker-panel absolute">
		<client-only>
			<DatePicker
				:min-date="new Date()"
				is-range
				@input="console.log('input')"
				@dayclick="listenClick"
				v-model="range"
			></DatePicker>
		</client-only>
	</div>
</template>

<script setup>
let label = ref("От какого — До какого");
let isVisible = ref(false);
let range = ref({
	start: new Date(),
	end: null,
});

const setVisible = () => {
	isVisible.value = !isVisible.value;
	if (isVisible.value) window.addEventListener("click", closeCSonWindowClick);
};
const listenClick = (day) => {
	if (!range.value.end) {
		range.value.start = day.date;
	}

	label.value = `с ${formatDate(range.value.start)} — до ${
		range.value.end ? formatDate(range.value.end) : ""
	}`;
};

const formatDate = (date) => {
	const yyyy = date.getFullYear();
	let mm = date.getMonth() + 1; // Months start at 0!
	let dd = date.getDate();

	if (dd < 10) dd = "0" + dd;
	if (mm < 10) mm = "0" + mm;
	return `${dd}.${mm}.${yyyy}`;
};
let selectDate = () => {
	isVisible.value = false;
	window.removeEventListener("click", closeCSonWindowClick);
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

<style lang="sass"></style>
