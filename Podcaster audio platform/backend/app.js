const express = require("express");
const app = express();
const userApi = require ("./routes/user.js");
const CatApi = require ("./routes/categories.js");
const PodcastApi = require ("./routes/podcast.js");
const cookieParser = require("cookie-parser");


require("dotenv").config();
require("./conn/conn");
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/v1", userApi);
app.use("/api/v1", CatApi);
app.use("/api/v1", PodcastApi);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port : ${process.env.PORT}`);
});
