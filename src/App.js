import React from "react";
import "./App.css";
import TodosSection from "./components/todosSection/TodosSection";
import Header from "./components/header/Header";

function App() {
  return (
    <div data-test="app-component" className="container">
      <Header />
      <TodosSection />
    </div>
  );
}

export default App;
