var express = require("express");
var router = express.Router();
var controller = require("../../app/Controllers/event_controller");

router.post("/create_event",controller.create_event);
router.get("/getall_event",controller.getall_event);

// router.put("/update_event",controller.update_event);
// router.delete("/delete_event/:id",controller.delete_event);

// router.get("/findbyhostid/:hostid",controller.findbyhostid_event);

module.exports = router;