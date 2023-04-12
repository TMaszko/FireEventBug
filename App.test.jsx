import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "./App";

test("should not be focusable when disabled", async () => {
  const onFocus = jest.fn();
  render(<App isDisabled onFocus={onFocus} />);
  screen.debug();
  const switchElement = screen.getByRole("text");

  console.log(switchElement);
  fireEvent(switchElement, "focus");
  expect(onFocus).not.toHaveBeenCalled();
});
