import React, { useState } from "react";
import "./styles/App.css";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";

function App() {
  return (
    <div className="App">
      <PostItem post={{id: 1, title: "JavaScript and React: Why You Need Both"}}/>
    </div>
  );
}

export default App;
