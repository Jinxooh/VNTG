// router.post('/login/:provider', (req, res) => {
//   console.log('p : ', req.params.provider);
//   console.log('p : ', req.body);
//   // console.log('res : ', res);
//   // console.log('session : ', req.session);
//   res.json({sessionID: req.sessionID, session: req.session});
// });

module.exports = {
  login: (req, res) => {
      const { provider } = req.params;
      ctx.redirect(oauthURL[provider]);
  },
}