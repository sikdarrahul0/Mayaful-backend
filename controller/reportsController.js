const Report = require("../models/Report");

// add a new report
const addReport = async (req, res) => {
  try {
    const newReport = Report(req.body);
    await newReport.save();
    res.status(200).json({
      message: "Report submitted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
//get all reports
const getAll = async (req, res) => {
  try {
    const reports = await Report.find({});
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
// delete single report
const deleteReport = async (req, res) => {
  try {
    await Report.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Report was successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  addReport,
  getAll,
  deleteReport,
};
