module.exports = {
  'appID' : '341442868424-tsg9tslki0vj5gohndd75j767hpe1pgm.apps.googleusercontent.com',
  'appSecret' : process.env.GOOGLE_SECRET,
  'callbackURL' : `http://localhost:${process.env.PORT || 3000}/auth/google/callback`,
}