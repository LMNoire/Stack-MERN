const multer = require("multer");

//Set storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.UTC.now()}-${file.originalname}`);
  },
});

//Initialisation of the upload
const upload = multer({
  storage: storage,
}).fields([
  { name: "frontImage", maxCount: 1 },
  { name: "audioFile", maxCount: 1 },
]);

module.exports = upload;
