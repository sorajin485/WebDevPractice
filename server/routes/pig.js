
var express = require('express');

var router = express.Router();

var pig = require('../controllers/PigController.js');


router.get('/', pig.list);
router.post('/', pig.save);




router.get('/show/:id', pig.show);
router.get('/create', pig.create);
router.get('/edit/:id', pig.edit);
router.post('/update/:id', pig.update);
router.post('/delete/:id', pig.delete);


module.exports = router;