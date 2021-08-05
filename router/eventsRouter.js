const express = require("express");
const {
  addEvent,
  getEvent,
  getSingleEvent,
  deleteEvent,
} = require("../controller/eventsController");
const router = express.Router();

// add a new event
router.post("/", addEvent);

// get all event
router.get("/", getEvent);

// get single event
router.get("/:id", getSingleEvent);

//delete single event
router.delete("/:id", deleteEvent);

module.exports = router;
