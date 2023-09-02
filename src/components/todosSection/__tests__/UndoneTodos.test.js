import React from "react";
import UndoneTodos from "../UndoneTodos";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });

const setup = () => {
  return shallow(<UndoneTodos />);
};

test("render without error", () => {
  const wrapper = setup();
  expect(wrapper.find("[data-test='undone-todos-component']").length).toBe(1);
});
