require("dotenv").config({ path: ".env.local" });
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");

app.use(express.json());
app.use(cors());

//MongoDB Connexion
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

//Main path
app.get("/", (req, res) => {
  res.send("Express App is running");
});

//Running server
app.listen(port, () => {
  console.log("Server running on port " + port);
});
