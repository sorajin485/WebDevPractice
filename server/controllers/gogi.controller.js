const mslmModel = require("../mslm/mslm.model.js");


exports.session_init = (req,res) => {
    if (!req.body) {
        res.status(400).send({
            message: "session_init : Content can not be empty!"
        });
    }else{
        console.log(req.body);
    }
    mslmModel.session_init(req.body["session-init"],(err,data) =>{
        if(err)
            res.status(500).send({
                "session-init-resp":{
                    result : err
                }
            });
        else{
            //req.session.state = "init";
            console.log("sessionID : ",req.sessionID);
            res.send({"session-init-resp":{
                result : "OK",
                date : data.date
            }});
        } 
    });
};


exports.authenticate_password = (req,res) =>{
    if (!req.body) {
        res.status(400).send({
            message: "authenticate_password : Content can not be empty!"
        });
    }else{
        console.log(req.body);
    }
    mslmModel.authenticate_password(req.body["authenticate-password"],(err,data) =>{
        if(err)
            res.status(500).send({
                "authenticate-password-resp" :{
                    result : err.result
                }
            });
        else
        {
            //req.session.state = "authenticate_password";
            //console.log("authenticate - req.session : ",req.session);
            console.log("test : ",data);
            res.send({
                "authenticate-password-resp" : {
                    result : data.result,
                    userKey : data.userKey
                }
            });
        } 
    });
};
exports.authenticate_otp = (req,res) =>{
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }else{
        console.log(req.body);
    }
    mslmModel.authenticate_otp(req.body["authenticate-otp"],(err,data)=>{
        if(err){
            res.status(500).send({
                "authenticate-otp-resp" :{
                    result : err.result
                }
            });
        }
        else{
            res.send({
                "authenticate-otp-resp" : {
                    result : data.result,
                    userKey : data.userKey
                }
            });
        }
    })
}
exports.get_resource_list = (req,res) =>{
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }else{
        console.log(req.body);
    }
    mslmModel.get_resource_list(req.body["get-resource-list"],(err,data) =>{
        if(err)
            res.status(500).send({
                "get-resource-list-resp":{
                    result : err.result
                }
            });
        else{
            res.send({ 
                "get-resource-list-resp" : {
                    result : "OK",
                    "resource-list" : data
                }
            });
        } 
    });
};

exports.allocate_resource = (req,res) =>{
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }else{
        console.log(req.body);
    }
    mslmModel.allocate_resource(req.body["allocate-resource"],(err,data) =>{
        if(err)
            res.status(500).send({
                "allocate-resource-resp" : {
                    result : err
                }
            });
        else{
            res.send({
                "allocate-resource-resp" : {
                    result : "OK",
                    resourceIP : data.resourceIP,
                    resourcePort1 : data.resourcePort1,
                    resourcePort2 : data.resourcePort2,
                    resourcePort3 : data.resourcePort3,
                    resourcePort4 : data.resourcePort4,
                    resourcePort5 : data.resourcePort5,
                }
            });
        } 
    });
};

/**
 * WEB->RM
 * WEB에서 요청하는 메시지 처리구간
 * delete, power on, power off 등
 */
exports.hw_forced_operation = (req,res) =>{
    if (!req.body) {
        res.status(400).send({
            message: "Content dcan not be empty!"
        });
    }
    console.log(req.body);
    mslmModel.hw_forced_operation(req.body["hw-forced-operation"],(err,data) =>{
        if(err)
            res.status(500).send({
                message:
                    err.message || "fail hw-forced-operation."
            });
        else{
            res.send(data);
        } 
    });
};

exports.perform_operation = (req,res) =>{
    if (!req.body) {
        res.status(400).send({
            message: "Content dcan not be empty!"
        });
    }
    console.log("perform_operation : ",req.body);
    mslmModel.perform_operation(req.body["perform-operation"],(err,data) =>{
        if(err)
            res.status(500).send({
                message:
                    err.message || "fail perform-operation."
            });
        else{
            res.send(data);
        } 
    });
};


/**
 * SM->RM 
 * SM에서 요청하는 메시지 처리구간
 * session 상태값에 따라 처리 
 * 
 */
exports.session_connect = (req,res) =>{
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log("mslm/session_connect : ",req.body);
    mslmModel.session_connect(req.body["connection-info"],(err,data) =>{
        if(err)
            res.status(500).send({
                message:
                    err.message || "fail session_connect."
            });
        else{
                res.send(data);
        } 
    });
    
};


// Create and Save a new Mslm
exports.create = (req, res) => {
    //console.log("SJP : " + req.body());
    console.log("SJP ip : " + req);
    
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Mslm
    const mslm = new mslmModel({
        ip: req.body.ip,
        name: req.body.name,
        active: req.body.active
    });
    
    // Save Mslm in the database
    mslmModel.create(mslm, (err, data) => {
        console.log("mslm : "+ mslm);
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Mslm."
            });
        else res.send(data);
    });
};

// Retrieve all Mslms from the database.
exports.findAll = (req, res) => {
    mslmModel.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving mslms."
            });
        else res.send(data);
    });
};

// Find a single Mslm with a mslmId
exports.findOne = (req, res) => {
    mslmModel.findById(req.params.mslmId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Mslm with id ${req.params.mslmId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Mslm with id " + req.params.mslmId
                });
            }
        } else res.send(data);
    });
};

// Update a Mslm identified by the mslmId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    mslmModel.updateById(
        req.params.mslmId,
        new mslmModel(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Mslm with id ${req.params.mslmId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Mslm with id " + req.params.mslmId
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a Mslm with the specified mslmId in the request
exports.delete = (req, res) => {
    mslmModel.remove(req.params.mslmId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Mslm with id ${req.params.mslmId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Mslm with id " + req.params.mslmId
                });
            }
        } else res.send({ message: `Mslm was deleted successfully!` });
    });
};

// Delete all Mslms from the database.
exports.deleteAll = (req, res) => {
    mslmModel.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all mslms."
            });
        else res.send({ message: `All Mslms were deleted successfully!` });
    });
};