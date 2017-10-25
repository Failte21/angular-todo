let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TodoSchema = new Schema({
  text: {
        type: String,
        required: "Todo"
    }
});

module.exports = mongoose.model('todos', TodoSchema);
