
var Users = require("../models/Users");
var usersController = {};

usersController.signup = (req,res) => {
    console.log("usersController : req.body: ",req.body);
    var users = new Users(req.body);
    users.save( (err) => {
        if (err) {
            console.log(err);
            res.send("fail");
            //res.render("../views/userss/create");
        } else {
            console.log("Successfully create an users");
            res.send("good");
            //res.redirect(`/userss/show/${users._id}`);
        }
    });
}



// 전체 직원 목록 보기
usersController.list = function (req, res) {
    Users.find({}).exec(function (err, userss) {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            res.send({userss: userss});
            //res.render("../views/userss/index", { userss: userss });
        }
    });
};




// id 로 단일 직원 표시

usersController.show = function (req, res) {
    Users.findOne({ _id: req.params.id }).exec(function (err, users) {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            res.render("../views/userss/show", { users: users });
        }
    })
}




// 직원추가

usersController.create = function (req, res) {

    res.render("../views/userss/create");

};




// 직원 저장

usersController.save = function (req, res) {

    var users = new Users(req.body);




    users.save(function (err) {

        if (err) {

            console.log(err);
            res.send("fail");
            //res.render("../views/userss/create");

        } else {

            console.log("Successfully create an users");
            res.send("good");
            //res.redirect(`/userss/show/${users._id}`);

        }

    });

};





// 직원 편집

usersController.edit = function (req, res) {

    Users.findOne({ _id: req.params.id }).exec(function (err, users) {

        if (err) {

            console.log(`Error : ${err}`);

        } else {

            res.render("../views/userss/edit", { users: users });

        }

    });

};





// 편집된 직원 업데이트

usersController.update = function (req, res) {

    Users.findByIdAndUpdate(

        req.params.id, {
            $set:

            {

                name: req.body.name,

                address: req.body.address,

                position: req.body.position,

                salary: req.body.salary
            }

    },

        { new: true }, function (err, users) {

            if (err) {

                console.log(err);

                res.render("../views/userss/edit", { users: req.body });

            } else {

                res.redirect(`/userss/show/${users._id}`);

            }

        });

};




// 단일 직원 데이터 제거

usersController.delete = function (req, res) {

    Users.remove({ _id: req.params.id }, function (err) {

        if (err) {

            console.log(err);

        } else {

            console.log("Users deleted!!");

            res.redirect("/userss");

        }

    });

};




module.exports = usersController;