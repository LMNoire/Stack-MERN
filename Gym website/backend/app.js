import express from "express";
import { config } from "dotenv";
import cors from "cors";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Endpoint for mail form
router.post("/send/mail", async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return next(
      res.status(400).json({
        success: false,
        message: "Please provide all details",
      })
    );
  }
});

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
