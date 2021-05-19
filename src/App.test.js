import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Test button", () => {
  render(<App />);

  // find an element with a role of button and text of 'change to blue'
  const colorButton = screen.getByRole("button", { name: "change to blue" });

  test("button has correct initial color", () => {
    // expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });

    // click button
    fireEvent.click(colorButton);

    // expect the background color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

    // expect the button text to be 'change to red'
    expect(colorButton.textContent).toBe("change to red");
  });

  /* test("button turns blue when clicked", () => {

  }); */
});
