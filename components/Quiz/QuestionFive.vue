<template>
	<div class="quiz-question">
		<div
			class="quiz-question-title mb-[38px] pl-[2px] flex items-center text-light"
		>
			<div
				class="quiz-question-title-number mr-[30px] relative font-Helvbold text-[14px] bg-green rounded-full w-[32px] h-[32px]"
			>
				<span
					class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
					>4.1</span
				>
			</div>
			<div class="quiz-question-title-label text-[18px] font-Helvmed">
				Подтвердите вашу личность
			</div>
		</div>
		<div class="quiz-question-inner">
			<div
				class="quiz-question-label text-light opacity-50 text-[14px] mb-[10px] font-Helvmed"
			>
				Выберите период аренды
			</div>
			<label
				for="passport"
				class="quiz-question-file w-full pl-[26px] pr-[30px] flex items-center cursor-pointer rounded-[12px] border-[#69696A] border-[1px] border-solid h-[67px]"
			>
				<SvgFileIcon class="mr-[10px]"></SvgFileIcon>
				<span class="text-[16px] text-light">{{ useCurrentLabel }}</span>
				<input
					type="file"
					@change="handleFiles"
					class="hidden"
					name="passport"
					id="passport"
				/>
				<SvgDownloadIcon class="ml-auto"></SvgDownloadIcon>
			</label>
		</div>
	</div>
</template>

<script setup>
let currentLabel = ref("");

const handleFiles = (event) => {
	currentLabel.value = event.target.files[0].name;
	console.log(event.target.files[0]);
};

let useCurrentLabel = computed(() => {
	if (currentLabel.value == "") {
		return "Загрузите фото загранпаспорта";
	} else return currentLabel.value;
});
</script>

<style lang="sass"></style>
