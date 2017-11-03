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

router.get('/login/:provider', controller.login);
router.get('/:provider/callback', controller.callback);

/* google */
router.get('/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/userinfo.profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/api/authentication/failure'}), (req, res) => {
  // SUCCEED
  res.redirect('/api/authentication/success');
});


module.exports = router;

