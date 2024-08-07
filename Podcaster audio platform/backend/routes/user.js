const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    res.status(500).json({ error });
  }
});

//Endpoint for login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    //Check if missing field during login
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    //Check if user exist
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    //Check password match
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    //Generate JWT token
    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    res.cookie("podcasterUserToken", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 100, //30 days
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
    });
    return res.status(200).json({
      id: existingUser._id,
      username: existingUser.username,
      email: email,
      message: "Login successfull",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

//Endpoint for logout
router.post("/logout", async () => {
  res.clearCookie("podcasterUserToken", {
    httpOnly: true,
  });
  res.json({ message: "Logged out" });
});

module.exports = router;
