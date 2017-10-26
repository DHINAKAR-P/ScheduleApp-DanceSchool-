var mongoose = require('mongoose');
var AssetSchool=require('./assets_model')
var userSchool=require('./user_model')
var Schema = mongoose.Schema;

var scheduledetails_schema = new mongoose.Schema({
event_name:String,
start_time:String,
end_time:String,  
date:Date,     
listofassets:[{ type: Schema.Types.ObjectId, ref: 'AssetSchool'}],
listofuser:[{ type: Schema.Types.ObjectId, ref: 'userSchool'}],
});

var scheduledetails = mongoose.model('ScheduleSchool', scheduledetails_schema);
module.exports = scheduledetails;

