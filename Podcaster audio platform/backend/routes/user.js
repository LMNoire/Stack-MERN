const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//Enpoint for signup
router.post("/sign-up", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //Check if missing field during signup
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    //Check username and password length
    if (username.length < 5) {
      return res
        .status(400)
        .json({ message: "Username must have at least 5 characters" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must have at least 6 characters" });
    }
    //Check if user exist
    const existingEmail = await User.findOne({ email: email });
    const existingUsername = await User.findOne({ username: username });
    if (existingEmail || existingUsername) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }
    //Password hash
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    //Create new user
    const newUser = new User({ username, email, password: hashedPass });
    await newUser.save();
    return res.status(200).json({ message: "Account created" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
