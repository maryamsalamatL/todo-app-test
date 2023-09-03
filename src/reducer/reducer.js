import { UNDONE, DOING, DONE } from "../types/statusTypes";
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CHANGE_STATUS,
  ADD_TODO_BY_PAST,
  CHANGE_STATUS_BY_DND,
  GET_ALL_DATA,
} from "../types/actionTypes";

const updateLocalStorage = (updatedTodos) =>
  localStorage.setItem("todos", JSON.stringify(updatedTodos));

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_ALL_DATA(): {
      return payload.data;
    }
    case ADD_TODO(): {
      const newTodo = {
        id: new Date().getTime(),
        text: "",
        status: payload.status,
      };
      const updatedTodos = [...state];
      updatedTodos.unshift(newTodo);
      updateLocalStorage(updatedTodos);
      return updatedTodos;
    }

    case EDIT_TODO(): {
      const updatedTodos = [...state].map((todo) =>
        todo.id == payload.id ? { ...payload } : todo
      );
      updateLocalStorage(updatedTodos);
      return updatedTodos;
    }
    case DELETE_TODO(): {
      const updatedTodos = [...state].filter((todo) => todo.id !== payload.id);
      updateLocalStorage(updatedTodos);
      return updatedTodos;
    }
    case CHANGE_STATUS(): {
      const updatedItem = [...state].find((todo) => todo.id === payload.id);
      updatedItem.status = payload.status;
      const updatedTodos = [...state].filter(
        (todo) => todo.id !== updatedItem.id
      );
      updatedTodos.unshift(updatedItem);
      updateLocalStorage(updatedTodos);
      return updatedTodos;
    }
    case ADD_TODO_BY_PAST(): {
      const texts = payload.text.split("\n");
      const newTodos = texts.map((text, index) => ({
        id: new Date().getTime() + index,
        text,
        status: payload.status,
      }));
      const updatedTodos = [...state];
      newTodos.forEach((todo) => {
        updatedTodos.unshift(todo);
      });
      updateLocalStorage(updatedTodos);
      return updatedTodos;
    }
    case CHANGE_STATUS_BY_DND(): {
      const updatedTodos = [...state].map((todo) =>
        todo.id === payload.id ? { ...todo, status: payload.status } : todo
      );
      updateLocalStorage(updatedTodos);
      return updatedTodos;
    }

    default:
      return state;
  }
};
