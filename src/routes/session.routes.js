const router = require('express').Router();
const auth = require('../middlewares/auth');

router.route('/authenticate').post(auth.isAdmin(), (req, res, next) => {
  res.cookie('session', auth.sessionUser, { httpOnly: true, secure: false });
  res.send({ auth: true, message: 'logged in' });
});

router.route('/logout').post((req, res) => {
  res.clearCookie('session');
  res.send({ auth: false, message: 'logged out' });
});

module.exports = router;
