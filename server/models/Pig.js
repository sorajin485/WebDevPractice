
var mongoose = require('mongoose');

var pigSchema = new mongoose.Schema({
    title: String,
    explan: String,
    img: String,
    part: String
});
 
module.exports = new mongoose.model('Pig', pigSchema);