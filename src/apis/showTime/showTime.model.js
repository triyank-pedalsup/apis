const mongoose = require("mongoose");

const showTimes = new mongoose.Schema({
  movieId: { type: mongoose.Types.ObjectId, ref:"movie", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  totalSeats: { type: Number, required: true },
  availableSeats: { type: Number, required: true },
});

const showTime = mongoose.model("showTime", showTimes);

module.exports = showTime;