var reservationdetails = require('../Models/Reservation_model');

module.exports.create_reservation = function(reservation_detail, callback) {
 
  var reservation = new reservationdetails(reservation_detail);

  reservation.save(function(err) {
    if (err) {
      res.send(err);
    }
    callback(reservation);
  });
};


module.exports.getall_reservation = function(callback) {
  reservationdetails.find(function(err, reservation_detail) {
    if (err) {
      res.send(err);
    }
    callback(reservation_detail);
  });
};


module.exports.update_reservation = function(reservation_detail, callback) {
  reservationdetails.findOneAndUpdate({ _id: reservation_detail._id },
  {
    $set:reservation_detail
  }, {upsert: true, new: true}, function (err, reservation_detail) {
   if (err) {
      res.send(err);
    }
    callback(reservation_detail);
  });
};

module.exports.delete_reservation = function(reservation_detail_id, callback) {	
  reservationdetails.findByIdAndRemove(reservation_detail_id, function(err,reservation_detail_id){
    if(err) {
      res.send(err); 
    }
    callback({message: "removed",reservation_detail_id:reservation_detail_id});
  });
};

module.exports.findbyparticipent_reservation =function(participentid,callback){
  console.log("--participent id ---- > ",participentid);
  reservationdetails.find({ participents: participentid },'location starttime endtime eventid participents',function (err, reservation_detail) {
     if (err) {
        res.send(err);
      }
      console.log("---reservation by participent_id ID--- > ",reservation_detail);
      callback(reservation_detail);
    });
}


module.exports.findbyeventid_reservation =function(eventid,callback){
  console.log("--participent id ---- > ",eventid);
  reservationdetails.find({ eventid: eventid },'location starttime endtime eventid participents',function (err, reservation_detail) {
     if (err) {
        res.send(err);
      }
      console.log("---reservation by participent_id ID--- > ",reservation_detail);
      callback(reservation_detail);
    });
}
