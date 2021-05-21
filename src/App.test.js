import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Test button", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("button has correct initial color", () => {
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    const checkbox = screen.getByRole("checkbox");
    // expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });
    // click button
    fireEvent.click(colorButton);
    // expect the background color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
    // expect the button text to be 'change to red'
    expect(colorButton.textContent).toBe("Change to red");
  });

  test("initial conditions", () => {
    // check that the button starts out enabled
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    expect(colorButton).toBeEnabled();
    // check that the checkbox starts out unchecked
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  test("Checkbox disables button on first click and anables on second click", () => {
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    const colorButton = screen.getByRole("button", { name: "Change to blue" });

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
  });
});
