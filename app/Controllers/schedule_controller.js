var service = require("../Services/schedule_Service")

module.exports.create_schedule = function(req,res){
    var sch_detail = req.body;
    service.create_schedule(sch_detail, function (detail){
       
        res.json(detail);
       
    })
}

module.exports.update_schedule = function(req,res){
    var sch_detail = req.body;
    service.update_schedule(sch_detail, function (detail){
        res.json(detail);
    })
}

module.exports.delete_schedule = function(req,res){
    var sch_detail_id = req.params.id;
    service.delete_schedule(sch_detail_id, function (detail_id){
        res.json(detail_id);
    })
}

module.exports.getall_schedule= function(req,res){
    service.getall_schedule(function (detail){
        res.json(detail);
    })
}
