import { UNDONE, DOING, DONE } from "../statusTypes";
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CHANGE_STATUS,
  ADD_TODO_BY_PAST,
} from "../actionTypes";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TODO(): {
      const newTodo = {
        id: new Date().getTime(),
        text: "",
        status: payload.status,
      };
      const updatedTodos = [...state, newTodo];
      return updatedTodos;
    }

    case EDIT_TODO(): {
      const updatedTodos = [...state].map((todo) =>
        todo.id == payload.id ? { ...payload } : todo
      );
      return updatedTodos;
    }
    case DELETE_TODO(): {
      const updatedTodos = [...state].filter((todo) => todo.id !== payload.id);
      return updatedTodos;
    }
    case CHANGE_STATUS(): {
      const updatedTodos = [...state].map((todo) =>
        todo.id === payload.id ? { ...todo, status: payload.status } : todo
      );
      return updatedTodos;
    }
    case ADD_TODO_BY_PAST(): {
      const texts = payload.text.split("\n");
      const newTodos = texts.map((text, index) => ({
        id: new Date().getTime() + index,
        text,
        status: payload.status,
      }));

      const updatedTodos = [...state, ...newTodos];
      return updatedTodos;
    }
    default:
      return state;
  }
};
