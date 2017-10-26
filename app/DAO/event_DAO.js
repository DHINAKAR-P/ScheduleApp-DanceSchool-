var eventdetails = require('../Models/event_model');

module.exports.create_event = function(event_detail, callback) {
  var eventdata = new eventdetails(event_detail);

  eventdata.save(function(err) {
    if (err) {
      res.send(err);
    }
    callback(eventdata);
  });
}

module.exports.getall_event = function(callback) {
  eventdetails.find(function(err, event_detail) {
    if (err) {
      res.send(err);
    }
    callback(event_detail);
  });
};

module.exports.delete_event = function(eventdata_id, callback) {	
  eventdetails.findByIdAndRemove(eventdata_id, function(err,event_detail_id){
    if(err) {
      res.send(err); 
    } 
    callback({message: "removed",event_id:event_detail_id});
  });
};

module.exports.update_event= function(event_detail, callback) {
  eventdetails.findOneAndUpdate({ _id: event_detail._id },
  {
    $set:event_detail
  }, {upsert: true, new: true}, function (err, event_detail) {
   if (err) {
      res.send(err);
    }
    callback(event_detail);
  });
};

module.exports.findbyhostid_event =function(hostId,callback){
  console.log("--host id ---- > ",hostId);
  eventdetails.findOne({ host: hostId },'title filledslot availableslot description eventtype status business_id',function (err, event_data) {
     if (err) {
        res.send(err);
      }
      console.log("---event by host ID--- > ",event_data);
      callback(event_data);
    });
}


module.exports.findbyassetid_event =function(assetId,callback){
  console.log("--asset Id ---- > ",assetId);
  eventdetails.find({ assetid: assetId },'title filledslot availableslot description eventtype status business_id',function (err, event_data) {
     if (err) {
        res.send(err);
      }
      console.log("---event by asset ID--- > ",event_data);
      callback(event_data);
    });
}