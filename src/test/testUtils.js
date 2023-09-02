import { checkPropTypes } from "prop-types";
export const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
};

export const checkPropType = (component, templateProp) => {
  const propError = checkPropTypes(
    component.propTypes,
    templateProp,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
