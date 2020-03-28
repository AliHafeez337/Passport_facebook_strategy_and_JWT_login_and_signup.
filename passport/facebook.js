
const passport = require('passport');
const dotenv  = require("dotenv");
const strategy = require("passport-facebook");

const FacebookStrategy = strategy.Strategy;

dotenv.config();
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: '354275715466978',
      clientSecret: '39ad5da18dbfdae5ab124ef5b258ed0d',
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
    //   passReqToCallback : true,
      profileFields: [
          'id', 
          'emails', 
          'name', 
          'picture', 
        //   'user_birthday', 
        //   'user_gender'
        ] 
    },
    function(accessToken, refreshToken, profile, done) {
        // console.log(`access token is`);
        // console.log(accessToken);
        // console.log(`refresh token is`);
        // console.log(refreshToken);
        // console.log(`profile is`);
        // console.log(profile);
      // const { email, first_name, last_name } = profile._json;
      // const userData = {
      //   email,
      //   firstName: first_name,
      //   lastName: last_name
      // };
      // console.log(userData);
    //   console.log(profile);
    //   new UserDetails(userData).save();
      done(null, profile);
    }
  )
);