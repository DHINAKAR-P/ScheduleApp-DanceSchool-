var express = require("express");
var router = express.Router();
var controller = require("../../app/Controllers/Reservation_controller");

router.post("/create_reservation",controller.create_reservation);
router.put("/update_reservation",controller.update_reservation);
router.delete("/delete_reservation/:id",controller.delete_reservation);
router.get("/getall_reservation",controller.getall_reservation);
router.get("/findbyparticipent_reservation/:participent_id",controller.findbyparticipent_reservation);
router.get("/findbyeventid_reservation/:eventid",controller.findbyeventid_reservation);


module.exports = router;