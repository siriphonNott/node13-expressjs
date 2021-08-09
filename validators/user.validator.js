import { check } from 'express-validator'

export const login = [
  check('username').notEmpty().withMessage('is empty'),
  check('password').notEmpty().withMessage('is empty'),
]

export const signUp = [
  check('username').notEmpty().withMessage('is empty'),
  check('tel')
    .notEmpty()
    .withMessage('is empty')
    .matches(/\d/)
    .withMessage('must be number')
    .isLength({ min: 10, max: 10 })
    .withMessage('must be 10 digits'),
  check('email').notEmpty().withMessage('is empty').isEmail().withMessage('must be email'),
  check('password').notEmpty().withMessage('is empty'),
]

export const create = [
  check('username').notEmpty().withMessage('is empty').isEmail().withMessage('must be email'),
  check('password').notEmpty().withMessage('is empty'),
]

export const update = [check('id').notEmpty().withMessage('is empty')]

export const remove = [check('id').notEmpty().withMessage('is empty')]
