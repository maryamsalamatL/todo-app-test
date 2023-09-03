import React from "react";
import { shallow } from "enzyme";
import Todo from "../Todo";
import { findByTestAttr } from "../../../test/testUtils";
import { UNDONE } from "../../../statusTypes";
import { checkPropType } from "../../../test/testUtils";

const setup = () => {
  return shallow(<Todo />);
};

test("render without error", () => {
  const wrapper = setup();
  const todoComponent = findByTestAttr(wrapper, "todo-component");
  expect(todoComponent.length).toBe(1);
});

test("do not throw error with expected props", () => {
  const expectedProp = {
    text: "test text",
    id: 1,
    status: UNDONE(),
    dispatch: () => {},
  };
  checkPropType(Todo, expectedProp);
});
