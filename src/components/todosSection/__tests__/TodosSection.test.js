import React from "react";
import TodosSection from "../TodosSection";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/testUtils";

const setup = () => {
  return shallow(<TodosSection />);
};

test("render without error", () => {
  const wrapper = setup();
  const todosSection = findByTestAttr(wrapper, "todos-section");
  console.log(todosSection);
  expect(todosSection.length).toBe(1);
});
