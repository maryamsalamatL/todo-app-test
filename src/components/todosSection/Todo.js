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
    if (e.target.name === "text") {
      console.log(e.target.value);
      dispatch({
        type: EDIT_TODO(),
        payload: { id, status, text: e.target.value },
      });
    } else if (e.target.name === "checked") {
      const statusToBe = status === DONE() ? UNDONE() : DONE();
      console.log(statusToBe);
      dispatch({
        type: CHANGE_STATUS(),
        payload: { id, status: statusToBe },
      });
    }
  };

  const pasteHandler = (e) => {
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
        checked={values.checked}
      />
      <textarea
        ref={inputRef}
        value={values.text}
        onChange={handleChange}
        name="text"
        onPaste={pasteHandler}
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
