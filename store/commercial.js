export const useCommercialStore = defineStore("commercial", () => {
	let commercialData = ref({
		bikes: [
			{
				id: 1,
				name: "Байк номер 1",
				hourPriceUsd: 5,
				imgSrc: "/img/offer/bike.png",
			},
			{
				id: 2,
				name: "Байк номер 2",
				hourPriceUsd: 4,
				imgSrc: "/img/offer/bike.png",
			},
			{
				id: 3,
				name: "Байк номер 3",
				hourPriceUsd: 7,
				imgSrc: "/img/offer/bike.png",
			},
			{
				id: 4,
				name: "Байк номер 4",
				hourPriceUsd: 7,
				imgSrc: "/img/offer/bike.png",
			},
			{
				id: 5,
				name: "Байк номер 5",
				hourPriceUsd: 6,
				imgSrc: "/img/offer/bike.png",
			},
		],
		surfBoards: [
			{
				id: 0,

				name: "Без сёрфа",
				hourPriceUsd: 6,
				// imgSrc: "/img/offer/bike.png",
			},
			{
				id: 1,

				name: "Серф номер 1",
				hourPriceUsd: 6,
				// imgSrc: "/img/offer/bike.png",
			},
			{
				id: 2,

				name: "Серф номер 2",
				hourPriceUsd: 2,
				// imgSrc: "/img/offer/bike.png",
			},
			{
				id: 3,

				name: "Серф номер 3",
				hourPriceUsd: 6,
				// imgSrc: "/img/offer/bike.png",
			},
			{
				id: 4,
				name: "Серф номер 4",
				hourPriceUsd: 6,
				// imgSrc: "/img/offer/bike.png",
			},
			{
				id: 5,
				name: "Серф номер 5",
				hourPriceUsd: 6,
				// imgSrc: "/img/offer/bike.png",
			},
		],
	});

	return { commercialData };
});
