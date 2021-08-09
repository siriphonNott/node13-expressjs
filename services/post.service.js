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
