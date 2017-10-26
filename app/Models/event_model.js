var mongoose = require('mongoose');
var user=require('./user_model')
var Schema = mongoose.Schema;


var eventdata = new Schema({
    title:String,
    filledslot:String,
    availableslot:String,
    description:String,
    eventtype:String,
    status:String,
    
    business_id:{ type: Schema.Types.ObjectId, ref: 'Business'},
    //assetid:{ type: Schema.Types.ObjectId, ref: 'Asset'},
    host:{ type: Schema.Types.ObjectId, ref: 'User'},

    });
    
    var event = mongoose.model('Event', eventdata);
    module.exports = event;
    