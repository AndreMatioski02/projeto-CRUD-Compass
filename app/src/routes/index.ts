import express from "express";
import users from "../models/User.js";

const routes = (app: any) => {
  app.use(
    express.json(),
    users
  )
}

export default routes