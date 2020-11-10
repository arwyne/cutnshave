const User = require("../models/userModel")

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
  } catch (error) {}
}
