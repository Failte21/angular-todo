let passportJWT = require("passport-jwt"),
    JwtStrategy = passportJWT.Strategy,
    jwtOptions = {},
    ExtractJwt = passportJWT.ExtractJwt,
    LocalStrategy = require('passport-local').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    Users = require('./models/todoModel')

import config from './config'

jwtOptions.jwtFromRequest = ExtractJwt.fromHeader('x-access-token')
jwtOptions.secretOrKey = config.TOKENSECRET

export const jwtStrategy = new JwtStrategy(jwtOptions, function(jwt_payload, done) {
    Users.findById(jwt_payload, (err, user) => {
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    })
});

export const localStrategy = new LocalStrategy(
    function(username, password, done) {
        Users.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'fetchError.loginUsername' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'fetchError.loginPassword' });
            }
            return done(null, user, { message: 'fetchSuccess.login' });
        });
    }
)

export const googleStrategy = new GoogleStrategy({
        clientID: config.OAUTH2_CLIENT_ID,
        clientSecret: config.OAUTH2_CLIENT_SECRET,
        callbackURL: config.OAUTH2_CALLBACK,
        passReqToCallback : true
    },
    function(accessToken, refreshToken, profile, done) {
    console.log('hello google')
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
)
