import React from "react";
import { useEffect, useRef, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import {
  EDIT_TODO,
  DELETE_TODO,
  CHANGE_STATUS,
  ADD_TODO_BY_PAST,
} from "../../actionTypes";
import { UNDONE, DONE, DOING } from "../../statusTypes";

function Todo({ id, text, status, dispatch }) {
  const [values, setValues] = useState({ text, checked: false });
  const inputRef = useRef();
  useEffect(() => {
    if (text === "") {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === "checked") {
      const statusToBe = status === DONE() ? UNDONE() : DONE();
      dispatch({
        type: CHANGE_STATUS(),
        payload: { id, status: statusToBe },
      });
    }
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

  return (
    <li data-test="todo-component" className="todo">
      <input
        type="checkbox"
        value={values.checked}
        onChange={handleChange}
        name="checked"
      />
      <textarea
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
      >
        <HiOutlineX />
      </button>
    </li>
  );
}

export default Todo;
