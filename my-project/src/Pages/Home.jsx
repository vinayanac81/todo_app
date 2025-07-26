import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, [todos]);
  const getTodos = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:2003/api/user/getTodos"
      );
      settodos(data.todos);
    } catch (error) {
      console.log(error);
    }
  };
  const addTOTodos = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        "http://localhost:2003/api/user/uploadTodo",
        {},
        { params: { todo } }
      );
      if (data?.success) {
        toast.success(data?.msg);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodo = async (e, id) => {
    try {
      console.log(id);

      e.preventDefault();
      const { data } = await axios.delete(
        "http://localhost:2003/api/user/deleteTodo",

        { params: { id } }
      );
      if (data?.success) {
        toast.success(data?.msg);
        location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" h-screen bg-slate-900">
      <h1 className="text-red-600 text-4xl p-4 text-center p font-mono tracking-wider ">
        TODO
      </h1>
      <div className="flex justify-center">
        <input
          onChange={(e) => settodo(e.target.value)}
          type="text"
          className="text-center w-1/3 py-3 rounded"
        />
        <button
          onClick={addTOTodos}
          className="bg-slate-400 px-4 rounded text-white cursor-pointer"
        >
          OK
        </button>
      </div>
      {todos.length > 0 && (
        <>
          <div className="flex justify-center py-10">
            <h1 className="text-white font-mono text-4xl">TODOS</h1>
          </div>
        </>
      )}
      {todos.length > 0 && (
        <>
          {todos.map((todo, id) => {
            if (todo.active === true) {
              return (
                <div
                  key={id}
                  className="flex mb-1 bg-slate-700 w-1/2 mx-auto justify-between px-6 py-4 text-white"
                >
                  <h1>{todo?.todo}</h1>
                  <div className="flex gap-4">
                    <buttdeleteTodoon
                      onClick={() => {
                        navigate("/edit-todo/", {
                          state: { todoId: todo?._id, todo: todo?.todo },
                        });
                      }}
                      className="bg-green-600 px-4 rounded"
                    >
                      EDIT
                    </buttdeleteTodoon>
                    <button
                      onClick={(e) => deleteTodo(e, todo?._id)}
                      className="px-4 rounded bg-red-700"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </>
      )}
    </div>
  );
};

export default Home;
