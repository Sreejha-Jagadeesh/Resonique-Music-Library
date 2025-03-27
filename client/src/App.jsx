import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Fixed Navbar */}
      <div className="content"> {/* Prevents content from overlapping navbar */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
