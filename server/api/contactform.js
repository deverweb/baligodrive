export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  var formdata = new FormData();
  console.log("contactform body", body);
  formdata.append("name", body.data.client_name);
  formdata.append("surname", " ");
  formdata.append("phone", body.data.client_phone);
  formdata.append("notes", "Выбраннаяя модель байка - ", body.data.bike.name);
  formdata.append("vehicle_id", body.data.bike.id);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
    headers: {
      Authorization: `Bearer ${body.token}`,
    },
  };

  let response = await fetch(
    "https://api.rentsyst.com/v1/contact/create",
    requestOptions
  );
  let result = await response.text();
  return result;
});
