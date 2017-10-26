var dao = require("../DAO/assets_DAO")

module.exports.create_asset = function(detail,callback) {
  dao.create_asset(detail,function (asset_detail){
    callback(asset_detail);
  });
}

module.exports.update_asset = function(detail,callback) {
  dao.update_asset(detail,function (asset_detail){
    callback(asset_detail);
  });
}

module.exports.delete_asset = function(asset_detail_id,callback) {
  dao.delete_asset(asset_detail_id,function (asset_detail_id){
    callback(asset_detail_id);
  });
}

module.exports.getall_asset = function(callback) {
  dao.getall_asset(function (asset_detail){
    callback(asset_detail);
  });
}
