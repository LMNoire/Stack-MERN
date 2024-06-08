import express, { Express } from "express";
import mongoose from "mongoose";

//Use express and define port
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

//Mongo connexion
const mongoURI: string =
  "mongodb+srv://selimcoulombel:6b2u0BKkSF3stvAk@personalfinancetracker.lf9g6ha.mongodb.net/";

//Init mongoose
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB :", err));

//Liston to port  
app.listen(port, () => {
  console.log(`Server Running on Port 3001 ${port}`);
});
