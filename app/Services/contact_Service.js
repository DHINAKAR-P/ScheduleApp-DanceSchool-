var dao = require("../DAO/contact_DAO")

module.exports.create_contact = function(detail,callback) {
    dao.create_contact(detail,function (sch_detail){
      callback(sch_detail);
    });
}

module.exports.update_contact = function(detail,callback) {
    dao.update_contact(detail,function (sch_detail){
      callback(sch_detail);
    });
}

module.exports.delete_contact = function(sch_detail_id,callback) {
    dao.delete_contact(sch_detail_id,function (sch_detail_id){
      callback(sch_detail_id);
    });
}

module.exports.getall_contact = function(callback) {
    dao.getall_contact(function (sch_detail){
      callback(sch_detail);
    });
}
