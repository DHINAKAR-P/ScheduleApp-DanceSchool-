var contactdetails = require('../Models/contact_model');

module.exports.create_contact = function(sch_detail, callback) {
  var company = new contactdetails(sch_detail);

  company.save(function(err) {
    if (err) {
      res.send(err);
    }
    callback(sch_detail);
  });
};

module.exports.getall_contact = function(callback) {
    contactdetails.find(function(err, sch_detail) {
    if (err) {
      res.send(err);
    }
    callback(sch_detail);
  });
};


module.exports.update_contact = function(sch_detail, callback) {
    contactdetails.findOneAndUpdate({ _id: sch_detail._id },
  {
    $set:sch_detail
  }, {upsert: true, new: true}, function (err, sch_detail) {
   if (err) {
      res.send(err);
    }
    callback(sch_detail);
  });
};

module.exports.delete_contact = function(sch_detail_id, callback) {	
    contactdetails.findByIdAndRemove(sch_detail_id, function(err,sch_detail_id){
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

