import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "./App";

test("should not be focusable when disabled", async () => {
  const onFocus = jest.fn();
  render(<App isDisabled onFocus={onFocus} />);
  screen.debug();
  const textInputElement = screen.getByRole("text");

  fireEvent(textInputElement, "focus");
  expect(onFocus).not.toHaveBeenCalled();
});
