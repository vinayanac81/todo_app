import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { todoStore } from "../store";
const EditTodo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { editTodo } = todoStore();
  const { todo, todoId } = location.state;
  const [updatedTodo, setupdatedTodo] = useState("");
  useEffect(() => {
    setupdatedTodo(todo);
  }, []);
  const updateTodo = async (e) => {
    try {
      e.preventDefault();
      editTodo(updatedTodo, todoId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen bg-slate-900">
      <div className="flex h-screen w-full justify-center items-center">
        <div className="w-3/4">
          <input
            onChange={(e) => setupdatedTodo(e.target.value)}
            type="text"
            value={updatedTodo}
            className="text-center w-3/4 py-3 rounded"
          />
          <button
            onClick={updateTodo}
            className="bg-green-700 px-8 py-3 rounded text-white cursor-pointer"
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
