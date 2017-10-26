let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ExpenseSchema = new Schema({
  title: {type: String, required: 'Title is required'},
  user: { type: String, required: 'user is required' },
  amount: {type: Number, required: 'Number is required'},
  date: {type: String}
});

let CountSchema = new Schema({
  users: {type: [String], required: 'users are required'},
  title: {type: String, required: 'title is required'},
  expenses: [ExpenseSchema]
});

module.exports = mongoose.model('counts', CountSchema);
