import tasks from "../models/Task.js";

class taskController {

    static showTasks = (req, res) => {
        tasks.find()
        .populate('user')
        .exec((err, tasks) => {
            res.status(200).json(tasks);
        });
    }

    static showTaskById = (req, res) => {
        const id = req.params.id;

        tasks.findById(id)
        .populate('user')
        .exec((err, tasks) => {
            if(err) {
                res.status(404).send({message: `${err.message} - Task not found!`});
            } else {
                res.status(200).send(tasks);
            }
        });
    }

    static addTask = (req, res) => {
        let task = new tasks(req.body);

        task.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Something went wrong, the task has not been added!`});
            } else {
                res.status(201).send(task.toJSON());
            }
        });
    }

    static updateTask = (req, res) => {
        const id = req.params.id;

        tasks.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Task updated successfully!"});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    }

    static deleteTask = (req, res) => {
        const id = req.params.id;

        tasks.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "task deleted sucessfully!"});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    }
}

export default taskController;