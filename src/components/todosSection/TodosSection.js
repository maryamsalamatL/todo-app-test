import React from "react";
import { useReducer, useEffect } from "react";
import TodosList from "./TodosList";
import { UNDONE, DOING, DONE } from "../../types/statusTypes";
import { reducer } from "../../reducer/reducer";
import { data } from "../../data/data";
import { GET_ALL_DATA } from "../../types/actionTypes";

function TodosSection() {
  const [todos, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || data;
    dispatch({ type: GET_ALL_DATA(), payload: { data: savedTodos } });
  }, []);

  if (!todos.length) return;

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
