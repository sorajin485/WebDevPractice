
var express = require('express');

var router = express.Router();

var cow = require('../controllers/CowController.js');


router.get('/', cow.list);
router.post('/', cow.save);



router.get('/show/:id', cow.show);
router.get('/create', cow.create);
router.get('/edit/:id', cow.edit);
router.post('/update/:id', cow.update);
router.post('/delete/:id', cow.delete);


module.exports = router;