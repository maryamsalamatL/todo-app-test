import React from "react";
import { useEffect, useRef, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import PropTypes from "prop-types";
import { memo } from "react";
import { useDrag } from "react-dnd";
import {
  EDIT_TODO,
  DELETE_TODO,
  CHANGE_STATUS,
  ADD_TODO_BY_PAST,
} from "../../types/actionTypes";
import { UNDONE, DONE } from "../../types/statusTypes";

function Todo({ id, text, status, dispatch }) {
  const inputRef = useRef();
  const [values, setValues] = useState({
    text,
    checked: status === DONE() ? true : false,
  });
  useEffect(() => {
    if (text === "") {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, text: e.target.value });
  };
  const handleChecked = (e) => {
    setValues({ ...values, checked: !values.checked });
    const statusToBe = status === DONE() ? UNDONE() : DONE();
    setTimeout(() => {
      dispatch({
        type: CHANGE_STATUS(),
        payload: { id, status: statusToBe },
      });
    }, 3000);
  };

  const blurHandler = () => {
    if (values.text === "") dispatch({ type: DELETE_TODO(), payload: { id } });
    dispatch({
      type: EDIT_TODO(),
      payload: { id, status, text: values.text },
    });
  };

  const pasteHandler = (e) => {
    if (values.text === "") dispatch({ type: DELETE_TODO(), payload: { id } });
    e.stopPropagation();
    e.preventDefault();
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData("Text");
    setValues({ ...values, [e.target.name]: e.target.value });
    dispatch({
      type: ADD_TODO_BY_PAST(),
      payload: { status, text: pastedData },
    });
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "todo",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <li
      data-test={`todo-component-${id}`}
      className={`todo ${isDragging ? "dragging" : ""}`}
      ref={drag}
    >
      <input
        data-test={`todo-checkbox-${id}`}
        type="checkbox"
        value={values.checked}
        onChange={handleChecked}
        name="checked"
        checked={values.checked}
      />

      <textarea
        data-test={`textarea`}
        ref={inputRef}
        value={values.text}
        onChange={handleChange}
        name="text"
        onPaste={pasteHandler}
        onBlur={blurHandler}
        cols={35}
        rows={
          values.text ? Math.ceil(values.text.split("").length / 35) + 1 : 1
        }
      />
      <button
        onClick={() => dispatch({ type: DELETE_TODO(), payload: { id } })}
        data-test={`todo-remove-${id}`}
      >
        <HiOutlineX />
      </button>
    </li>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default memo(Todo);
