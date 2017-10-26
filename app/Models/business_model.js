var mongoose = require('mongoose');
var contactSchool=require('./contact_model')
var Schema = mongoose.Schema;

var businessdetails_schema = new mongoose.Schema({
name:String,
location:String,
city:String,
phone:Number,
logo:Buffer,

owner:{ type: Schema.Types.ObjectId, ref: 'User'}
});

var businessdetails = mongoose.model('Business', businessdetails_schema);
module.exports = businessdetails;

