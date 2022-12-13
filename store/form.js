export const useFormStore = defineStore("form", () => {
  let formData = ref(null);
  let bike = ref(null);
  let dates = ref(null);
  let client_name = ref(null);
  let client_phone = ref(null);
  const fillForm = (body) => {
    bike.value = body.bike;
    // console.log(bike.value);
    dates.value = body.date;
    dates.value.end = new Date(dates.value.end);
    dates.value.start = new Date(dates.value.start);
    client_phone.value = body.client_phone;
    client_name.value = body.client_name;
    // formData.value = body;
    // console.log(body);
  };
  let computedDate = computed(() => {
    if (dates.value) {
      return Math.ceil(
        Math.abs(dates.value.end.getTime() - dates.value.start.getTime()) /
          (1000 * 3600 * 24)
      );
    }
    return "";
  });
  let computedPrice = computed(() => {
    if (bike.value) {
      return Number(computedDate.value) * Number(bike.value.hourPriceUsd);
    }
    return "";
  });

  let computedDateStr = computed(() => {
    if (dates.value) {
      let str = "";
      str = `с ${formatDate(dates.value.start)} — до ${formatDate(
        dates.value.end
      )}`;
      return str;
    }
    return "";
  });
  let computedDateStrStart = computed(() => {
    if (dates.value) {
      return formatDate(dates.value.start);
    }
    return "";
  });
  let computedDateStrEnd = computed(() => {
    if (dates.value) {
      return formatDate(dates.value.end);
    }
    return "";
  });
  const formatDate = (date) => {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return `${dd}.${mm}.${yyyy}`;
  };

  return {
    formData,
    fillForm,
    bike,
    dates,
    client_name,
    computedPrice,
    computedDate,
    computedDateStr,
    computedDateStrEnd,
    computedDateStrStart,
  };
});
