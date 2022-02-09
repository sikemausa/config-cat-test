import * as ConfigCat from "configcat-js-ssr"

export default ({ $config }, inject) => {
  let logger = ConfigCat.createConsoleLogger(3)

  let configCatClient = ConfigCat.createClientWithAutoPoll(
    "_OvZCGMQOkeMKynC0A3xFQ/dfZhjH8ZuU-vtkKs-Lc3-w",
    { pollIntervalSeconds: 300, logger }
  )

  inject("configCatClient", configCatClient)
}
