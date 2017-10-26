var service = require("../Services/contact_Service")

module.exports.create_contact = function(req,res){
    var sch_detail = req.body;
    service.create_contact(sch_detail, function (detail){
        //res.status(201);
        res.json(detail);
        console.log('==========')
    })
}

module.exports.update_contact = function(req,res){
    var sch_detail = req.body;
    service.update_contact(sch_detail, function (detail){
        res.json(detail);
    })
}

module.exports.delete_contact = function(req,res){
    var sch_detail_id = req.params.id;
    service.delete_contact(sch_detail_id, function (detail_id){
        res.json(detail_id);
    })
}

module.exports.getall_contact= function(req,res){
    service.getall_contact(function (detail){
        res.json(detail);
    })
}
