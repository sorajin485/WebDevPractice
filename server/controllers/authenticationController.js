
const authenticationModel = require("../models/authentication.model.js");

exports.signup = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "session_init : Content can not be empty!"
        });
    }else{
        console.log(req.body);
    }
    // CHECK USERNAME FORMAT
    // 유저네임으로 사용할 수 있는 문자는 영어와 숫자 뿐
    let usernameRegex = /^[a-z0-9]+$/;
    if(!usernameRegex.test(req.body.admin_id)) {
        return res.status(400).json({ // HTTP 요청에 대한 리스폰스 (json 형식으로)
            error: "BAD USERNAME",
            code: 1
        });
    }
    // CHECK PASS LENGTH
    // 비밀번호 유형 검사 (4보다 작거나, 들어온 비밀번호의 값이 문자열이 아닐 경우)
    if(req.body.admin_pw.length < 4 || typeof req.body.admin_pw !== "string") {
        return res.status(400).json({
            error: "BAD PASSWORD",
            code: 2
        });
    }

    // CHECK USER EXISTANCE
    // 기존에 존재하는 username 이 있는지 DB 에서 확인
    authenticationModel.signup(req.body["authentication-signup"],(err,data) => {
        //TODO: err추가해야함
        if(err){
            res.send({"authentication-signin-resp":{
                result : "Fail",
            }});
        }else{
            res.send({"authentication-signin-resp":{
                result : "OK",
                date : data.date,
            }});
        }

        
    });
};
exports.signin = (req, res) => {
    // 비밀번호 데이터 타입 검사 (문자열인지 아닌지)
    if(typeof req.body["authentication-signin"].admin_pw !== "string") {
        return res.status(401).json({
            error: "PASSWORD IS NOT STRING",
            code: 1
        });
    }
    // FIND THE USER BY USERNAME
    // Model 메소드로 admin_id 와 같은 DB 검색 (첫번째 인자 : Query)
    authenticationModel.signin(req.body["authentication-signin"],(err,data) =>{
        if(err){
            return res.status(401).json({
                error: "PASSWORD IS NOT CORRECT",
                code: 3
            });
        }else{
            let session = req.session;
            session.loginInfo = {
                _id: data.admin_id,
                username: data.name
            };
            return res.json({
                success: true
            });
        }
    });
};

