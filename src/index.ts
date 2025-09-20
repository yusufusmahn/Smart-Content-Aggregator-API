import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db";

import articleRoutes from "./routes/articleRoutes";
import userRoutes from "./routes/userRoutes";
import interactionRoutes from "./routes/interactionRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/articles", articleRoutes);
app.use("/users", userRoutes);
app.use("/interactions", interactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
