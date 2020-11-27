const mongoose = require("mongoose")

const reservationSchema = mongoose.Schema({
  referenceNo: {
    type: String,
    required: true,
  },

  reservationDate: {
    type: String,
    required: true,
  },

  reservationTime: {
    type: String,
    required: true,
  },

  totalPrice: {
    type: Number,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  service: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Service",
  },
})

const Reservation = mongoose.model("Reservation", reservationSchema)

module.exports = Reservation
