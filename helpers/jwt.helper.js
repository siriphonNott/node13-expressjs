import jwt from 'jsonwebtoken'
import config from '../configs/app.js'

export const generateJWT = (payload) => {
  // const today = new Date()
  // let exp = new Date(today)
  // exp.setMinutes(today.getMinutes() + 30)
  const token = jwt.sign(
    {
      username: payload.username,
      // exp: parseInt(exp.getTime() / 1000),
    },
    config.secret,
    { algorithm: 'HS256', expiresIn: '1d' }
  )
  return token
}
