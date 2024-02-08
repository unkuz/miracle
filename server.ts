import dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

import 'module-alias/register'
import { app } from './app'
import { appConfig } from './config/app'

app.listen(appConfig.port, () => {
  console.log(`App listening on port ${appConfig.port}`)
})
