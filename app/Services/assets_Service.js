var dao = require("../DAO/assets_DAO")

module.exports.create_asset = function(detail,callback) {
    dao.create_asset(detail,function (sch_detail){
      callback(sch_detail);
    });
}

module.exports.update_asset = function(detail,callback) {
    dao.update_asset(detail,function (sch_detail){
      callback(sch_detail);
    });
}

module.exports.delete_asset = function(sch_detail_id,callback) {
    dao.delete_asset(sch_detail_id,function (sch_detail_id){
      callback(sch_detail_id);
    });
}

module.exports.getall_asset = function(callback) {
    dao.getall_asset(function (sch_detail){
      callback(sch_detail);
    });
}
