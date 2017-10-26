var dao = require("../DAO/business_DAO")

module.exports.create_business = function(detail,callback) {
    dao.create_business(detail,function (sch_detail){
      callback(sch_detail);
    });
}

module.exports.update_business = function(detail,callback) {
    dao.update_business(detail,function (sch_detail){
      callback(sch_detail);
    });
}
module.exports.findbyownerid_business =function(ownerId,callback){
  dao.findbyownerid_business(ownerId,function(businessdetail){
    callback(businessdetail);
  });
}

module.exports.delete_business = function(sch_detail_id,callback) {
    dao.delete_business(sch_detail_id,function (sch_detail_id){
      callback(sch_detail_id);
    });
}

module.exports.getall_business = function(callback) {
    dao.getall_business(function (sch_detail){
      callback(sch_detail);
    });
}
