
var Gogi = require("../models/Gogi");
var gogiController = {};
// 전체 직원 목록 보기
gogiController.list = function (req, res) {
    Gogi.find({}).exec(function (err, gogis) {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            res.send({gogis: gogis});
            //res.render("../views/gogis/index", { gogis: gogis });
        }
    });
};




// id 로 단일 직원 표시

gogiController.show = function (req, res) {
    Gogi.findOne({ _id: req.params.id }).exec(function (err, gogi) {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            res.render("../views/gogis/show", { gogi: gogi });
        }
    })
}




// 직원추가

gogiController.create = function (req, res) {

    res.render("../views/gogis/create");

};




// 직원 저장

gogiController.save = function (req, res) {

    var gogi = new Gogi(req.body);




    gogi.save(function (err) {

        if (err) {

            console.log(err);
            res.send("fail");
            //res.render("../views/gogis/create");

        } else {

            console.log("Successfully create an gogi");
            res.send("good");
            //res.redirect(`/gogis/show/${gogi._id}`);

        }

    });

};





// 직원 편집

gogiController.edit = function (req, res) {

    Gogi.findOne({ _id: req.params.id }).exec(function (err, gogi) {

        if (err) {

            console.log(`Error : ${err}`);

        } else {

            res.render("../views/gogis/edit", { gogi: gogi });

        }

    });

};





// 편집된 직원 업데이트

gogiController.update = function (req, res) {

    Gogi.findByIdAndUpdate(

        req.params.id, {
            $set:

            {

                name: req.body.name,

                address: req.body.address,

                position: req.body.position,

                salary: req.body.salary
            }

    },

        { new: true }, function (err, gogi) {

            if (err) {

                console.log(err);

                res.render("../views/gogis/edit", { gogi: req.body });

            } else {

                res.redirect(`/gogis/show/${gogi._id}`);

            }

        });

};




// 단일 직원 데이터 제거

gogiController.delete = function (req, res) {

    Gogi.remove({ _id: req.params.id }, function (err) {

        if (err) {

            console.log(err);

        } else {

            console.log("Gogi deleted!!");

            res.redirect("/gogis");

        }

    });

};




module.exports = gogiController;