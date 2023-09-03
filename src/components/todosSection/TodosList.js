import React from "react";
import { DONE, UNDONE, DOING } from "../../statusTypes";
import { ADD_TODO } from "../../actionTypes";
import Todo from "./Todo";
import PropTypes from "prop-types";
import { HiOutlinePlus } from "react-icons/hi";
function TodosList({ title, todos, id, dispatch }) {
  return (
    <section
      data-test="todos-list"
      className={
        id === UNDONE()
          ? "undone-sec"
          : id === DOING()
          ? "doing-sec"
          : "done-sec"
      }
    >
      <div className="title" data-test="todos-list-title">
        <h3>{title}</h3>
        <span>{todos.length && todos.length}</span>
      </div>
      <ul className="todo-list" data-test="todo-list">
        {todos.map((item) => (
          <Todo {...item} key={item.id} dispatch={dispatch} />
        ))}
      </ul>
      {id === DONE() ? (
        ""
      ) : (
        <button
          data-test="todos-list-btn"
          className={`add-btn ${
            id === UNDONE() ? "add-btn-undone" : "add-btn-done"
          }`}
          onClick={() =>
            dispatch({
              type: ADD_TODO(),
              payload: { status: id === UNDONE() ? UNDONE() : DOING() },
            })
          }
        >
          <span>
            <HiOutlinePlus />
          </span>{" "}
          New
        </button>
      )}
    </section>
  );
}

TodosList.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TodosList;
