const express = require("express");
const {
  addReport,
  getAll,
  deleteReport,
} = require("../controller/reportsController");

const router = express.Router();

// post a new report
router.post("/", addReport);

//get all reports
router.get("/", getAll);

// delete report
router.delete("/:id", deleteReport);

module.exports = router;
