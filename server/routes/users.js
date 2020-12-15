
var express = require('express');
var router = express.Router();
var users = require('../controllers/UsersController.js');

router.post('/signup', users.signup);
//router.post('/signup', users.signin);


router.get('/', users.list);
router.get('/show/:id', users.show);
router.get('/create', users.create);
router.post('/save', users.save);
router.get('/edit/:id', users.edit);
router.post('/update/:id', users.update);
router.post('/delete/:id', users.delete);


module.exports = router;