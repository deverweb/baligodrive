// export const useWidgetStore = defineStore("widget", {
// 	state: () => ({
// 		visible: true,
// 	}),
// });
export const useWidgetStore = defineStore("widget", () => {
	let visible = ref(true);

	function closeOnClick() {
		if (visible.value && !event.target.closest(".wg")) {
			toggleVisibility();
			window.removeEventListener("click", closeOnClick);
		}
	}

	function toggleVisibility() {
		visible.value = !visible.value;
		if (visible.value) {
			window.addEventListener("click", closeOnClick);
		}
	}
	return { visible, toggleVisibility };
});
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useWidgetStore, import.meta.hot));
}
