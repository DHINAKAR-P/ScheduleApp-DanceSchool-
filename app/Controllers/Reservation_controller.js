var service = require("../Services/Reservation_Service")

module.exports.create_reservation = function(req,res){
    var reservation_detail = req.body;
    service.create_reservation(reservation_detail, function (detail){
        //res.status(201);
        res.json(detail);        
    })
}

module.exports.update_reservation = function(req,res){
    var reservation_detail = req.body;
    service.update_reservation(reservation_detail, function (details){
        res.json(details);
    })
}

module.exports.delete_reservation = function(req,res){
    var reservation_detail_id = req.params.id;
    service.delete_reservation(reservation_detail_id, function (detail_id){
        res.json(detail_id);
    })
}

module.exports.getall_reservation = function(req,res){
    service.getall_reservation(function (detail){
        res.json(detail);
    })
}


module.exports.findbyparticipent_reservation=function(req,res){
    var participent_id =req.params.participent_id;
    service.findbyparticipent_reservation(participent_id,function(reservation){
    res.json(reservation);
    })
}


module.exports.findbyeventid_reservation=function(req,res){
    var eventid =req.params.eventid;
    service.findbyeventid_reservation(eventid,function(reservation){
    res.json(reservation);
    })
}
