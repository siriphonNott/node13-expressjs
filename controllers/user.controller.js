import { get, create, update, remove, login, signUp } from '../services/user.service.js'
import { InternalServerError } from '../configs/errorMethods.js'

export const onGet = (req, res) => {
  try {
    const response = get(req.params)
    res.success(response)
  } catch (error) {
    res.error(InternalServerError(error.message))
  }
}

export const onCreate = (req, res) => {
  try {
    const response = create(req.body)
    res.success(response, 201)
  } catch (error) {
    res.error(InternalServerError(error.message))
  }
}

export const onUpdate = (req, res) => {
  try {
    const response = update(req.params.id, req.body)
    res.success(response)
  } catch (error) {
    res.error(InternalServerError(error.message))
  }
}

export const onDelete = (req, res) => {
  try {
    const response = remove(req.params.id)
    res.success(response)
  } catch (error) {
    res.error(InternalServerError(error.message))
  }
}

export const onLogin = (req, res) => {
  try {
    const response = login(req.body)
    res.success(response)
  } catch (error) {
    res.error(InternalServerError(error.message))
  }
}

export const onSignUp = (req, res) => {
  try {
    const response = signUp(req.body)
    res.success(response)
  } catch (error) {
    res.error(InternalServerError(error.message))
  }
}
