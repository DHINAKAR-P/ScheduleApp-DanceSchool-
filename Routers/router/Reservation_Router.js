var express = require("express");
var router = express.Router();
var controller = require("../../app/Controllers/Reservation_controller");

router.post("/create_reservation",controller.create_reservation);
router.put("/update_reservation",controller.update_reservation);
router.delete("/delete_reservation/:id",controller.delete_reservation);
router.get("/getall_reservation",controller.getall_reservation);

module.exports = router;