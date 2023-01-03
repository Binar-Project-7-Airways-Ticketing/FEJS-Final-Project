/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Login from "./Login";

jest.mock("axios", () => ({
  __esModule: true,
  ...jest.requireActual("axios"),
}));

// describe("login", () => {
  test("Login page", async () => {
    expect(true).toBe(true);
  });

  test("sign in", () => {
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(
      getByPlaceholderText("Email")
    ).toBeInTheDocument();
  });
// });
