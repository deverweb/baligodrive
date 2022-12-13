import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }
  const body = await readBody(event);
  // console.log("body: ", body);

  let firstDateStr = `${formatDate(body.data.date.start)} ${
    body.data.deliveryTime
  }`;
  let endDateStr = `${formatDate(body.data.date.end)} ${body.data.returnTime}`;
  let dateStr = `${firstDateStr} - ${endDateStr}`;
  var formdata = new FormData();
  formdata.append("vehicle_id", body.data.bike.id);
  formdata.append("dates", dateStr);
  formdata.append("pickup_location", body.data.location.id);
  // formdata.append("pickup_location", body.data.firstAddress);
  // console.log("body.data.firstAddress", body.data.firstAddress);
  formdata.append("return_location", body.data.location.id);
  // formdata.append("return_location", body.data.lastAddress);
  // console.log("body.data.lastAddress", body.data.lastAddress);
  let orderCreateResponse = await fetch(
    "https://api.rentsyst.com/v1/order/create",
    {
      method: "POST",
      body: formdata,
      redirect: "follow",
      headers: {
        Authorization: `Bearer ${body.token.access_token}`,
      },
    }
  );
  let orderCreateResult = await orderCreateResponse.json();
  return orderCreateResult;
});
