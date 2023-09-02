import React from "react";
import TodosSection from "../TodosSection";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });

const setup = () => {
  return shallow(<TodosSection />);
};

test("render without error", () => {
  const wrapper = setup();
  expect(wrapper.find("[data-test='todos-section']").length).toBe(1);
});
