export const useCommercialStore = defineStore("commercial", () => {
  let bikes = ref(null);
  let companyInfo = ref(null);
  let surfBoards = ref(null);
  let data1 = ref(null);
  let bikeModels = ref(null);
  let token = useCookie("token", {
    sameSite: "strict",
    // expires:
  });
  const fillData = async () => {
    console.log("fill data");
    // let { data } = await useFetch("/api/commercial");
    // token.value = data.value.token.access_token;
    // surfBoards.value = data.value;
    // bikes.value = data.value.bikes.map((val, i) => {
    //   let desc = val.custom_fields.find((field) => field.title == "Описание");
    //   let hourPriceUsd = val.price.slice(0, -3);
    //   return {
    //     id: val.id,
    //     hourPriceUsd,
    //     img: val.thumbnail,
    //     allImages: val.thumbnails,
    //     description: desc,
    //     brand: val.brand,
    //     group: val.group,
    //     mark: val.mark,
    //     name: val.brand + " " + val.mark,
    //     drawing: val.group.split("+")[1].trim(),
    //   };
    // });
    // bikeModels.value = data.value.bikes.map((val, i) => {
    //   return {
    //     name: val.brand + " " + val.mark,
    //     drawings: val,
    //   };
    // });
    // token.value = data.value.token;
    // companyInfo.value = data.value.info;
    // data1.value = data.value;
  };
  const orderBike = async (bodyData, token) => {
    let { data } = await useFetch("/api/order", {
      method: "POST",
      body: {
        token,
        data: bodyData,
      },
    });
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
    smallFormOrder,
  };
});
