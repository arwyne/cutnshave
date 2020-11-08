const express = require("express")
const dotenv = require("dotenv")
require("colors")

const connectDB = require("./config/db")

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()
connectDB()

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold)
})
