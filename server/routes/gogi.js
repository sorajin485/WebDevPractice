
var express = require('express');

var router = express.Router();

var gogi = require('../controllers/GogiController.js');


router.get('/', gogi.list);
router.get('/show/:id', gogi.show);
router.get('/create', gogi.create);
router.post('/save', gogi.save);
router.get('/edit/:id', gogi.edit);
router.post('/update/:id', gogi.update);
router.post('/delete/:id', gogi.delete);


module.exports = router;