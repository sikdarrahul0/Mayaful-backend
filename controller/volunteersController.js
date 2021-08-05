const Volunteer = require("../models/Volunteer");

// add new volunteer
const addVolunteer = async (req, res) => {
  try {
    const newVolunteer = Volunteer(req.body);
    await newVolunteer.save();
    res.status(200).json({
      message: "Registration was successful",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// get volunteer for specific event
const getVolunteer = async (req, res) => {
  try {
    const volunteers = await Volunteer.find({ eventId: req.params.id });
    res.status(200).json(volunteers);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  addVolunteer,
  getVolunteer,
};
