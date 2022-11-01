export const useCartStore = defineStore("cart", () => {
	// let cart = ref({
	// 	bike: null,
	// 	surf: null,
	// 	date: null,
	// 	phone: "",
	// });

	let cart = ref({
		bike: {
			id: 2,
			name: "Байк номер 2",
			hourPriceUsd: 4,
			imgSrc: "/img/bike.png",
		},
		surf: {
			id: 1,
			name: "Серф номер 1",
			hourPriceUsd: 6,
			imgSrc: "/img/surf.png",
		},

		date: {
			start: new Date("11/01/2022"),
			end: new Date("11/05/2022"),
		},
		phone: "123123123",
	});

	const fillTheCart = ({ bike, surf, date, phone }) => {
		cart.value.bike = bike;
		cart.value.surf = surf;
		cart.value.date = date;
		cart.value.phone = phone;
	};

	return { cart, fillTheCart };
});
