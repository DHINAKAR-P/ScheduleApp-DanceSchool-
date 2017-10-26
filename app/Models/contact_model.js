var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactdetails_schema = new mongoose.Schema({
name:String,
phone:Number,
address:String,
email:String,       
});

var contactdetails = mongoose.model('contactSchool', contactdetails_schema);
module.exports = contactdetails;

