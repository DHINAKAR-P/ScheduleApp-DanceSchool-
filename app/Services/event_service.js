var dao = require("../DAO/event_DAO")
module.exports.create_event = function(eventdetail,callback) {
    dao.create_event(eventdetail,function (event){
      callback(event);
    });
}

module.exports.getall_event = function(callback) {
  dao.getall_event(function (event_detail){
    callback(event_detail);
  });
}
