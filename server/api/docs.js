import { GoogleSpreadsheet } from "google-spreadsheet";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // const doc = new GoogleSpreadsheet("1hPuTlodRw_hJdsG__4Hxn0av_dCgACiSqB7Tv_opcZM");
  const doc_id = process.env.DOC_ID;
  const email_key = process.env.EMAIL_KEY;
  const private_key = process.env.PRIVATE_KEY;
  // const doc = new GoogleSpreadsheet("1LHmvh_YJztViJKhoT4TPiaVOWYS08cpbwKaLPszpBkI");
  const doc = new GoogleSpreadsheet(doc_id);
  await doc.useServiceAccountAuth({
    client_email: email_key,
    private_key: private_key,
  });
  //

  let sheet;
  await doc.loadInfo();
  if (body.sheet == "investform") {
    sheet = doc.sheetsByIndex[3];

    await sheet.addRow({
      order_date: body.data.date,
      client_name: body.data.client_name,
      client_phone: body.data.client_phone,
      messenger: body.data.messenger,
      invest_size: body.data.invest_size,
    });
    return "if smallform";
  }
  if (body.sheet == "smallform") {
    sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      order_date: body.data.order_date,
      client_name: body.data.client_name,
      client_messenger: body.data.client_messenger,
      order_date_start: body.data.order_date_start,
      order_date_end: body.data.order_date_end,
      bike_model: body.data.bike_choice,
    });
    return "if smallform";
  }

  if (body.sheet == "bigform") {
    sheet = doc.sheetsByIndex[1];
    const rows = await sheet.getRows();
    let data = body.data;
    await sheet.addRow({
      order_id: rows.length,
      ...data,
    });
    return "if bigform";
  }
  if (body.sheet == "agentform") {
    sheet = doc.sheetsByIndex[2];
    const rows = await sheet.getRows();
    let data = body.data;
    await sheet.addRow({
      order_id: rows.length,
      ...data,
    });
    return "if bigform";
  }
  return "success";
});
