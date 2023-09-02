import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkPropType } from "../../../test/testUtils";
import TodosList from "../TodosList";
import { DOING, DONE, UNDONE } from "../../../statusTypes";

const setup = (
  props = {
    title: "done",
    id: UNDONE(),
    todos: [{ id: 1, text: "empty", status: UNDONE() }],
  }
) => {
  return shallow(<TodosList {...props} />);
};

test("do not throw error with expected propshould first", () => {
  const expectedProp = {
    title: "Todo",
    id: UNDONE(),
    todos: [{ id: 1, text: "empty", status: UNDONE() }],
  };
  checkPropType(TodosList, expectedProp);
});

// // describe("render without error", () => {
// //   let wrapper;
// //   beforeEach(() => {
// //     wrapper = setup({});
// //   });

// //   test("render component", () => {
// //     const todosSection = findByTestAttr(wrapper, "todos-List");
// //     expect(todosSection.length).toBe(1);
// //   });

// //   test("render title", () => {
// //     const todoList = findByTestAttr(wrapper, "todos-List-title");
// //     expect(todoList.length).toBe(1);
// //   });

// //   //   test("render list of todos", () => {
// //   //     const todosSection = findByTestAttr(wrapper, "todos-List-title");
// //   //     expect(todosSection.length).toBe(1);
// //   //   });

// //   test("render addbtn only in undone and doing component", () => {
// //     wrapper = setup({ id: DOING() });
// //     const addBtn = findByTestAttr(wrapper, "todos-List-btn");
// //     expect(addBtn.length).toBe(1);
// //   });
// //   test("render no addbtn in done component", () => {
// //     wrapper = setup({ id: DONE() });
// //     const addBtn = findByTestAttr(wrapper, "todos-List-btn");
// //     expect(addBtn.length).toBe(0);
// //   });
// });
