let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TodoSchema = new Schema({
  text: { type: String, required: "Todo" },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('todos', TodoSchema);
