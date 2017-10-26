var userdetails = require('../Models/schedule_model');

module.exports.create_schedule = function(sch_detail, callback) {
  var company = new userdetails(sch_detail);
    company.save(function(err) {
    if (err) {
      res.send(err);
    }
    callback(sch_detail);
  });
};

module.exports.getall_schedule = function(callback) {
    userdetails.find(function(err, sch_detail) {
    if (err) {
      res.send(err);
    }
    callback(sch_detail);
  });
};


module.exports.update_schedule = function(sch_detail, callback) {
    userdetails.findOneAndUpdate({ _id: sch_detail._id },
  {
    $set:sch_detail
  }, {upsert: true, new: true}, function (err, sch_detail) {
   if (err) {
      res.send(err);
    }
    callback(sch_detail);
  });
};

module.exports.delete_schedule = function(sch_detail_id, callback) {	
    userdetails.findByIdAndRemove(sch_detail_id, function(err,sch_detail_id){
    if(err) {
      res.send(err); 
    }
    callback({message: "removed",sch_detail_id:sch_detail_id});
  });
};


/*exports.getCompanyById = function(corp_comp, callback) {
  corporatecompanydetails.findById({ _id:req.params.id }, function (err, company) {
    if(err) {
      res.send(err);
    }
    callback(corp_comp);
  });
};*/

