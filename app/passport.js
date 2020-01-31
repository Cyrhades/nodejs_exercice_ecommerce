const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const GitHubStrategy = require('passport-github').Strategy;

const config = require('./config')

module.exports = (app) => {
  
    app.use(passport.initialize())
    app.use(passport.session())


    // mettez vos strategies ici
    passport.use(new GoogleStrategy({
            clientID: config.google.clientID,
            clientSecret: config.google.clientSecret,
            callbackURL: "/connexion/google/callback",
            passReqToCallback: true
        },
        (request, accessToken, refreshToken, profile, done) => {
            request.session.user = {
                connected : true,
                id: profile.id,
                firstname : profile.name.givenName,
                lastname : profile.name.familyName
            }
            //request.flash('success', `Vous êtes maintenant connecté !`);
            return done(null, request.session.user);
        }
    ));



    passport.use(new GitHubStrategy({
        clientID: config.github.clientID,
        clientSecret: config.github.clientSecret,
        callbackURL: "/connexion/github/callback",
        passReqToCallback: true
      },
      (request, accessToken, refreshToken, profile, done) => {
            request.session.user = {
                connected : true,
                firstname : profile.name,
                lastname : ''
            }
            return done(null, request.session.user);
        })
    )


    passport.serializeUser((user, cb) => {
        cb(null, {})
    });

    passport.deserializeUser((id, cb) => {
        cb(null, {})
    });
}
