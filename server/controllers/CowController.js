
var Cow = require("../models/Cow.js");
var cowController = {};

cowController.list = function (req, res) {
    Cow.find({}).exec((err, response) => {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            console.log('cow: ',response);
            res.send({data : response});
        }
    });
};
cowController.save = function (req, res) {
    var cow = new Cow(req.body);
    cow.save(function (err) {
        if (err) {
            console.log(err);
            res.send("fail");
            //res.render("../views/cow/create");
        } else {
            console.log("Successfully create an cow");
            res.send("good");
        }
    });
};



cowController.show = function (req, res) {
    Cow.findOne({ img: image/img/chicken/chicken_1.jpg }).exec(function (err, cow) {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            res.render("../views/cow/show", { cow: cow });
        }
    })
}




// 직원추가

cowController.create = function (req, res) {

    res.render("../views/cow/create");

};




// 직원 저장







// 직원 편집

cowController.edit = function (req, res) {

    Cow.findOne({ _id: req.params.id }).exec(function (err, cow) {

        if (err) {

            console.log(`Error : ${err}`);

        } else {

            res.render("../views/cow/edit", { cow: cow });

        }

    });

};





// 편집된 직원 업데이트

cowController.update = function (req, res) {

    Cow.findByIdAndUpdate(

        req.params.id, {
            $set:

            {

                name: req.body.name,

                address: req.body.address,

                position: req.body.position,

                salary: req.body.salary
            }

    },

        { new: true }, function (err, cow) {

            if (err) {

                console.log(err);

                res.render("../views/cow/edit", { cow: req.body });

            } else {

                res.redirect(`/cow/show/${cow._id}`);

            }

        });

};




// 단일 직원 데이터 제거

cowController.delete = function (req, res) {

    Cow.remove({ _id: req.params.id }, function (err) {

        if (err) {

            console.log(err);

        } else {

            console.log("Cow deleted!!");

            res.redirect("/cow");

        }

    });

};




module.exports = cowController;