import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import helmet from "helmet";
import morgan from "morgan";

console.log(userRoutes);
dotenv.config();
const app = express();

app.use(helmet());
app.use(morgan("common"));

// ROUTES
app.use("/users", userRoutes);
app.use("/posts", userRoutes);

// PORT LISTENER
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
