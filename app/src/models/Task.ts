import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema(
  {
    id:         {type: String},
    description:{type: String, required: true},
    date:       {type: Date, required: true},    
    user:       {type: mongoose.Schema.Types.ObjectId, ref: 'tasks', required: true},
  }
);

const tasks= mongoose.model('tasks', tasksSchema);

export default tasks;