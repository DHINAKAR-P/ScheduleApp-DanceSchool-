var dao = require("../DAO/user_DAO")

module.exports.create_user = function(detail,callback) {
    dao.create_user(detail,function (sch_detail){
      callback(sch_detail);
    });
}

module.exports.update_user = function(detail,callback) {
    dao.update_user(detail,function (sch_detail){
      callback(sch_detail);
    });
}

module.exports.delete_user = function(sch_detail_id,callback) {
    dao.delete_user(sch_detail_id,function (sch_detail_id){
      callback(sch_detail_id);
    });
}

module.exports.getall_user = function(callback) {
    dao.getall_user(function (sch_detail){
      callback(sch_detail);
    });
}
