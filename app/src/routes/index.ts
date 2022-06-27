import express from "express";
import { Express } from "express-serve-static-core";
import users from "./userRoutes.js";
import tasks from "./taskRoutes.js";

const routes = (app: Express) => {
  app.route("/").get((req, res) => {
      res.status(200).send({name: "REST API - PB React"});
  });

  app.use(express.json(), users, tasks);
};

export default routes;