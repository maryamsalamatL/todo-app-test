import React from "react";
import "./App.css";
import TodosSection from "./components/todosSection/TodosSection";
import Header from "./components/header/Header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div data-test="app-component" className="container">
        <Header />
        <TodosSection />
      </div>
    </DndProvider>
  );
}

export default App;
