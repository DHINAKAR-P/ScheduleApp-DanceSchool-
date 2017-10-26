var dao = require("../DAO/Reservation_DAO")

module.exports.create_reservation = function(detail,callback) {
    dao.create_reservation(detail,function (reservation_detail){
      callback(reservation_detail);
    });
}

module.exports.update_reservation = function(details,callback) {
    dao.update_reservation(details,function (reservation_detail){
      callback(reservation_detail);
    });
}

module.exports.delete_reservation = function(reservation_detail_id,callback) {
    dao.delete_reservation(reservation_detail_id,function (reservation_detail_id){
      callback(reservation_detail_id);
    });
}

module.exports.getall_reservation = function(callback) {
    dao.getall_reservation(function (reservation_detail){
      callback(reservation_detail);
    });
}
