const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
  donarId: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  mobileNo: {
    type: String,
    required: true,
    trim: true,
  },
  division: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  report: {
    type: String,
    required: true,
  },
});

const Report = mongoose.model("Report", ReportSchema);

module.exports = Report;
