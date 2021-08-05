const express = require("express");
const {
  bloodHandler,
  getData,
  deleteDonar,
} = require("../controller/bloodsController");

const router = express.Router();

// post blood information
router.post("/", bloodHandler);

// get blood information
router.get("/:division/:group", getData);

//delete single donar
router.delete("/:id", deleteDonar);

module.exports = router;
