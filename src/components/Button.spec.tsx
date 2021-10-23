import React from "react";
// @ts-expect-error FIXME
import renderer from "react-test-renderer";
import Button from "./Button";

it("sample", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const component = renderer.create(<Button title="test" onClick={() => {}} />);
  expect(component.toJSON()).toMatchSnapshot();
});
