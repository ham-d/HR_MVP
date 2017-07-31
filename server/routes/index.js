var router = require('express').Router();

router.use('/shows', require('./showsRouter'));

module.exports = router;