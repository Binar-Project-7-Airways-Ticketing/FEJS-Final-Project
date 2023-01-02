/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "./Header";

jest.mock("axios", () => ({
  __esModule: true,
  ...jest.requireActual("axios"),
}));

describe("header", () => {
  test("header", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(
      getByText("Let's go to the best places in the World with us")
    ).toBeInTheDocument();
  });

  it("header", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(
      getByText("Let's go to the best places in the World with us")
    ).toBeInTheDocument();
  });
});
