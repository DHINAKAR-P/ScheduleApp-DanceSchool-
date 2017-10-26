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

module.exports.delete_event = function(event_detail_id,callback) {
  dao.delete_event(event_detail_id,function (event_id){
    callback(event_id);
  });
}

module.exports.update_event = function(event_data,callback) {
  dao.update_event(event_data,function (event_detail){
    callback(event_detail);
  });
}

module.exports.findbyhostid_event =function(hostId,callback){
  dao.findbyhostid_event(hostId,function(eventdata){
    callback(eventdata);
  });
}