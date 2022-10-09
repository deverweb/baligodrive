import { defineStore } from "pinia";
export const useNavStore = defineStore("nav", {
	state: () => ({
		links: [
			{
				anchor: "/",
				label: "Главная",
			},
			{
				anchor: "/",
				label: "Главная",
			},
			{
				anchor: "/",
				label: "Главная",
			},
			{
				anchor: "/",
				label: "Главная",
			},
			{
				anchor: "/",
				label: "Главная",
			},
		],
	}),
});
