import todoModel from "../Model/todoMode.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
export const uploadTodo = async (req, res) => {
  try {
    await todoModel.create({
      todo: req.query.todo,
    });
    res.json({ success: true, msg: "Todo uploaded successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getTodos = async (req, res) => {
  try {
    const todos = await todoModel.find();
    res.json({ success: true, todos });
  } catch (error) {
    console.log(error);
  }
};
export const updateTodo = async (req, res) => {
  try {
    await todoModel.updateOne(
      { _id: new ObjectId(req.query.todoId) },
      {
        $set: {
          todo: req.query.updatedTodo,
        },
      }
    );
    res.json({ success: true, msg: "UPDATED SUCCESSFULLY" });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTodo = async (req, res) => {
  try {
    console.log(req.query.id);

    await todoModel.updateOne(
      { _id: new ObjectId(req.query.id) },
      {
        $set: {
          active: false,
        },
      }
    );
    res.json({ success: true, msg: "DELETE SUCCESSFULLY" });
  } catch (error) {
    console.log(error);
  }
};
