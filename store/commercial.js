export const useCommercialStore = defineStore("commercial", () => {
  let bikeModelsArray = ref(null);

  const fillData = async () => {
    bikeModelsArray.value = [
      {
        model: "HONDA PCX 160 CC",
        id: "model 1",
        img: "https://rentsyst.com/static/cache/vehicle/20815/vehicle_list_33439.jpg",
        bikes: [
          {
            id: "8365",
            img: "https://rentsyst.com/static/cache/vehicle/20815/vehicle_list_33439.jpg",
            brand: "HONDA",
            mark: "PCX 160 CC",
            name: "HONDA PCX 160 CC",
            drawing: "Red Bull",
          },
        ],
        rates: [
          {
            minDays: 1,
            maxDays: 4,
            dayPriceUSD: 18,
            dayPriceRUP: 280000,
          },
          {
            minDays: 5,
            maxDays: 7,
            dayPriceUSD: 18,
            dayPriceRUP: 280000,
          },
          {
            minDays: 8,
            maxDays: 14,
            dayPriceUSD: 15,
            dayPriceRUP: 230000,
          },
          {
            minDays: 15,
            maxDays: 21,
            dayPriceUSD: 12,
            dayPriceRUP: 180000,
          },
          {
            minDays: 22,
            maxDays: 90,
            dayPriceUSD: 9,
            dayPriceRUP: 140000,
          },
        ],
        discount: 20,
        brand: "HONDA",
        mark: "PCX 160 CC",
        name: "HONDA PCX 160 CC",
      },
      {
        model: "HONDA VARIO 160 CC",
        bikes: [
          {
            id: "9221",
            hourPriceUsd: "15",
            img: "https://rentsyst.com/static/cache/vehicle/22441/vehicle_list_33445.jpg",
            brand: "HONDA",
            mark: "VARIO 160 CC",
            name: "HONDA VARIO 160 CC",
            drawing: "Red Bull",
          },
        ],
        discount: 20,
        rates: [
          {
            minDays: 1,
            maxDays: 4,
            dayPriceUSD: 14,
            dayPriceRUP: 210000,
          },
          {
            minDays: 5,
            maxDays: 7,
            dayPriceUSD: 14,
            dayPriceRUP: 210000,
          },
          {
            minDays: 8,
            maxDays: 14,
            dayPriceUSD: 11,
            dayPriceRUP: 170000,
          },
          {
            minDays: 15,
            maxDays: 21,
            dayPriceUSD: 9,
            dayPriceRUP: 130000,
          },
          {
            minDays: 22,
            maxDays: 90,
            dayPriceUSD: 7,
            dayPriceRUP: 100000,
          },
        ],
        id: "9221",
        hourPriceUsd: "15",
        img: "https://rentsyst.com/static/cache/vehicle/22441/vehicle_list_33445.jpg",
        brand: "HONDA",
        mark: "VARIO 160 CC",
        name: "HONDA VARIO 160 CC",
        drawing: "Red Bull",
      },
    ];
  };
  const orderBike = async (bodyData) => {
    let { data } = await useFetch("/api/docs", {
      method: "POST",
      body: {
        sheet: "bigform",
        data: bodyData,
      },
    });
  };
  const smallFormOrder = async (values) => {
    // console.log('commertcial store smallFormOrder values: ', values)
    let { data } = await useFetch("/api/docs", {
      method: "POST",
      body: {
        sheet: "smallform",
        data: values,
      },
    });
  };
  const investFormOrder = async (values) => {
    // console.log("investform order values", values);
    let { data } = await useFetch("/api/docs", {
      method: "POST",
      body: {
        sheet: "investform",
        data: values,
      },
    });
  };
  return {
    fillData,
    orderBike,
    bikeModelsArray,
    smallFormOrder,
    investFormOrder,
  };
});
