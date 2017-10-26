var express = require("express");
var router = express.Router();
var controller = require("../../app/Controllers/user_controller");

router.post("/create_user",controller.create_user);
router.put("/update_user",controller.update_user);
router.delete("/delete_user/:id",controller.delete_user);
router.get("/getall_user",controller.getall_user);

module.exports = router;