const express = require('express');
const controller = require('./controller');
const passport = require('passport');

const router = express.Router();
// router.post('/login/:provider', (req, res) => {
//   console.log('p : ', req.params.provider);
//   console.log('p : ', req.body);
//   // console.log('res : ', res);
//   // console.log('session : ', req.session);
//   res.json({sessionID: req.sessionID, session: req.session});
// });

// router.get('/login/:provider', controller.login);
// router.get('/:provider/callback', controller.callback);

router.get('/success', (req, res) => {
  
  let url = req.protocol + '://' + req.get('host');
  console.log('success!, ', url);
  //res.json({user: req.user});
  
  if (process.env.NODE_ENV === 'development') {
      url = url.replace(process.env.PORT, process.env.DEVPORT);
  }

  res.redirect('/auth/oauth-success');
})
/* google */
router.get('/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/userinfo.profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/api/authentication/failure'}), (req, res) => {
  // SUCCEED
  res.redirect('/api/auth/success');
});


module.exports = router;

