const express = require('express');
const gamesController = require('../app/controllers/GameController');
const router = express.Router();

router.get('/create', gamesController.create);
router.post('/create/store', gamesController.stored);
router.get('/:type', gamesController.showDetails);


module.exports = router;