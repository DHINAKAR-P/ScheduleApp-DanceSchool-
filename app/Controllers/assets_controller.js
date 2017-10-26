var service = require("../Services/assets_Service")

module.exports.create_asset = function(req,res){
    var sch_detail = req.body;
    service.create_asset(sch_detail, function (detail){
        //res.status(201);
        res.json(detail);
    })
}

module.exports.update_asset = function(req,res){
    var sch_detail = req.body;
    service.update_asset(sch_detail, function (detail){
        res.json(detail);
    })
}

module.exports.delete_asset = function(req,res){
    var sch_detail_id = req.params.id;
    service.delete_asset(sch_detail_id, function (detail_id){
        res.json(detail_id);
    })
}

module.exports.getall_asset = function(req,res){
    service.getall_asset(function (detail){
        res.json(detail);
    })
}
