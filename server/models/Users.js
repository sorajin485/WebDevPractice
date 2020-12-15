
var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    userID: String,
    userPW: String,
    Name: String,
    phoneNum: Number,
    updated_at : {type: Date, default: Date.now},
});

module.exports = mongoose.model('Users', UsersSchema);