// Imports libraries
import express from 'express'
import compression from 'compression'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
// import passport from 'passport'
// import session from 'express-session'

// Imports modules
import routes from './routes/index.js'
import responseFormat from './configs/responseFormat.js'
import middleware from './configs/middleware.js'
import errorHandler from './configs/errorHandler.js'
import config from './configs/app.js'
import passportLocal from './configs/passportLocal.js'

// Declare variables
const app = express()
const port = process.env.PORT || 3000

// CORS
const allowedOrigins = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true)
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.'
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  },
}
app.use(cors(corsOptions))

// HTTP request logger
app.use(morgan('dev'))

// Body parsers
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Use Passport
// app.use(session({ secret: '', resave: true, saveUninitialized: true }))
// app.use(passport.initialize())
// app.use(passport.session())
passportLocal()

// Compression
app.use(compression())

// Custom Response Format
app.use(responseFormat)

// Middleware
app.use(middleware)

// Serve static file
app.use('/frontend', express.static(path.join('./views')))
app.use('/static', express.static(path.join('./public')))

// Routes
app.use(routes)

// Error handler
errorHandler(config.isProduction, app)

// Start Server
app.listen(port, () => console.log(`Server is running at port ${port}`))
