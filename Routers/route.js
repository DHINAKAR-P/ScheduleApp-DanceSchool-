var express = require("express");
var api = express.Router();
var routers = require("./router")
api.use("/business", routers.Business_Router);
api.use("/asset",routers.assets_Router);
api.use("/contacts",routers.contact_Router);
api.use("/user",routers.user_Router);
api.use("/schedule",routers.schedule_Router);
api.use("/event",routers.event_Router);
module.exports = api;