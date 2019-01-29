/*
when next(err) is called, express will jump to the error handling
middleware, therefore this should be the last middleware in the chain.

this is the only middleware that takes the 'err' parameter, it must take 4 params
*/

module.exports = () => (err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    delete err.stack;
  }

  res.status(err.status || 500).json({ code: err.status, message: err.message });
};
