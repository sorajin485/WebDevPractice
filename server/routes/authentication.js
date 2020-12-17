var express = require('express');
var router = express.Router();
const authenticationController = require("../controllers/authenticationController.js");
router.get('/getinfo', (req, res) => {
    if(typeof req.session.loginInfo === "undefined") {
        return res.status(401).json({
            error: "THERE IS NO LOGIN DATA",
            code: 1
        });
    }
 
    res.json({ info: req.session.loginInfo });
});
router.post('/logout', (req, res) => {
    // req.session.destroy() 메소드로 세션을 파괴
    req.session.destroy(err => { if(err) throw err; });
    return res.json({ sucess: true });
});



router.post('/signin',authenticationController.signin);

router.post('/signup',authenticationController.signup);
