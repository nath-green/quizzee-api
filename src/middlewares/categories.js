const CustomError = require('../lib/custom-error');

const validCategories = ['general', 'music', 'sport'];

exports.isValid = () => (req, res, next) => {
  const { category } = req.params;

  if (!validCategories.includes(category)) {
    throw new CustomError('Category does not exist', 400);
  } else next();
};
