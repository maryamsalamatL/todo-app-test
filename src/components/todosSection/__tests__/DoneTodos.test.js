import React from "react";
import DoneTodos from "../DoneTodos";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });

const setup = () => {
  return shallow(<DoneTodos />);
};

test("render without error", () => {
  const wrapper = setup();
  expect(wrapper.find("[data-test='done-todos-component']").length).toBe(1);
});
