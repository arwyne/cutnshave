const mongoose = require("mongoose")

const serviceSchema = mongoose.Schema(
  {
    service: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Service = mongoose.mode("Service", serviceSchema)

module.exports = Service
