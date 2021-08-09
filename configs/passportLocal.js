import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

export default () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
      },
      function (username, password, done) {
        if (username === 'admin' && password === '1234') {
          done(null, { username, password })
        } else {
          return done(null, false, { errors: { 'username or password': 'is invalid' } })
        }
      }
    )
  )
  passport.serializeUser(function (user, done) {
    done(null, user)
  })
  passport.deserializeUser(function (user, done) {
    done(null, user)
  })
}
