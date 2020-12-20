
var Review = require("../models/Review");
var reviewController = {};
const EnDecryption = require('../security/EnDecryption.js');
const axios = require('axios');

// 전체 직원 목록 보기
reviewController.list = function (req, res) {
    Review.find({}).exec((err, review) => {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            console.log('review: ',review);
            res.send(review);
        }
    });
};




// id 로 단일 직원 표시

reviewController.show = function (req, res) {
    Review.findOne({ _id: req.params.id }).exec(function (err, review) {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            res.render("../views/review/show", { review: review });
        }
    })
}




// 직원추가

reviewController.create = function (req, res) {

    res.render("../views/review/create");

};





var SMS_body = {
    "type":"SMS",
    "contentType":"COMM",
    "countryCode":"82",
    "from":"01092425927",
    "content":"OTP",
    "messages":[
        {
            "to":"01092425927",
            "content":"default"
        }
    ]
}
var serviceId ="ncp:sms:kr:262362089003:sms";
var SMS_default_path = "https://sens.apigw.ntruss.com";
const AccessKey = "DCLTeUiKhM61KK3ZS64Q";
const SecretKey = "W9tJSEoF2MwsNFrHw6Ez3D9epMj3WIIFTTZjDVp6";
var SMS_url ="/sms/v2/services/"+serviceId+"/messages";
var SMS_send_url = SMS_default_path+"/sms/v2/services/ncp:sms:kr:262362089003:sms/messages";
reviewController.save = function (req, res) {

    var review = new Review({ name:req.session.loginInfo.userName,
                            text:req.body.text});
    
    review.save(function (err) {
        if (err) {
            console.log(err);
            res.send("fail");
            //res.render("../views/review/create");

        } else {
            let time = new Date().getTime();
            time = "" + time;
            var hash = EnDecryption.SMS_HMAC("POST", SMS_url, time, AccessKey, SecretKey);
            var encoded_hash = new Buffer.from(hash).toString('base64');
            console.log("SMSurl : ", SMS_url);
            console.log("SMS_send_url : ", SMS_send_url);
            console.log("x-ncp-apigw-timestamp  : ", time);
            console.log("x-ncp-iam-access-key  : ", AccessKey);
            console.log("x-ncp-apigw-signature-v2  : ", encoded_hash);
            var msg = SMS_body;
            console.log("phoneNum : ",req.session.loginInfo.userPhone);
            console.log("res : ", req.body.text);
            msg.messages[0].to = req.session.loginInfo.userPhone;
            msg.messages[0].content = req.body.text;
            axios.post(SMS_send_url,
                msg,
                {
                headers:{
                  'Content-Type': 'application/json',
                  'x-ncp-apigw-timestamp': time,
                  'x-ncp-iam-access-key':AccessKey,
                  'x-ncp-apigw-signature-v2':encoded_hash
                }
              }).then(function (response){
                console.log("sms resp : ",response.data);
                res.send("OK");
              }).catch(e => {
                console.log("USER-PROVE-OTP-SEND-ERROR : ",e.response);
                res.send("Fail");
              })
            console.log("Successfully create an review");
        }
    });
};





// 직원 편집

reviewController.edit = function (req, res) {

    Review.findOne({ _id: req.params.id }).exec(function (err, review) {

        if (err) {

            console.log(`Error : ${err}`);

        } else {

            res.render("../views/review/edit", { review: review });

        }

    });

};





// 편집된 직원 업데이트

reviewController.update = function (req, res) {

    Review.findByIdAndUpdate(

        req.params.id, {
            $set:

            {

                name: req.body.name,

                address: req.body.address,

                position: req.body.position,

                salary: req.body.salary
            }

    },

        { new: true }, function (err, review) {

            if (err) {

                console.log(err);

                res.render("../views/review/edit", { review: req.body });

            } else {

                res.redirect(`/review/show/${review._id}`);

            }

        });

};




// 단일 직원 데이터 제거

reviewController.delete = function (req, res) {

    Review.remove({ _id: req.params.id }, function (err) {

        if (err) {

            console.log(err);

        } else {

            console.log("Review deleted!!");

            res.redirect("/review");

        }

    });

};




module.exports = reviewController;