import order from "~~/server/api/order";

export const useCommercialStore = defineStore("commercial", () => {
  let bikes = ref(null);
  let companyInfo = ref(null);
  let surfBoards = ref(null);
  let data1 = ref(null);
  let bikeModels = ref(null);
  let bikeModelsArray = ref(null);
  let token = useCookie("token", {
    sameSite: "strict",
    // expires:
  });
  const fillData = async () => {
    let { data } = await useFetch("/api/commercial");
    token.value = data.value.token.access_token;
    // console.log(token.value);
    surfBoards.value = data.value;
    bikes.value = data.value.bikes.map((val, i) => {
      let desc = val.custom_fields.find((field) => field.title == "Описание");
      let hourPriceUsd = val.price.slice(0, -3);
      return {
        id: val.id,
        hourPriceUsd,
        img: val.thumbnail,
        allImages: val.thumbnails,
        description: desc,
        brand: val.brand,
        group: val.group,
        mark: val.mark,
        name: val.brand + " " + val.mark,
        drawing: val.group.split("+")[1].trim(),
      };
    });
    bikeModels.value = data.value.bikes.map((val, i) => {
      return {
        name: val.brand + " " + val.mark,
        drawings: val,
      };
    });
    // console.log("bikes.value", bikes.value);
    bikeModelsArray.value = bikes.value.reduce((summaryArray, current, i) => {
      let model = `${current.brand} ${current.mark}`;

      if (summaryArray.length > 0) {
        if (summaryArray.find((val) => val.model == model)) {
          //
          summaryArray.find((val) => val.model == model)["bikes"].push(current);
        } else {
          summaryArray.push({
            model,
            bikes: [current],
            ...current,
          });
        }
      } else {
        summaryArray.push({
          model,
          bikes: [current],
          ...current,
        });
      }

      return summaryArray;
    }, []);
    // console.log("bikesModels: ", bikeModelsArray.value);
    token.value = data.value.token;
    companyInfo.value = data.value.info;
    data1.value = data.value;
  };
  const orderBike = async (bodyData, token) => {
    let { data: orderData } = await useFetch("/api/order", {
      method: "POST",
      body: {
        token,
        data: bodyData,
      },
    });
    // console.log("orderBike store data: ", orderData.value);
    let { data: insuranceData } = await useFetch("/api/insurance", {
      method: "POST",
      body: {
        token,
        data: {
          orderId: orderData.value.order_id,
          insuranceId: orderData.value.insurances[0].id,
          helmetsId: orderData.value.options[0].id,
          helmetsCount: Number(bodyData.adultHelmetCount),
        },
      },
    });
    // console.log(
    //   "orderBike func, insurance api requiest result: ",
    //   insuranceData.value
    // );
    return insuranceData.value;
  };
  const smallFormOrder = async (token, values) => {
    let { data } = await useFetch("/api/contactform", {
      method: "POST",
      body: {
        token,
        data: values,
      },
    });
  };
  // return { bikes, surfBoards, fillData }
  return {
    bikes,
    token,
    companyInfo,
    surfBoards,
    data1,
    bikeModels,
    fillData,
    orderBike,
    bikeModelsArray,
    smallFormOrder,
  };
});
