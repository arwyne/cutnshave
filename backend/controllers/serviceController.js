const Service = require("../models/serviceModel")

// @desc Fetch all services
// @route GET /api/services
// @access Public
const getServices = async (req, res) => {
  try {
    const services = await Service.find({})

    res.json(services)
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  getServices,
}
