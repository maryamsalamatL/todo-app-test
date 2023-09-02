import React from "react";
import { shallow } from "enzyme";
import Todo from "../Todo";
import { findByTestAttr } from "../../../test/testUtils";

const setup = () => {
  return shallow(<Todo />);
};

test("render without error", () => {
  const wrapper = setup();
  const todoComponent = findByTestAttr(wrapper, "todo-component");
  expect(todoComponent.length).toBe(1);
});
