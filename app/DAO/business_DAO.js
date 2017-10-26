var trainerdetails = require('../Models/business_model');

module.exports.create_business = function(business_detail, callback) {
  var businessdata = new trainerdetails(business_detail);

  businessdata.save(function(err) {
    if (err) {
      res.send(err);
    }
    callback(businessdata);
  });
};

module.exports.getall_business = function(callback) {
  trainerdetails.find(function(err, sch_detail) {
    if (err) {
      res.send(err);
    }
    callback(sch_detail);
  });
};


module.exports.update_business = function(sch_detail, callback) {
  trainerdetails.findOneAndUpdate({ _id: sch_detail._id },
  {
    $set:sch_detail
  }, {upsert: true, new: true}, function (err, sch_detail) {
   if (err) {
      res.send(err);
    }
    callback(sch_detail);
  });
};

module.exports.findbyownerid_business =function(ownerId,callback){
  console.log("--owner id ---- > ",ownerId);
  trainerdetails.findOne({ owner: ownerId },'owner name phone city',function (err, business_detail) {
     if (err) {
        res.send(err);
      }
      console.log("---business by owner ID--- > ",business_detail);
      callback(business_detail);
    });
}

module.exports.delete_business = function(sch_detail_id, callback) {	
  trainerdetails.findByIdAndRemove(sch_detail_id, function(err,sch_detail_id){
    if(err) {
      res.send(err); 
    }
    callback({message: "removed",business_detail_id:sch_detail_id});
  });
};