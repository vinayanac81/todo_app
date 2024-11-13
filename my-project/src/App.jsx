import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";
import EditTodo from "./Pages/EditTodo";
function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-todo" element={<EditTodo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
