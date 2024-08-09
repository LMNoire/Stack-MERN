const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/multer");
const Category = require("../models/category");
const Podcast = require("../models/podcast");
const User = require("../models/user");

//Endpoint to add a podcast
router.post("/add-podcast", authMiddleware, upload, async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const frontImage = req.file["frontImage"][0].path;
    const audioFile = req.file["audioFile"][0].path;
    if (!title || !description || !category || !frontImage || !audioFile) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const { user } = req;
    const cat = await Category.findOne({ categoryName: category });
    if (!cat) {
      return res.status(400).json({ message: "No category found" });
    }
    const catid = cat._id;
    const userid = user._id;
    const newPodcast = new Podcast({
      title,
      description,
      category: catid,
      frontImage,
      audioFile,
      user: userid,
    });
    await newPodcast.save();
    await Category.findByIdAndUpdate(catid, {
      $push: { podcasts: newPodcast._id },
    });
    await User.findByIdAndUpdate(userid, {
      $push: { podcasts: newPodcast._id },
    });
    res.status(200).json({ message: "Podcast added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to add podcast" });
  }
});

module.exports = router;
