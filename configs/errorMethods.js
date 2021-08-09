export const ErrorNotModified = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 304
  return error
}
export const ErrorBadRequest = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 400
  return error
}
export const ErrorUnauthorized = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 401
  return error
}
export const ErrorPaymentRequired = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 402
  return error
}
export const ErrorForbidden = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 403
  return error
}
export const ErrorNotFound = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 404
  return error
}
export const ErrorMethodNotAllowed = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 405
  return error
}
export const ErrorUnprocessableEntity = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 422
  return error
}
export const InternalServerError = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 500
  return error
}
export const NotImplemented = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 501
  return error
}
export const BadGateway = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 502
  return error
}
export const ServiceUnavailable = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 503
  return error
}
export const GatewayTimeout = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 504
  return error
}
