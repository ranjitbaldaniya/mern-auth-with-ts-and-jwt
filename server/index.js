import express from "express";
import { authRouter } from "./routes/authRoute.js";
import "dotenv/config";
import { mongoose } from "mongoose";
import cors from "cors";
import { userRouter } from "./routes/userRoute.js";
import { productRoutes } from "./routes/productRoute.js";
import { cartRoute } from "./routes/cartRoute.js";

const app = express();

app.use(express.json());

app.use(cors());

console.log("process.env.PORT", process.env.PORT);

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URL);

// Get the default connection
const db = mongoose.connection;
// Event listener for successful connection
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Event listener for connection error
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

app.use(authRouter);
app.use(userRouter);
app.use(productRoutes)
app.use(cartRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

