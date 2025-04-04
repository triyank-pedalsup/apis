const mongoose = require("mongoose");

const seats = new mongoose.Schema({
  showtimeId: { type: mongoose.Types.ObjectId, ref: "showTime", required: true },
  seatNumber: { type: String, required: true },
  status: { type: Boolean, required: true },
});

const seat = mongoose.model("seat", seats);

module.exports = seat;