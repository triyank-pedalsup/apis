const mongoose = require("mongoose");

const bookings = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "user", required: true },
  showTimeId: { type: mongoose.Types.ObjectId, ref:"showTime", required: true },
  bookingTime: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});
  
const booking = mongoose.model("booking", bookings);

module.exports = booking;