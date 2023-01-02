import { render } from "@testing-library/react";
import Login from "./Login";

describe("unit test", () => {
  test("username input should be render", () => {
    const { getByPlaceholderText } = render(<Login />);
    const userInput = screen.getByPlaceholderText(/Email/i);
    expect(userInput).toBeInTheDocument();
  });

  it("test", () => {
    const { getByTestId } = render(<Login />);
    const buttonClick = getByTestId("test-button");
    // console.log("buttonClick".buttonClick)
    expect(buttonClick).toBeTruthy();
  });
});
