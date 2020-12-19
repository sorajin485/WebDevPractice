
var mongoose = require('mongoose');

var cowSchema = new mongoose.Schema({
    title: String,
    explan: String,
    img: String,
    part: String
});
 
module.exports = new mongoose.model('cow', cowSchema);