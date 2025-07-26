import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  todo: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const todoModel = mongoose.model("todos", todoSchema);

export default todoModel;
