var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reservationdetails_schema = new mongoose.Schema({
    location:String,  
   // date:Date,
    eventid:{type:Schema.Types.ObjectId,ref:"Event"},
    //starttime: { type: Date,default: Date.now},
    //endtime:{ type: Date,default: Date.now},
    starttime:Date,
    endtime:Date,
   participents:{ type: Schema.Types.ObjectId, ref: 'User'},

});

var reservationdetails = mongoose.model('Reservation', reservationdetails_schema);
module.exports = reservationdetails;

