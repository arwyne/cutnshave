const User = require("../models/userModel")
const generateToken = require("../utils/generateToken")

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email: email })

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobileNo: user.mobileNo,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(401)
      throw new Error("Invalid email or password")
    }
  } catch (error) {
    res.status(400).send(error)
  }
}

// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, mobileNo } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
      res.status(400)
      throw new Error("User already exists")
    }

    // create is shortcut for save
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      mobileNo,
    })

    if (user) {
      res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobileNo: mobileNo,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error("Invalid user data")
    }
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  authUser,
  registerUser,
}
