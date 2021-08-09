import { check } from 'express-validator'

export const create = [
  check('title').notEmpty().withMessage('is empty'),
  check('description').notEmpty().withMessage('is empty'),
]

export const update = [check('id').notEmpty().withMessage('is empty')]

export const remove = [check('id').notEmpty().withMessage('is empty')]
