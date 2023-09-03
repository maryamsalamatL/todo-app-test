import React from "react";
import { DONE, UNDONE, DOING } from "../../statusTypes";
import { ADD_TODO, CHANGE_STATUS_BY_DND } from "../../actionTypes";
import Todo from "./Todo";
import PropTypes from "prop-types";
import { HiOutlinePlus } from "react-icons/hi";
import { memo } from "react";
import { useDrop } from "react-dnd";

function TodosList({ title, todos, id, dispatch }) {
  const addItemToSection = (item) => {
    if (id === UNDONE()) {
      dispatch({
        type: CHANGE_STATUS_BY_DND(),
        payload: { id: item.id, status: UNDONE() },
      });
    }
    if (id === DOING()) {
      dispatch({
        type: CHANGE_STATUS_BY_DND(),
        payload: { id: item.id, status: DOING() },
      });
    }
    if (id === DONE()) {
      dispatch({
        type: CHANGE_STATUS_BY_DND(),
        payload: { id: item.id, status: DONE() },
      });
    }
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "todo",
    drop: (item) => addItemToSection(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <section
      ref={drop}
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
      <ul
        className={`todo-list ${isOver ? "dropping" : ""}`}
        data-test="todo-list"
      >
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
          </span>
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

export default memo(TodosList);
