export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // console.log("body: ", body);

  let formdata = new FormData();
  formdata.append("insurance", "15515");
  formdata.append("extras[3733]", body.data.helmetsCount);

  // console.log("token: ", body.token.access_token);
  // console.log(
  //   "url fetching: ",
  //   `https://api.rentsyst.com/v1/order/update/${body.data.orderId}`
  // );
  // console.log("...formdata: ", ...formdata);
  let insuranceResponse = await fetch(
    `https://api.rentsyst.com/v1/order/update/${body.data.orderId}`,
    {
      method: "POST",
      body: formdata,
      redirect: "follow",
      headers: {
        Authorization: `Bearer ${body.token.access_token}`,
      },
    }
  );
  let insuranceResult = await insuranceResponse.json();
  return insuranceResult;
  // console.log("insuranceResult: ", insuranceResult);
  // return "insurance api test";
});
