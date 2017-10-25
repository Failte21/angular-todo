let mongoose = require('mongoose'),
    Todo = require('../models/TodoModel')

export const listAll = (req, res) => {
    Todo.find({}, (err, user) => {
        if (err)
            res.send(err);
        res.json(user);
    });
}

export const create = (req, res) => {
  const todo = new Todo(req.body)
  todo.save((err, todo) => {
    if (err) return res.status(200).send(err)
    if (todo) return res.json({body: todo})
    return res.json({message: "No todo added"})
  })
}

export const update = field => (req, res) => {
    Todo.findByIdAndUpdate(req.body.id, {[field]: req.body[field]}, (err, user) => {
        if (err) return res.json({message: "fetchError.update"})
        res.json({body: true, message: "fetchSuccess.update"})
    })
}
