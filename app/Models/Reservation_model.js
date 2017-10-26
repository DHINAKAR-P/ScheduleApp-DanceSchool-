var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var User_model = require('./User_model')

var reservationdetails_schema = new mongoose.Schema({
    location:String,  
    date:Date,  
  // participents:[{ type: Schema.Types.ObjectId, ref: 'User_model'}],
});

var reservationdetails = mongoose.model('Reservation', reservationdetails_schema);
module.exports = reservationdetails;

