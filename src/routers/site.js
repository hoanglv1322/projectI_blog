const express = require('express');
const newsController = require('../app/controllers/SiteController');
const router = express.Router();
const bodyParser = require('body-parser');
const validator = require('../util/validator');

const urlencodeParse = bodyParser.urlencoded({extended: false});

router.get('/homepage', newsController.showHomePage);
router.post('/', newsController.signIn);
router.get('/home/signup', newsController.signUpshow );
router.post('/home/signup', urlencodeParse, validator, newsController.signUp );
router.get('/home/signout', newsController.signOut);
router.get('/', newsController.show);

module.exports = router;
