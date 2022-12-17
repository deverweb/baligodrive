import { GoogleSpreadsheet } from "google-spreadsheet";
import json from "./linear-stock-371713-73fa8f6f5bfc.json";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("body", body);
  const doc = new GoogleSpreadsheet(
    "1hPuTlodRw_hJdsG__4Hxn0av_dCgACiSqB7Tv_opcZM"
  );
  const email_key = json.client_email;
  const private_key = json.private_key;
  await doc.useServiceAccountAuth({
    client_email: email_key,
    private_key: private_key,
  });
  //
  let sheet;
  await doc.loadInfo();
  if (body.sheet == "smallform") {
    sheet = doc.sheetsByIndex[1];

    await sheet.addRow({
      order_date: body.order_date,
      client_name: body.client_name,
      client_messenger: body.client_messenger,
      order_date_start: body.order_date_start,
      order_date_end: body.order_date_end,
    });
    return "if smallform";
  } else {
    sheet = doc.sheetsByIndex[0];
    let data = body.data;
    await sheet.addRow({
      ...data,
    });
    return "if bigform";
    // let order_date = new Date();
    // let client_name = "Chebuker";
    // let client_surname = "chbuerkov";
    // let client_phone = 123123123123;
    // let client_social = "messegner";
    // let client_email = "kek@k2k.e";
    // let order_date_start = new Date();
    // let order_date_end = new Date();
    // let bike_model = "PCX 550V";
    // let bike_painting = "Iron man";
    // let location_delivery = "Location1";
    // let location_return = "Location2";
    // let time_delivery = "10:00";
    // let time_return = "12:00";
    // let helmets = 3;
    // let full_price = "53$";

    // order_date,
    // client_name,
    // client_surname,
    // client_phone,
    // client_social,
    // client_email,
    // order_date_start,
    // order_date_end,
    // bike_model,
    // bike_painting,
    // location_delivery,
    // location_return,
    // time_delivery,
    // time_return,
    // helmets,
    // full_price,
  }
  await sheet.addRow(...body.data);
  const rows = await bikesOrders.getRows();
  return "success";
});
