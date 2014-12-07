var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Comment = new Schema({
    toggleContact: Boolean,
    email : String,
    lastname : String,
    firstname: String,
    outtaTown: Boolean,
    streetAddress: String,
    cityAddress: String,
    zipAddress: Number,
    cellNo: Number,
    altPhone: Number,
    positions: Array,
    dates: Array
});

mongoose.model('Comment', Comment);

mongoose.connect('mongodb://localhost/nosey');