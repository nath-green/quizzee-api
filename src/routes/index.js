const router = require('express').Router();
const sessionRoutes = require('./session.routes');
const questionRoutes = require('./question.routes');

router.use('/', sessionRoutes);
router.use('/question', questionRoutes);

module.exports = router;
