var router = require('express').Router();
var controller = require('../controller/showController');

router.get('/fetchAllShows', controller.fetchAllShows);
router.post('/addShow', controller.addShow);
router.put('/editRating', controller.editRating);
router.delete('/deleteShow', controller.deleteShow);

module.exports = router;