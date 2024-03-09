import mongoose from 'mongoose'
import { Nitro } from 'nitropack'

// Nitro plugin
// Thanks to https://github.com/UnderKoen for the answer to this
// https://github.com/nuxt/framework/discussions/4923
export default async (_nitroApp: Nitro) => {
  //run your connect code here
  const config = useRuntimeConfig()
  const options = {
    dbName: config.MONGO_DB,
    user: config.MONGO_USER,
    pass: config.MONGO_PASS,
    authSource: config.MONGO_AUTH_SOURCE,
  }
  console.log(config.MONGO_URI, options)

  // connect to mongodb
  mongoose
    .connect(config.MONGO_URI, options)
    .then(() => console.log(`Connected to DB`))
    .catch((e) => console.log(e))
}
