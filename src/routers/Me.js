
const express = require('express');
const meController = require('../app/controllers/MeController');
const router = express.Router();
const upload = require('../util/multer');
const store = require('../util/multer');

router.post('/stored/post', store.single('imgPost'), meController.post);
router.get('/stored/post', meController.mypost);
router.get('/music', meController.music);
router.get('/listcourse/:type', meController.homeshow)
router.get('/profile', meController.showProfile);
router.post('/profile', meController.saveProfile);
router.put('/profile/update/:mssv', meController.updateInfor);
router.get('/stored/course', meController.show);
router.get('/course/update/:slug', meController.edit);
router.delete('/course/delete/:slug', meController.delete);
router.delete('/post/delete/:id', meController.deletePost);
router.put('/:slug', meController.update);


module.exports = router;
