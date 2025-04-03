const mongoose = require("mongoose");

const bookingSeats = new mongoose.Schema({
  bookingId: { type: mongoose.Types.ObjectId, required: true }, 
  seatId: { type: mongoose.Types.ObjectId, ref:"seat", required: true }, 
});

const bookingSeat = mongoose.model("bookingSeat", bookingSeats);

module.exports = bookingSeat;