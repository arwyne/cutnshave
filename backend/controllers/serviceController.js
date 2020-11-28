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

// @desc Fetch single service
// @route GET /api/services/:id
// @access Public
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)

    if (service) {
      res.json(service)
    } else {
      res.status(404)
      throw new Error("Service not found")
    }
  } catch (error) {
    res.status(400).send(error)
  }
}

// @desc Delete a service
// @route DELETE /api/services/:id
// @access Private/Admin
const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)

    if (service) {
      await service.remove()
      res.json({ message: "Service removed" })
    } else {
      res.status(404)
      throw new Error("Service not found")
    }
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  getServices,
  getServiceById,
}
