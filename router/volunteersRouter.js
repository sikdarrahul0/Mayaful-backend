const express = require("express");
const {
  addVolunteer,
  getVolunteer,
} = require("../controller/volunteersController");

const router = express.Router();

// add new volunteer for specific event
router.post("/", addVolunteer);

// get volunteer info for specific event
router.get("/:id", getVolunteer);

module.exports = router;
