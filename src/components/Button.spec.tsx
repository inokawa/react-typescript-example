import { it, expect } from "@jest/globals";

import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

it("sample", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  let clicked = false;
  const { asFragment } = render(
    <Button
      title="test"
      onClick={() => {
        clicked = true;
      }}
    />
  );
  expect(asFragment()).toMatchSnapshot();

  fireEvent.click(screen.getByText("test"));
  expect(clicked).toBe(true);
});
