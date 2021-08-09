import { capitalize } from '../helpers/index.js'
import { generateJWT } from '../helpers/index.js'

export const get = () => {
  try {
    const response = { msg: capitalize('get success') }
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export const create = (payload) => {
  try {
    const response = { msg: capitalize('created success'), payload }
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export const update = (id, payload) => {
  try {
    const response = { msg: capitalize('updated success'), id, payload }
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export const remove = (id) => {
  try {
    const response = { msg: capitalize('removed success'), id }
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export const login = (payload) => {
  try {
    const token = generateJWT(payload)
    const response = { msg: 'login success', user: payload, token }
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export const signUp = (payload) => {
  try {
    const response = { msg: 'registerd success', user: payload }
    return response
  } catch (error) {
    throw new Error(error)
  }
}
