const router = require('express').Router();
const auth = require('../middlewares/auth');
const Question = require('../controllers/question.controller');

router.route('/').get(Question.list);
router.route('/:id').get(Question.getById);
router.route('/').post(auth.hasRole(2), Question.add);
router.route('/:id').patch(auth.hasRole(2), Question.updateById);
router.route('/:id').delete(auth.hasRole(2), Question.deleteById);

module.exports = router;
