
var Review = require("../models/Review");
var reviewController = {};
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




// 직원 저장

reviewController.save = function (req, res) {

    var review = new Review(req.body);
    review.save(function (err) {
        if (err) {
            console.log(err);
            res.send("fail");
            //res.render("../views/review/create");

        } else {

            console.log("Successfully create an review");
            res.send("OK");
            //res.redirect(`/review/show/${review._id}`);

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