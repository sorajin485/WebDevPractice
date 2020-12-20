
var express = require('express');

var router = express.Router();

var chicken = require('../controllers/ChickenController.js');


router.get('/', chicken.list);
router.post('/', chicken.save);



router.get('/show/:id', chicken.show);
router.get('/create', chicken.create);
router.get('/edit/:id', chicken.edit);
router.post('/update/:id', chicken.update);
router.post('/delete/:id', chicken.delete);


module.exports = router;