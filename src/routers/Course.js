
const express = require('express');
const courseController = require('../app/controllers/CourseController');
const router = express.Router();



router.post('/create/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:type?/:slug?', courseController.show);


module.exports = router;
