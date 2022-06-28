import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema(
  {
    description:{type: String, required: true},
    date:       {type: String, required: true},    
    user:       {type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true},
  }
);

const tasks= mongoose.model('tasks', tasksSchema);

export default tasks;