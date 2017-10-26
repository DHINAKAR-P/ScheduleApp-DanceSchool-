var service = require("../Services/business_Service")

module.exports.create_business = function(req,res){
    var sch_detail = req.body;
    service.create_business(sch_detail, function (detail){
        //res.status(201);
        res.json(detail);
    })
}

module.exports.update_business = function(req,res){
    var sch_detail = req.body;
    service.update_business(sch_detail, function (detail){
        res.json(detail);
    })
}

module.exports.delete_business = function(req,res){
    var sch_detail_id = req.params.id;
    service.delete_business(sch_detail_id, function (detail_id){
        res.json(detail_id);
    })
}

module.exports.getall_business = function(req,res){
    service.getall_business(function (detail){
        res.json(detail);
    })
}

module.exports.findbyownerid_business=function(req,res){
    var ownerId =req.params.ownerid;
    service.findbyownerid_business(ownerId,function(businessdetail){
    res.json(businessdetail);
    })
}
