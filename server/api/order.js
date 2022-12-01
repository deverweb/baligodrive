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
  let firstDateStr = `${formatDate(body.data.date.start)} ${
    body.data.deliveryTime
  }`;
  let endDateStr = `${formatDate(body.data.date.end)} ${body.data.returnTime}`;
  let dateStr = `${firstDateStr} - ${endDateStr}`;
  var formdata = new FormData();
  formdata.append("vehicle_id", body.data.bike.id);
  formdata.append("dates", dateStr);
  formdata.append("pickup_location", body.data.location.id);
  formdata.append("return_location", body.data.location.id);
  let response = await fetch("https://api.rentsyst.com/v1/order/create", {
    method: "POST",
    body: formdata,
    redirect: "follow",
    headers: {
      Authorization: `Bearer ${body.token.access_token}`,
    },
  });
  let result = await response.json();
  return result;
});
