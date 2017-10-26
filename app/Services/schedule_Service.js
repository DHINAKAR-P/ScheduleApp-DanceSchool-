var dao = require("../DAO/schedule_DAO")

module.exports.create_schedule = function(detail,callback) {
    dao.create_schedule(detail,function (sch_detail){
      callback(sch_detail);
    });
}

module.exports.update_schedule = function(detail,callback) {
    dao.update_schedule(detail,function (sch_detail){
      callback(sch_detail);
    });
}

module.exports.delete_schedule = function(sch_detail_id,callback) {
    dao.delete_schedule(sch_detail_id,function (sch_detail_id){
      callback(sch_detail_id);
    });
}

module.exports.getall_schedule = function(callback) {
    dao.getall_schedule(function (sch_detail){
      callback(sch_detail);
    });
}
