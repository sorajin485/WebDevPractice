
var Chicken = require("../models/Chicken");
var chickenController = {};
// 전체 직원 목록 보기
chickenController.list = function (req, res) {
    Chicken.find({}).exec((err, chicken) => {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            console.log('chicken: ',chicken);
            res.send({data : chicken});
        }
    });
};




// id 로 단일 직원 표시

chickenController.show = function (req, res) {
    Chicken.findOne({ _id: req.params.id }).exec(function (err, chicken) {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            res.render("../views/chicken/show", { chicken: chicken });
        }
    })
}




// 직원추가

chickenController.create = function (req, res) {

    res.render("../views/chicken/create");

};




// 직원 저장

chickenController.save = function (req, res) {

    var chicken = new Chicken(req.body);




    chicken.save(function (err) {

        if (err) {

            console.log(err);
            res.send("fail");
            //res.render("../views/chicken/create");

        } else {

            console.log("Successfully create an chicken");
            res.send("good");
            //res.redirect(`/chicken/show/${chicken._id}`);

        }

    });

};





// 직원 편집

chickenController.edit = function (req, res) {

    Chicken.findOne({ _id: req.params.id }).exec(function (err, chicken) {

        if (err) {

            console.log(`Error : ${err}`);

        } else {

            res.render("../views/chicken/edit", { chicken: chicken });

        }

    });

};





// 편집된 직원 업데이트

chickenController.update = function (req, res) {

    Chicken.findByIdAndUpdate(

        req.params.id, {
            $set:

            {

                name: req.body.name,

                address: req.body.address,

                position: req.body.position,

                salary: req.body.salary
            }

    },

        { new: true }, function (err, chicken) {

            if (err) {

                console.log(err);

                res.render("../views/chicken/edit", { chicken: req.body });

            } else {

                res.redirect(`/chicken/show/${chicken._id}`);

            }

        });

};




// 단일 직원 데이터 제거

chickenController.delete = function (req, res) {

    Chicken.remove({ _id: req.params.id }, function (err) {

        if (err) {

            console.log(err);

        } else {

            console.log("Chicken deleted!!");

            res.redirect("/chicken");

        }

    });

};




module.exports = chickenController;