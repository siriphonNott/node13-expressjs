import { validationResult } from 'express-validator'

export default (req, res, next) => {
  req.validate = function () {
    const errors = validationResult(req).array()
    if (errors.length == 0) return
    throw new Error(`${errors[0].param} : ${errors[0].msg}`)
  }
  next()
}
