
var mongoose = require('mongoose');

var chickenSchema = new mongoose.Schema({
    title: String,
    explan: String,
    img: String,
    part: String
});
 
module.exports = new mongoose.model('Chicken', chickenSchema);