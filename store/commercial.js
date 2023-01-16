export const useCommercialStore = defineStore("commercial", () => {
  let bikeModelsArray = ref(null);

  const fillData = async () => {
    bikeModelsArray.value = [
      {
        model: "HONDA PCX 160 CC",
        id: "model 1",
        img: "/img/bikes/pcx-redbull.png",
        year: "2022",
        trunk_volume: "30",
        capacity: "16",
        fuel_tank_volume: "8,1",
        average_consumption: "2,5",
        engDescription: `Honda PCX is one of the most popular maxi scooters in Bali. It is ideal for those who decide to visit every point of the mysterious Bali. Rest assured that you won't get tired riding this modern beauty and you'll have a great riding experience. Due to the low fit, it is comfortable to use for boys and girls.
				The updated fuel distribution system allows you to drive on a full tank up to 250 km. Bright LED optics will help you move comfortably at night. The bike is equipped with a convenient electronic smart-key and has a spacious trunk.`,
        ruDescription: `Honda PCX - один из самых популярных максискутеров на Бали. Он идеально подходит для тех, кто решил побывать в каждой точке загадочного Бали. Будьте уверены, что вы не устанете, перемещаясь на этом современном красавце и получите массу впечатлений от езды. За счёт низкой посадки он комфортен в использовании парням и девушкам.
				Обновленная система топливного распределения позволяет проехать на полном баке до 250 км. Яркая светодиодная оптика поможет с комфортом перемещаться в ночное время. Байк комплектуется удобным электронным smart-ключом и имеет вместительный багажник.`,

        bikes: [
          {
            id: "8365",
            img: "/img/bikes/pcx-redbull.png",
            drawing: "Red Bull",
          },
        ],
        rates: [
          {
            minDays: 1,
            maxDays: 4,
            dayPriceUSD: 18,
            dayPriceRUP: 280800,
          },
          {
            minDays: 5,
            maxDays: 7,
            dayPriceUSD: 18,
            dayPriceRUP: 280800,
          },
          {
            minDays: 8,
            maxDays: 14,
            dayPriceUSD: 15,
            dayPriceRUP: 234000,
          },
          {
            minDays: 15,
            maxDays: 21,
            dayPriceUSD: 12,
            dayPriceRUP: 187200,
          },
          {
            minDays: 22,
            maxDays: 90,
            dayPriceUSD: 9,
            dayPriceRUP: 140400,
          },
        ],
        discount: 20,
        brand: "HONDA",
        mark: "PCX 160 CC",
        name: "HONDA PCX 160 CC",
      },
      {
        model: "HONDA VARIO 160 CC",
        engDescription: `Honda Vario 160 - This bike is for those who want something nimble and dynamic. It will be comfortable to move around the city and at the same time easy enough to drive and frisky enough to overtake on the highway. Diode optics and combined brakes set this bike apart from other models in this class. The bike is equipped with an 18L trunk, which freely fits a motorcycle helmet.`,
        ruDescription: `Honda Vario 160 - Этот байк подходит для тех, кто хочет что-то маневренное и динамичное. Он будет комфортен для перемещения по городу и в то же время достаточно лёгкий в управлении и резвый для совершения обгона на трассе. Диодная оптика и комбинированные тормоза выделяют этот байк на фоне других моделей данного класса. Байк оснащен багажником 18л, в который свободно влезает мотошлем.
				`,
        year: "2022",
        trunk_volume: "18",
        capacity: "11,1",
        fuel_tank_volume: "5,5",
        average_consumption: "2,3",

        bikes: [
          {
            id: "honda vario 1",
            img: "/img/bikes/vario-redbull.png",
            drawing: "Redbull",
          },
          {
            id: "honda vario 2",
            img: "/img/bikes/vario-blue-full.png",
            drawing: "Blue Full",
          },
        ],
        discount: 20,
        rates: [
          {
            minDays: 1,
            maxDays: 4,
            dayPriceUSD: 14,
            dayPriceRUP: 218400,
          },
          {
            minDays: 5,
            maxDays: 7,
            dayPriceUSD: 14,
            dayPriceRUP: 218400,
          },
          {
            minDays: 8,
            maxDays: 14,
            dayPriceUSD: 11,
            dayPriceRUP: 171600,
          },
          {
            minDays: 15,
            maxDays: 21,
            dayPriceUSD: 9,
            dayPriceRUP: 140400,
          },
          {
            minDays: 22,
            maxDays: 90,
            dayPriceUSD: 7,
            dayPriceRUP: 109200,
          },
        ],
        id: "9221",
        img: "https://rentsyst.com/static/cache/vehicle/22441/vehicle_list_33445.jpg",
        brand: "HONDA",
        mark: "VARIO 160 CC",
        name: "HONDA VARIO 160 CC",
      },
      {
        model: "YAMAHA GEAR",
        year: "2022",
        dry_weight: "96",
        trunk_volume: "18",
        capacity: "9,4",
        fuel_tank_volume: "4,2",
        engDescription: `Yamaha Gear is Yamaha's latest scooter, part of a family of automatic scooters with a 125cc Blue Core engine.`,
        ruDescription: `Yamaha Gear - Это новейший скутер Yamaha, входящий в семейство автоматических скутеров с двигателем Blue Core объемом 125 куб.
				Спортивный внешний вид этого мотоцикла можно увидеть по его гладкому дизайну и резким, твердым линиям на корпусе. Его оснастили бескамерными шинами и широким протектором. Он идеально подойдёт для динамичных людей увлекающихся серфингом. Его также можно оснастить креплением для серфборда.
				`,
        bikes: [
          {
            id: "1",
            img: "/img/bikes/gear-blue-motif.png",
            drawing: "Blue Motif",
          },
          {
            id: "2",
            img: "/img/bikes/gear-blue.png",
            drawing: "Blue",
          },
          {
            id: "3",
            img: "/img/bikes/gear-orange-full.png",
            drawing: "Orange Full",
          },
          {
            id: "4",
            img: "/img/bikes/gear-redbull.png",
            drawing: "Redbull",
          },
          {
            id: "5",
            img: "/img/bikes/gear-yellow-full.png",
            drawing: "Yellow Full",
          },
        ],
        discount: 20,
        rates: [
          {
            minDays: 1,
            maxDays: 4,
            dayPriceUSD: 10,
            dayPriceRUP: 156000,
          },
          {
            minDays: 5,
            maxDays: 7,
            dayPriceUSD: 10,
            dayPriceRUP: 156000,
          },
          {
            minDays: 8,
            maxDays: 14,
            dayPriceUSD: 8,
            dayPriceRUP: 124800,
          },
          {
            minDays: 15,
            maxDays: 21,
            dayPriceUSD: 6,
            dayPriceRUP: 93600,
          },
          {
            minDays: 22,
            maxDays: 90,
            dayPriceUSD: 5,
            dayPriceRUP: 78000,
          },
        ],
        id: "yamaha gear",
        img: "/img/bikes/gear-blue-motif.png",
        brand: "YAMAHA",
        mark: "GEAR",
        name: "YAMAHA GEAR",
      },
      {
        model: "Yamaha Nmax 155cc",
        year: "2022",
        dry_weight: "127",
        trunk_volume: "30",
        capacity: "15,1",
        fuel_tank_volume: "7,1",
        average_consumption: "2,5",
        engDescription: `For the 2022 model year, Yamaha has given the NMAX a number of important upgrades to make the popular model even better. The updated NMAX 155 received LED lighting, a sportier fascia and slightly improved ergonomics. The seating position has been slightly wider for the comfort of taller riders, while the handlebars have been raised for a more comfortable and relaxed posture.`,
        ruDescription: `На 2022 модельный год Yamaha одарила NMAX рядом важных доработок, сделав популярную модель ещё лучше. Обновленный NMAX 155 получил диодный свет, более спортивную облицовку и слегка доработанную эргономику. Посадка была сделана чуть просторнее для удобства высоких райдеров, а руль стал выше, обеспечив более удобную и расслабленную позу.Также для водителя предусмотрены удлиненные подножки, благодаря ним ноги можно вытянуть, что создает дополнительное удобство.`,
        bikes: [
          {
            id: "1",
            img: "/img/bikes/nmax-bitcoin.png",
            drawing: "Bitcoin",
          },
          {
            id: "2",
            img: "/img/bikes/nmax-blue.png",
            drawing: "Blue",
          },
          {
            id: "3",
            img: "/img/bikes/nmax-redbull-panther-black-yellow.png",
            drawing: "RedBull Panther",
          },
          {
            id: "4",
            img: "/img/bikes/nmax-redbull.png",
            drawing: "Redbull",
          },
          {
            id: "5",
            img: "/img/bikes/nmax-viva-magenta.png",
            drawing: "Viva Magenta",
          },
        ],
        discount: 20,
        rates: [
          {
            minDays: 1,
            maxDays: 4,
            dayPriceUSD: 18,
            dayPriceRUP: 280800,
          },
          {
            minDays: 5,
            maxDays: 7,
            dayPriceUSD: 18,
            dayPriceRUP: 280800,
          },
          {
            minDays: 8,
            maxDays: 14,
            dayPriceUSD: 15,
            dayPriceRUP: 234000,
          },
          {
            minDays: 15,
            maxDays: 21,
            dayPriceUSD: 12,
            dayPriceRUP: 187200,
          },
          {
            minDays: 22,
            maxDays: 90,
            dayPriceUSD: 9,
            dayPriceRUP: 140400,
          },
        ],
        id: "yamaha nmax 155cc",
        img: "/img/bikes/gear-blue-motif.png",
        brand: "YAMAHA",
        mark: "NMAX 155cc",
        name: "YAMAHA NMAX 155cc",
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
    let { data } = await useFetch("/api/docs", {
      method: "POST",
      body: {
        sheet: "smallform",
        data: values,
      },
    });
  };
  const investFormOrder = async (values) => {
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
