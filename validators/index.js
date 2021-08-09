import { validationResult } from 'express-validator'

// Import Validators
export * as user from './user.validator.js'
export * as post from './post.validator.js'

export const check = (req, res, next) => {
  let errors = validationResult(req).array()
  if (errors.length == 0) return next()
  let error = new Error(`${errors[0].param}: ${errors[0].msg}`)
  error.status = 422
  throw error
}
