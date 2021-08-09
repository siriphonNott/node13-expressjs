import jwt from 'express-jwt'
import config from '../configs/app.js'
const secret = config.secret

const getTokenFromHeader = (req) => {
  if (
    (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') ||
    (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
  ) {
    return req.headers.authorization.split(' ')[1]
  }
  return null
}

const auth = {
  required: jwt({
    secret: secret,
    getToken: getTokenFromHeader,
    algorithms: ['HS256'],
  }),
  optional: jwt({
    secret: secret,
    credentialsRequired: false,
    getToken: getTokenFromHeader,
    algorithms: ['HS256'],
  }),
}

export default auth
