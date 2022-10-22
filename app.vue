<template>
	<div
		class="page-container bg-dark p-[20px] md:pt-[0px] sm:px-0 pb-[20px] sm:pb-[0px] overflow-x-hidden overflow-y-hidden"
	>
		<NuxtLayout>
			<main>
				<NuxtPage class="" />
			</main>
		</NuxtLayout>
	</div>
</template>

<script setup>
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
	window.scrollTo(0, 0);
});
</script>
