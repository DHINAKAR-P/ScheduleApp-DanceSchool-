var assetdetails = require('../Models/assets_model');


module.exports.create_asset = function(sch_detail, callback) {
  var company = new assetdetails(sch_detail);
console.log(sch_detail)
  company.save(function(err) {
    if (err) {
      res.send(err);
    }
    callback(sch_detail);
  });
};

module.exports.getall_asset = function(callback) {
  assetdetails.find(function(err, sch_detail) {
    if (err) {
      res.send(err);
    }
    callback(sch_detail);
  });
};


module.exports.update_asset = function(sch_detail, callback) {
  assetdetails.findOneAndUpdate({ _id: sch_detail._id },
  {
    $set:sch_detail
  }, {upsert: true, new: true}, function (err, sch_detail) {
   if (err) {
      res.send(err);
    }
    callback(sch_detail);
  });
};

module.exports.delete_asset = function(sch_detail_id, callback) {	
  assetdetails.findByIdAndRemove(sch_detail_id, function(err,sch_detail_id){
    if(err) {
      res.send(err); 
    }
    callback({message: "removed",sch_detail_id:sch_detail_id});
  });
};

module.exports.findbybusinessid_asset =function(business_id,callback){
  console.log("--business id ---- > ",business_id);
  assetdetails.find({ businessid: business_id },'assetname assettype assetcategory associatedcost businessid',function (err, asset_detail) {
     if (err) {
        res.send(err);
      }
      console.log("---asset by business_id ID--- > ",asset_detail);
      callback(asset_detail);
    });
}