import express from "express";
import { deleteTodo, getTodos, updateTodo, uploadTodo } from "../Controllers/userController.js";
const router = express.Router();
router.post("/uploadTodo", uploadTodo);
router.get("/getTodos",getTodos)
router.put("/updateTodo",updateTodo)
router.delete("/deleteTodo",deleteTodo)
export default router;
