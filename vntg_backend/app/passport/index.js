const passport = require('passport');
// import { Strategy as FacebookStrategy }  from 'passport-facebook';
// import { Strategy as GoogleStrategy }  from 'passport-google-oauth20';
// import { Strategy as LocalStrategy } from 'passport-local';

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const googleConfig = require('./google');
// import User from '../models/user';

// import PassportError from './PassportError';

passport.serializeUser((user, done) => {
  done(null, user._id);
})

passport.deserializeUser((id, done) => {
  console.log('deserializeUser id,', id);
  try {
    done(null, id);
  } catch(error) {
    done(error);
  }
})

passport.use(new GoogleStrategy({
  clientID: googleConfig.appID,
  clientSecret: googleConfig.appSecret,
  callbackURL: googleConfig.callbackURL,
},
  (access_token, refresh_token, profile, done) => {
    console.log('Google Strategy!');
  }
))