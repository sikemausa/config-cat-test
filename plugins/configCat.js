import * as ConfigCat from "configcat-js-ssr"

export default ({ $config }, inject) => {
  let logger = ConfigCat.createConsoleLogger(3)

  let configCatClient = ConfigCat.createClientWithAutoPoll(
    $config.configCatSDKKey,
    { pollIntervalSeconds: 5, logger }
  )

  inject("configCatClient", configCatClient)
}
