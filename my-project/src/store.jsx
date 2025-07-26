import { create } from "zustand";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./ApiCodes";
import toast from "react-hot-toast";
export const todoStore = create((set) => ({
  todos: [],
  fetchTodos: async () => {
    const response = await getTodos();
    set({
      todos: response.todos || [],
    });
  },
  addTodo: async (todo) => {
    const response = await addTodo(todo);
    console.log(response);
  },
  editTodo: async (todo, id) => {
    const response = await updateTodo(todo, id);
    console.log(response);
    if (response?.success) {
      toast.success(response?.msg);
    }
  },
  removeTodo: async (id) => {
    const response = await deleteTodo(id);
    if (data?.success) {
      toast.success(data?.msg);
      location.reload();
    }
  },
}));
