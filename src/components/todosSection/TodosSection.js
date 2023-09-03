import React from "react";
import { useReducer } from "react";
import TodosList from "./TodosList";
import { UNDONE, DOING, DONE } from "../../statusTypes";
import { reducer } from "../../reducer/reducer";
import { data } from "../../data/data";

function TodosSection() {
  const [todos, dispatch] = useReducer(reducer, data);

  const undoneTodos = todos.filter((todo) => todo.status === UNDONE());
  const doingTodos = todos.filter((todo) => todo.status === DOING());
  const doneTodos = todos.filter((todo) => todo.status === DONE());

  return (
    <div data-test="todos-section" className="todos-section">
      <TodosList
        title={"Todo"}
        todos={undoneTodos}
        id={UNDONE()}
        dispatch={dispatch}
      />
      <TodosList
        title={"Doing 💪"}
        todos={doingTodos}
        id={DOING()}
        dispatch={dispatch}
      />
      <TodosList
        title={"Done 🎉"}
        todos={doneTodos}
        id={DONE()}
        dispatch={dispatch}
      />
    </div>
  );
}

export default TodosSection;
