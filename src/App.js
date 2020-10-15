import React from "react";
import "./App.css";
import Todo from "./components/Todo";

// in app components

function App() {
  return (
    <div className="App">
      <header className="App-header"> Todo list </header>
      <Todo />
    </div>
  );
}

export default App;
