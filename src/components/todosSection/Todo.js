import React from "react";
import { useEffect, useRef, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { EDIT_TODO } from "../../actionTypes";

function Todo({ id, text, status, dispatch }) {
  const [textValue, setTextValue] = useState(text);
  const inputRef = useRef();
  useEffect(() => {
    if (text === "") {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = ({ target: { value } }) => {
    setTextValue(value);
    dispatch({ type: EDIT_TODO() });
  };

  return (
    <li data-test="todo-component" className="todo">
      <input type="checkbox" />
      <textarea ref={inputRef} value={textValue} onChange={handleChange} />
      <span>
        <HiOutlineX />
      </span>
    </li>
  );
}

export default Todo;
