const Event = require("../models/Event");

// add a new event
const addEvent = async (req, res) => {
  try {
    const newEvent = Event(req.body);
    await newEvent.save();
    res.status(200).json({
      message: "Event added successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// get all event
const getEvent = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
// get single event by id
const getSingleEvent = async (req, res) => {
  try {
    const event = await Event.find({ _id: req.params.id });
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
// delete single event
const deleteEvent = async (req, res) => {
  try {
    await Event.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Event was successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  addEvent,
  getEvent,
  getSingleEvent,
  deleteEvent,
};
