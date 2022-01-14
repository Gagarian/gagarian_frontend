import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import "./App.css";
import Catagories from "./Pages/Catagories/Catagories";
import Item from "./Pages/Item/Item";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  const [toggle, setToggle] = useState(0);
  const handleToggle = (index) => {
    setToggle(index);
    if (index == 0) {
      navigate(`/`);
    } else {
      navigate(`/Catagories/${index}`);
    }
  };
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/">
          <Route
            index
            element={<Dashboard toggle={toggle} handleToggle={handleToggle} />}
          />
          <Route path="signup" element={<Signup />} />

          <Route path="login" element={<Login />} />
          <Route
            path="/catagories/:id"
            element={<Catagories toggle={toggle} handleToggle={handleToggle} />}
          />
          <Route
            path="/item/:id"
            element={<Item toggle={toggle} handleToggle={handleToggle} />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
