import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import carRoutes from "./routes/carRoutes.js";
import rentRoutes from "./routes/rentRoutes.js"
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("Server online in port 3000");
});

const MONGODB_URL = "mongodb+srv://root:root@cluster0.ztmac53.mongodb.net/slip-collection?retryWrites=true&w=majority&appName=Cluster0"

mongoose
  .connect(MONGODB_URL)
  .then(console.log("connected to DB"))
  .catch((err) => console.log(err));

app.use("/api/cars", carRoutes);
app.use("/api/rents", rentRoutes);

