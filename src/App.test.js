import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

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

  test("Disabled button has gray background and reverts to red", () => {
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    // disable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle("background-color: gray");
    // re-nable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle("background-color: red");
  });

  test("Disabled button has gray background and reverts to blue", () => {
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    // change button to blue
    fireEvent.click(colorButton);
    // disable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle("background-color: gray");
    // re-nable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle("background-color: blue");
  });
});

describe("Space before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital  letters", () => {
    expect(replaceCamelWithSpaces("MidiumVioletRed")).toBe("Midium Violet Red");
  });
});
