var express = require("express");
var router = express.Router();
var controller = require("../../app/Controllers/contact_controller");

router.post("/create_contact",controller.create_contact);
router.put("/update_contact",controller.update_contact);
router.delete("/delete_contact/:id",controller.delete_contact);
router.get("/getall_contact",controller.getall_contact);

module.exports = router;