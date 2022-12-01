export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const formdata = new FormData();
  formdata.append("client_id", process.env.CLIENT_ID);
  formdata.append("client_secret", process.env.SECRET_ID);
  formdata.append("grant_type", "client_credentials");
  const tokenRequestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };
  async function getCompanyInfo(token) {
    let dataResponse = await fetch(
      "https://api.rentsyst.com/v1/company/settings",
      {
        method: "GET",
        redirect: "follow",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let dataResult = await dataResponse.json();
    return dataResult;
  }
  async function getVehicles(token) {
    let vehiclesResponse = await fetch(
      "https://api.rentsyst.com/v1/vehicle/index",
      {
        method: "GET",
        redirect: "follow",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let vehiclesResult = await vehiclesResponse.json();
    return vehiclesResult;
  }

  async function getCars(token) {
    let response = await fetch(
      "https://api.rentsyst.com/v1/booking/search?dates=2022-03-28 12:00:00 - 2023-03-30 12:00:00&pickup_location=5267&return_location=5267",
      {
        method: "GET",
        redirect: "follow",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let result = response.json();
    return result;
  }
  try {
    let tokenResponse = await fetch(
      "https://api.rentsyst.com/oauth2/token",
      tokenRequestOptions
    );
    let tokenResult = await tokenResponse.json();
    const [dataResult, vehiclesResult, carsResult] = await Promise.all([
      getCompanyInfo(tokenResult.access_token),
      getVehicles(tokenResult.access_token),
      getCars(tokenResult.access_token),
    ]);
    // console.log(dataResult)

    return {
      token: tokenResult,
      info: dataResult,
      bikes: vehiclesResult,
      cars: carsResult,
      // bikes: [
      //   {
      //     id: 1,
      //     name: "Байк номер 1",
      //     hourPriceUsd: 5,
      //     imgSrc: "/img/index/bike.png",
      //   },
      //
      // ],
      // surfBoards: [
      //   {
      //     id: 1,

      //     name: "Серф номер 1",
      //     hourPriceUsd: 6,
      //     // imgSrc: "/img/offer/bike.png",
      //   },
      //
      // ],
    };
  } catch (error) {
    // console.log(error);
  }
});
