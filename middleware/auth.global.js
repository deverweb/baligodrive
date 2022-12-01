export default defineNuxtRouteMiddleware(async () => {
  // const config = useRuntimeConfig()
  // const formdata = new FormData()
  // formdata.append("client_id", config.CLIENT_ID)
  // formdata.append("client_secret", config.SECRET_ID)
  // formdata.append("grant_type", "client_credentials")
  // const tokenRequestOptions = {
  //   method: "POST",
  //   body: formdata,
  //   redirect: "follow",
  // }
  // let tokenResponse = await fetch("https://api.rentsyst.com/oauth2/token", tokenRequestOptions)
  // let tokenResult = await tokenResponse.json()
  // console.log(tokenResult)
  // const token = useCookie("token")
  // token.value = tokenResult.access_token
  // console.log(token.value)
})
