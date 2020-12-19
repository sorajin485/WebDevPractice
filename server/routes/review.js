
var express = require('express');

var router = express.Router();

var review = require('../controllers/ReviewController.js');


router.get('/', review.list);
router.post('/', review.save);
router.get('/show/:id', review.show);
router.get('/create', review.create);

router.get('/edit/:id', review.edit);
router.post('/update/:id', review.update);
router.post('/delete/:id', review.delete);


module.exports = router;