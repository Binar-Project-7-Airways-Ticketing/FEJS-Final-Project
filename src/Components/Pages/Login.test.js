import { render } from "@testing-library/react";
import Login from "./Pages/Login";

// test("username input should be render", ()=>{
//     render(<Login/>);
//     const userInputEl = screen.getByPlaceholderText(/Email/i);
//     expect(userInputEl).toBeInTheDocument()
// })

const { Login } = require("./Login");

describe("Login", () => {
    const context = {
        getUser: () => null,
        createUser: () => null,
    };

    it("should throw an error if the user is missing an email", () => {
        expect(
            Login(context, {
                password: "Password123"
            })
        ).rejects.toThrow("aaa")
    })
})
