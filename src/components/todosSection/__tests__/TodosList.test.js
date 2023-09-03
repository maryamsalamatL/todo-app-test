import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkPropType } from "../../../test/testUtils";
import TodosList from "../TodosList";
import { DOING, DONE, UNDONE } from "../../../test/statusTypes";

const defaultProps = {
  title: "Todo",
  id: UNDONE(),
  todos: [{ id: 1, text: "empty", status: UNDONE() }],
  dispatch: () => {},
};

const setup = (props = defaultProps) => {
  return shallow(<TodosList {...props} />);
};

test("render without erroe", () => {
  const wrapper = setup();
  const todoslistComponent = findByTestAttr(wrapper, "todos-list");
  expect(todoslistComponent.length).toBe(1);
});

test("do not throw error with expected props", () => {
  const expectedProp = {
    title: "Todo",
    id: UNDONE(),
    todos: [{ id: 1, text: "empty", status: UNDONE() }],
    dispatch: () => {},
  };
  checkPropType(TodosList, expectedProp);
});
