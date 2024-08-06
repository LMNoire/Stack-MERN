const express = require("express");
const app = express();
const userApi = require ("./routes/user.js");
require("dotenv").config();
require("./conn/conn");

app.use(express.json());

//Routes
app.use("/api/v1", userApi)
app.listen(process.env.PORT, () => {
  console.log(`Server started on port : ${process.env.PORT}`);
});
