import { UNDONE, DOING, DONE } from "../statusTypes";
import { ADD_TODO_UNDONE, ADD_TODO_DOING, EDIT_TODO } from "../actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO_UNDONE(): {
      const newTodo = { id: new Date().getTime(), text: "", status: UNDONE() };
      const updatedState = [...state, newTodo];
      return updatedState;
    }
    case ADD_TODO_DOING(): {
      const newTodo = { id: new Date().getTime(), text: "", status: DOING() };
      const updatedState = [...state, newTodo];
      return updatedState;
    }
    case EDIT_TODO(): {
      return state;
    }
    default:
      return state;
  }
};
