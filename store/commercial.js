export const useCommercialStore = defineStore("commercial", () => {
  let bikes = ref(null)
  let surfBoards = ref(null)

  const fillData = async () => {
    let { data } = await useFetch("/api/commercial")
    bikes.value = data.value.bikes
    surfBoards.value = data.value.surfBoards
  }

  return { bikes, surfBoards, fillData }
})
