import express from "express";
import dotenv from "dotenv";
import configViewEngine from "./config/viewEngine";
import webRoutes from "./routes/web";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 8080;

configViewEngine(app);

app.use("/", webRoutes);

app.listen(port, () => {
  console.log(`=>>> App listening on url: http://localhost:${port}`);
});
