import React from "react";
import { useReducer } from "react";
import TodosList from "./TodosList";
import { UNDONE, DOING, DONE } from "../../statusTypes";
import { reducer } from "../../reducer/reducer";

const data = [
  {
    id: "1",
    text: "Start with meditation, exercise & breakfast for a productive day",
    status: "UNDONE",
  },
  {
    id: "2",
    text: "Read to learn something new every day",
    status: "UNDONE",
  },
  {
    id: "3",
    text: "Learn something fresh & relevant",
    status: "UNDONE",
  },
  {
    id: "4",
    text: "Engage & question in meetings",
    status: "DOING",
  },
  {
    id: "5",
    text: "Use time-blocking for effective days",
    status: "DOING",
  },
  {
    id: "6",
    text: "Finished online course - check!",
    status: "DONE",
  },
  {
    id: "7",
    text: "Congratulate yourself for incorporating healthier habits into your lifestyle, like regular exercise or mindful eating",
    status: "DONE",
  },
];

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
