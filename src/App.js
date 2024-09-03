// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import AddTodo from "./AddTodo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/add" element={<AddTodo />} />
        {/* You can add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
