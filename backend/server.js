const express = require("express")
const dotenv = require("dotenv")
require("colors")

const connectDB = require("./config/db")

const userRoutes = require("./routes/userRoutes")
const serviceRoutes = require("./routes/serviceRoutes")

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()
connectDB()

app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/services", serviceRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold)
})
