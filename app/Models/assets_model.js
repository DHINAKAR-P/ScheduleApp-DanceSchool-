var mongoose = require('mongoose');
var contactSchool=require('./contact_model')
var Schema = mongoose.Schema;

var assetsdetails_schema = new mongoose.Schema({
name:String,
model:String,
listofcontacts:[{ type: Schema.Types.ObjectId, ref: 'contactSchool'}],
});

var assetdetails = mongoose.model('Asset', assetsdetails_schema);
module.exports = assetdetails;

