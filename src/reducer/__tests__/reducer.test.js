import { reducer } from "../reducer";
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  ADD_TODO_BY_PAST,
  CHANGE_STATUS,
} from "../../actionTypes";
import { UNDONE, DONE } from "../../statusTypes";

describe("return expecte state by dispaching a certain action", () => {
  let state = [
    { id: 1, text: "test", status: UNDONE() },
    { id: 2, text: "test2", status: UNDONE() },
  ];
  test("add one todo to state", () => {
    const updatedState = reducer(state, {
      type: ADD_TODO(),
      payload: { status: UNDONE() },
    });

    expect(updatedState.length).toBe(3);
  });

  test("delete todo", () => {
    const updatedState = reducer(state, {
      type: DELETE_TODO(),
      payload: { id: 1 },
    });

    expect(updatedState.length).toBe(1);
  });

  test("change status", () => {
    const updatedState = reducer(state, {
      type: CHANGE_STATUS(),
      payload: { id: 2, status: DONE() },
    });

    expect(updatedState).toEqual([
      { id: 2, text: "test2", status: DONE() },
      { id: 1, text: "test", status: UNDONE() },
    ]);
  });

  test("edit todo", () => {
    const updatedState = reducer(state, {
      type: EDIT_TODO(),
      payload: { id: 1, status: UNDONE(), text: "edited text" },
    });

    expect(updatedState[0]).toEqual({
      id: 1,
      text: "edited text",
      status: UNDONE(),
    });
  });

  test("add by paste", () => {
    const updatedState = reducer(state, {
      type: ADD_TODO_BY_PAST(),
      payload: { status: UNDONE(), text: "empty" },
    });

    expect(updatedState.length).toBe(3);
  });
});
