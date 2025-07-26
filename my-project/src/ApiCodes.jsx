import axios from "axios";
export const getTodos = async () => {
  const response = await axios.get("http://localhost:2003/api/user/getTodos");
  return response.data;
};

export const addTodo = async (todo) => {
  const response = await axios.post(
    "http://localhost:2003/api/user/uploadTodo",
    {},
    { params: { todo } }
  );
  return response.data;
};

export const updateTodo = async (todo, id) => {
  console.log(todo, id);

  const response = await axios.put(
    "http://localhost:2003/api/user/updateTodo",
    {},
    { params: { todo, id } }
  );
  return response.data;
};
export const deleteTodo = async (id) => {
  const response = await axios.delete(
    "http://localhost:2003/api/user/deleteTodo",
    { params: { id } }
  );
  return response.data;
};
