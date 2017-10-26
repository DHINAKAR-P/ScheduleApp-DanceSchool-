var service = require("../Services/user_service")

module.exports.create_user = function(req,res){
    var sch_detail = req.body;
    service.create_user(sch_detail, function (detail){
        //res.status(201);
        res.json(detail);
        console.log('==========')
    })
}

module.exports.update_user = function(req,res){
    var sch_detail = req.body;
    service.update_user(sch_detail, function (detail){
        res.json(detail);
    })
}

module.exports.delete_user = function(req,res){
    var sch_detail_id = req.params.id;
    service.delete_user(sch_detail_id, function (detail_id){
        res.json(detail_id);
    })
}

module.exports.getall_user= function(req,res){
    service.getall_user(function (detail){
        res.json(detail);
    })
}
