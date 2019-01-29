const router = require('express').Router();
const auth = require('../middlewares/auth');
const Question = require('../controllers/question.controller');

router.route('/').get(Question.random);
router.route('/:category').get(Question.randomByCategory);
router.route('/').post(auth.hasRole(2), Question.add);

module.exports = router;
