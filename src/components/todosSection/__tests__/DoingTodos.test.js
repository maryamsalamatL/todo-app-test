import React from "react";
import DoingTodos from "../DoingTodos";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });

const setup = () => {
  return shallow(<DoingTodos />);
};

test("render without error", () => {
  const wrapper = setup();
  expect(wrapper.find("[data-test='doing-todos-component']").length).toBe(1);
});
