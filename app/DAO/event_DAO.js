var eventdetails = require('../Models/event_model');

module.exports.create_event = function(event_detail, callback) {
  var eventdata = new eventdetails(event_detail);

  eventdata.save(function(err) {
    if (err) {
      res.send(err);
    }
    callback(eventdata);
  });
}

module.exports.getall_event = function(callback) {
  eventdetails.find(function(err, event_detail) {
    if (err) {
      res.send(err);
    }
    callback(event_detail);
  });
};