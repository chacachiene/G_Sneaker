import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";

const app = express();
dotenv.config();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(morgan("combined"));
const base = "/api/v1";
app.use(base + "/products", productRoutes);
app.use(base + "/cart", cartRoutes);

const PORT = process.env.PORT || 5001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
