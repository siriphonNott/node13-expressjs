import dotenv from 'dotenv'
dotenv.config()

export default {
  version: process.env.VERSION || 1,
  isProduction: process.env.NODE_ENV === 'production',
  secret: process.env.SECRET || 'mySecret',
}
