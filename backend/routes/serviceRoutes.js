const express = require("express")
const router = express.Router()
const {
  getServices,
  getServiceById,
  deleteService,
  createService,
  updateService,
} = require("../controllers/serviceController")

router.route("/").get(getServices).post(createService)
router
  .route("/:id")
  .get(getServiceById)
  .delete(deleteService)
  .put(updateService)

module.exports = router
