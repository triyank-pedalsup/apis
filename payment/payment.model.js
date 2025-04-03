const mongoose = require("mongoose");

const payments = new mongoose.Schema({
  bookingId: { type: mongoose.Types.ObjectId,ref: "bookingSeat", required: true }, 
  userId: { type: mongoose.Types.ObjectId, ref:"user", required: true, unique: true }, 
  amount: { type: Number, required: true },
  status: { type: Boolean, required: true },
  paymentsTime: { type: Number, required: true },
});

const payment = mongoose.model("payment", payments);

module.exports = payment;