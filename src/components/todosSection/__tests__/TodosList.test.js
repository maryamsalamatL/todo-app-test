import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkPropType } from "../../../test/testUtils";
import TodosList from "../TodosList";
import { DOING, DONE, UNDONE } from "../../../statusTypes";

const defaultProps = {
  title: "Todo",
  id: UNDONE(),
  todos: [{ id: 1, text: "empty", status: UNDONE() }],
  dispatch: () => {},
};

const setup = (props = defaultProps) => {
  return shallow(<TodosList {...props} />);
};

test("do not throw error with expected props", () => {
  const expectedProp = {
    title: "Todo",
    id: UNDONE(),
    todos: [{ id: 1, text: "empty", status: UNDONE() }],
    dispatch: () => {},
  };
  checkPropType(TodosList, expectedProp);
});

// describe("render without error", () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = setup();
//   });

//   test("render component", () => {
//     const todosSection = findByTestAttr(wrapper, "todos-list");
//     expect(todosSection.length).toBe(1);
//   });

//   test("render title", () => {
//     const todoList = findByTestAttr(wrapper, "todos-list-title");
//     expect(todoList.length).toBe(1);
//   });

//   test("render list of todos", () => {
//     const todosSection = findByTestAttr(wrapper, "todos-list-title");
//     expect(todosSection.length).toBe(1);
//   });

//   test("render addbtn only in undone and doing component", () => {
//     wrapper = setup({ id: DOING() });
//     const addBtn = findByTestAttr(wrapper, "todos-list-btn");
//     expect(addBtn.length).toBe(1);
//   });

//   test("render no addbtn in done component", () => {
//     wrapper = setup({ id: DONE() });
//     const addBtn = findByTestAttr(wrapper, "todos-list-btn");
//     expect(addBtn.length).toBe(0);
//   });
// });
