let mongoose = require('mongoose'),
  Count = require('../models/countModel');

const handleReturn = (req, res) => (err, result) => {
  if (err) return res.status(500).send(err);
  if (result) return res.json({body: result})
  return res.json({message: 'Error'})
}

export const getAll = (req, res) => {
  Count.find({}, handleReturn(req, res))
}

export const create = (req, res) => {
  const count = new Count(req.body)
  count.save(handleReturn(req, res))
}

export const remove = (req, res) => {
  Count.findByIdAndRemove(req.params.id, handleReturn(req, res))
}

export const addExpense = (req, res) => {
  Count.findById(req.params.id, (err, count) => {
    if (err) return res.status(500).send(err);
    count.expenses.push(req.body);
    count.save(handleReturn(req, res))
  })
}
