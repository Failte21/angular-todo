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

export const remove = (req, res) => {
  Todo.findByIdAndRemove(req.params.id, (err, todo) => {
    console.log(todo);
    if (err) return res.status(200).send(err);
    if (todo) return res.json({body: todo})
    return res.json({message: 'an error occured'})
  })
}

export const update = (req, res) => {
  const { field, value } = req.body;
  if (field === null || value === null ) return res.status(200).json({message: "You should provide a field and a value"})
  Todo.findByIdAndUpdate(req.params.id, {[field]: value}, (err, todo) => {
    if (err) return res.status(500).send(err)
    if (todo) return res.json({body: todo})
    return res.json({message: "an error occured"});
  })
}
