
var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    name: String,
    text: String
});
 
module.exports = new mongoose.model('Review', reviewSchema);