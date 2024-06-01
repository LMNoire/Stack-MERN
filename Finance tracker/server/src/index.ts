import express, { Express } from "express";
import mongoose from "mongoose";
import FinancialRecordRouter from "./routes/financial-records";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string =
  "mongodb+srv://selimcoulombel:6b2u0BKkSF3stvAk@personalfinancetracker.lf9g6ha.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to mongoDB :", err));

app.use("/financial-records", FinancialRecordRouter)

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
