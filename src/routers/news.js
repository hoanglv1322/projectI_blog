const express = require('express');
const newsController = require('../app/controllers/NewsController');
const router = express.Router();


router.get('/create', newsController.create);
router.post('/create/store', newsController.stored);
router.get('/:type', newsController.showDetails);

module.exports = router;