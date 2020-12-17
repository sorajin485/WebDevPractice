
var express = require('express');
var router = express.Router();
var users = require('../controllers/UsersController.js');

router.get('/getInfo', (req, res) => {
    if(typeof req.session.loginInfo === "undefined") {
        return res.status(401).json({
            error: "THERE IS NO LOGIN DATA",
            code: 1
        });
    }
    res.send( req.session.loginInfo);
});
router.post('/logout', (req, res) => {
    // req.session.destroy() 메소드로 세션을 파괴
    req.session.destroy(err => { if(err) throw err; });
    return res.json({ sucess: true });
});

router.post('/signup', users.signup);
router.post('/signin', users.signin);


router.get('/', users.list);
router.get('/show/:id', users.show);
router.get('/create', users.create);
router.post('/save', users.save);
router.get('/edit/:id', users.edit);
router.post('/update/:id', users.update);
router.post('/delete/:id', users.delete);


module.exports = router;