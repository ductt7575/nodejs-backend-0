import path from "path";
import express, { Express } from "express";

const configViewEngine = (app: Express): void => {
  app.set("views", "./src/views");
  app.set("view engine", "ejs");

  app.use(express.static("./public"));
};

export default configViewEngine;
