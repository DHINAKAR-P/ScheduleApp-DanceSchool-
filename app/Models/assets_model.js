var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assetsdetails_schema = new mongoose.Schema({
  //  assetid:Number,
    assetname:String,
    assettype:String,//for now it is Non human resources
    assetcategory:String,
    associatedcost:Number,
   businessid:{ type: Schema.Types.ObjectId, ref: 'Business'}
});

var assetdetails = mongoose.model('Asset', assetsdetails_schema);
module.exports = assetdetails;

