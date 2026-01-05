import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/User.routes.js";
import shiftRoutes from "./routes/Shift.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Connet with Data Base
const connectDB = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected!"))
  .catch((error) => console.error(error));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/shift", shiftRoutes);

app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
