
var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    userID: String,
    userPW: String,
    userName: String,
    phoneNum: String,
    updated_at : {type: Date, default: Date.now},
});

module.exports = mongoose.model('Users', UsersSchema);