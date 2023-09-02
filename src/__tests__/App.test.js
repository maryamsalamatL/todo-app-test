import App from "../App.js";
import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });

const setup = () => {
  return shallow(<App />);
};

test("render without error", () => {
  const wrapper = setup();
  expect(wrapper.find("[data-test='app-component']").length).toBe(1);
});
