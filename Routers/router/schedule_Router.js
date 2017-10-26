var express = require("express");
var router = express.Router();
var controller = require("../../app/Controllers/schedule_controller");

router.post("/create_schedule",controller.create_schedule);
router.put("/update_schedule",controller.update_schedule);
router.delete("/delete_schedule/:id",controller.delete_schedule);
router.get("/getall_schedule",controller.getall_schedule);

module.exports = router;