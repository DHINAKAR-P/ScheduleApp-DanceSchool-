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

module.exports.delete_event = function(req,res){
    var event_detail_id = req.params.id;
    service.delete_event(event_detail_id, function (event_id){
        res.json(event_id);
    })
}

module.exports.update_event = function(req,res){
    var event_detail = req.body;
    service.update_event(event_detail, function (event){
        res.json(event);
    })
}


module.exports.findbyhostid_event=function(req,res){
    var hostId =req.params.hostid;
    service.findbyhostid_event(hostId,function(eventdata){
    res.json(eventdata);
    })
}