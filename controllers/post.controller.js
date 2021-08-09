import { get, create, update, remove } from '../services/post.service.js'
import { InternalServerError } from '../configs/errorMethods.js'

export const onGet = (req, res) => {
  try {
    const response = get()
    res.success(response)
  } catch (error) {
    res.error(InternalServerError(error.message))
  }
}

export const onCreate = (req, res) => {
  try {
    const response = create()
    res.success(response, 201)
  } catch (error) {
    res.error(InternalServerError(error.message))
  }
}

export const onUpdate = (req, res) => {
  try {
    const response = update()
    res.success(response)
  } catch (error) {
    res.error(InternalServerError(error.message))
  }
}

export const onDelete = (req, res) => {
  try {
    const response = remove()
    res.success(response)
  } catch (error) {
    res.error(InternalServerError(error.message))
  }
}
