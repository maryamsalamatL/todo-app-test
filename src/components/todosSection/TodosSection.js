import React from "react";
import UndoneTodos from "./UndoneTodos"
import DoingTodos from "./DoingTodos"
import DoneTodos from "./DoneTodos"



function TodosSection() {
  return (
    <div data-test="todos-section" className="todos-section">
      <UndoneTodos/>
      <DoingTodos/>
      <DoneTodos/>
    </div>
  );
}

export default TodosSection;
