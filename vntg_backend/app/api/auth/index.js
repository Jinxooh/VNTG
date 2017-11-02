const express = require('express');
const router = express.Router();

router.post('/login/:provider', (req, res) => {
  console.log('p : ', req.params.provider);
  console.log('p : ', req.body);
  // console.log('res : ', res);
  // console.log('session : ', req.session);
  res.json({sessionID: req.sessionID, session: req.session});
});

module.exports = router;

