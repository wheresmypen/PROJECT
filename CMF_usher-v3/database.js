var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Comment = new Schema({
    email : String,
    lastname : String,
    firstname: String,
    outtatown: Boolean,
    streetaddress: String,
    cityaddress: String,
    zipaddress: Number,
    cellNo: Number,
    altPhone: Number,
    toggleContact: String,
    positions: Array,
    dates: Array
});

mongoose.model('Comment', Comment);

mongoose.connect('mongodb://localhost/nosey');