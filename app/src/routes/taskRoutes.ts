import express from "express";
import TaskController from "../controllers/taskController.js";

const router = express.Router();

router
  .get("/tasks", TaskController.showTasks)
  .get("/tasks/:id", TaskController.showTaskById)
  .post("/tasks", TaskController.addTask)
  .put("/tasks/:id", TaskController.updateTask)
  .delete("/tasks/:id", TaskController.deleteTask)

export default router;   