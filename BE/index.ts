import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
import bodyParser, { OptionsJson } from "body-parser";
import { ControllerProps, RequestBodyProps } from "./types/types.js";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(compression());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "100mb", extended: true } as OptionsJson));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// ROUTES
// app.use("/auth", authRoutes);

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", userRoutes);

// PORT LISTENER
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
