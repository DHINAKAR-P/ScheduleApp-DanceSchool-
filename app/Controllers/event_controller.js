var service = require("../Services/event_service")

module.exports.create_event = function(req,res){
    var eventdetail = req.body;
    service.create_event(eventdetail, function (event){
        //res.status(201);
        res.json(event);
    })
}


module.exports.getall_event = function(req,res){
    service.getall_event(function (event){
        res.json(event);
    })
}