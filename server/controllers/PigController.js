
var Pig = require("../models/Pig");
var pigController = {};
// 전체 직원 목록 보기
pigController.list = function (req, res) {
    Pig.find({}).exec((err, pig) => {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            console.log('pig: ',pig);
            res.send({data : pig});
        }
    });
};




// id 로 단일 직원 표시

pigController.show = function (req, res) {
    Pig.findOne({ _id: req.params.id }).exec(function (err, pig) {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            res.render("../views/pig/show", { pig: pig });
        }
    })
}




// 직원추가

pigController.create = function (req, res) {

    res.render("../views/pig/create");

};




// 직원 저장

pigController.save = function (req, res) {

    var pig = new Pig(req.body);




    pig.save(function (err) {

        if (err) {

            console.log(err);
            res.send("fail");
            //res.render("../views/pig/create");

        } else {

            console.log("Successfully create an pig");
            res.send("good");
            //res.redirect(`/pig/show/${pig._id}`);

        }

    });

};





// 직원 편집

pigController.edit = function (req, res) {

    Pig.findOne({ _id: req.params.id }).exec(function (err, pig) {

        if (err) {

            console.log(`Error : ${err}`);

        } else {

            res.render("../views/pig/edit", { pig: pig });

        }

    });

};





// 편집된 직원 업데이트

pigController.update = function (req, res) {

    Pig.findByIdAndUpdate(

        req.params.id, {
            $set:

            {

                name: req.body.name,

                address: req.body.address,

                position: req.body.position,

                salary: req.body.salary
            }

    },

        { new: true }, function (err, pig) {

            if (err) {

                console.log(err);

                res.render("../views/pig/edit", { pig: req.body });

            } else {

                res.redirect(`/pig/show/${pig._id}`);

            }

        });

};




// 단일 직원 데이터 제거

pigController.delete = function (req, res) {

    Pig.remove({ _id: req.params.id }, function (err) {

        if (err) {

            console.log(err);

        } else {

            console.log("Pig deleted!!");

            res.redirect("/pig");

        }

    });

};




module.exports = pigController;