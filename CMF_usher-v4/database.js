var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Comment = new Schema({
    email : String,
    lastname : String,
    firstname: String,
    streetAddress: String,
    cityAddress: String,
    zipAddress: Number,
    cellNo: Number,
    altPhone: Number,
});

// This puts the data into the correct 'collection'

mongoose.model('Comment', Comment);

// This puts the data into the correct database

mongoose.connect('mongodb://localhost/nosey');