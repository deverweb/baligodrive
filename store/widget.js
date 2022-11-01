export const useWidgetStore = defineStore("widget", () => {
	let visible = ref(true);

	function closeOnClick(event) {
		if (
			visible.value &&
			!event.target.closest(".wg") &&
			!event.target.closest(".wg-toggle")
		) {
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
