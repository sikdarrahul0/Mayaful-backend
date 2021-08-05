const Blood = require("../models/Blood");

// save new blood information
const bloodHandler = async (req, res) => {
  try {
    const bloodData = new Blood(req.body);
    await bloodData.save();
    res.status(200).json({
      message: "Blood information saved successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// get blood information
const getData = async (req, res) => {
  try {
    if (
      req.params.division === "undefined" &&
      req.params.group === "undefined"
    ) {
      const bloods = await Blood.find({});
      res.status(200).json(bloods);
    } else if (
      req.params.division !== "undefined" &&
      req.params.group !== "undefined"
    ) {
      const bloods = await Blood.find({
        division: req.params.division,
        group: req.params.group,
      });
      res.status(200).json(bloods);
    } else if (req.params.division !== "undefined") {
      const bloods = await Blood.find({ division: req.params.division });
      res.status(200).json(bloods);
    } else if (req.params.group !== "undefined") {
      const bloods = await Blood.find({ group: req.params.group });
      res.status(200).json(bloods);
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// delete a donar
const deleteDonar = async (req, res) => {
  try {
    await Blood.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Donar was successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  bloodHandler,
  getData,
  deleteDonar,
};
