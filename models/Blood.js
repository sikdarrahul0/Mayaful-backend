const mongoose = require("mongoose");

const bloodSchema = mongoose.Schema({
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
});

const Blood = mongoose.model("Blood", bloodSchema);

module.exports = Blood;
