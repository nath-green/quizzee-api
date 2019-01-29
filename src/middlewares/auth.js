const CustomError = require('../lib/custom-error');

// ROLES
// 1 - user authenticated
// 2 - admin
// 3 - super

exports.hasRole = (role = 1) => (req, res, next) => {
  if (!req.cookies.session || req.cookies.session.role < role)
    throw new CustomError('Not authorised', 401);
  else next();
};

exports.isAdmin = () => (req, res, next) => {
  const { username, password } = req.body;
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    next();
  } else {
    throw new CustomError('Not authorised', 401);
  }
};

exports.sessionUser = {
  username: process.env.ADMIN_USERNAME,
  role: process.env.ADMIN_ROLE
};
