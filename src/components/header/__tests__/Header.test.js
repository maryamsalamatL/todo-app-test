import React from "react";
import Header from "../Header";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });

const setup = () => {
  return shallow(<Header />);
};
test("render without error", () => {
  const wrapper = setup();
  expect(wrapper.find("[data-test='header-component']").length).toBe(1);
});
