export const appConfig = {
  port: process.env.APP_PORT ?? '3000',
  mongoDB: {
    host: process.env.MONGOBD_HOST ?? 'localhost',
    port: process.env.MONGOBD_PORT ?? '27017',
    name: process.env.MONGOBD_NAME ?? 'miracle',
  },
}
