import cors from "cors";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";
import express from "express";
import { fileURLToPath } from "url";
import compression from "compression";
import bodyParser, { OptionsJson } from "body-parser";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import feedRoutes from "./routes/feed.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "100mb", extended: true } as OptionsJson));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// ROUTES
// app.use("/auth", authRoutes);

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/feed", feedRoutes);

// PORT LISTENER
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
