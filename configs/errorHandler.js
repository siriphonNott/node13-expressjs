export default (isProduction = false, app) => {
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    let err = new Error('Endpoint Not Found')
    err.status = 404
    next(err)
  })
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    if (!isProduction) console.log(err.stack)
    let statusCode = err.status || 500
    res.status(statusCode)
    res.json({
      error: {
        status: statusCode,
        message: err.message,
      },
    })
  })
}
