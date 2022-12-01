export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  var formdata = new FormData();
  formdata.append("name", "Mark123");
  formdata.append("surname", "Nelson123");
  formdata.append("phone", "+5938534344");
  formdata.append("email", "rent@gmail.com");
  formdata.append("notes", "Some text");
  formdata.append("vehicle_id", "");

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
