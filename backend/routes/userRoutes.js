const express = require("express")
const router = express.Router()
const { authUSer } = require("../controllers/userController")

router.post("/login", authUser)
