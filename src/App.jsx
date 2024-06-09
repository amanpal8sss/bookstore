import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Books from "./Books/Books";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      {/* <Home />
      <Course/> */}
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
