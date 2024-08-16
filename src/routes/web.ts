import express, { Request, Response, Router } from "express";

const route: Router = express.Router();

route.get("/", (_: Request, res: Response) => {
  res.send("Hello World! Duck!");
});

route.get("/ductt7575", (_: Request, res: Response) => {
  res.render("index.ejs");
});

export default route;
