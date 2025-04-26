const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  User: { type: String, required: true },
  Product: { type: String, required: true },
  Task: { type: Number, required: true }
});
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
