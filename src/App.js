import React from "react";
import Header from "./Header";
import Books from "./Books";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookOpen from "./BookOpen";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book/:id" element={<BookOpen />} />
      </Routes>
    </div>
  );
};

export default App;
