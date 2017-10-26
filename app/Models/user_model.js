var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var contactSchool=require('./contact_model')

var userdetails_schema = new mongoose.Schema({
name:String,
dob:Date,
usertype:String,
email:String,
phone:Number,
address:String,
qualification:String,
  
});

var userdetails = mongoose.model('User', userdetails_schema);
module.exports = userdetails;

