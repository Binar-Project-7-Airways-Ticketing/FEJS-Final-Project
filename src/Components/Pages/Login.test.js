// test('there is no I in team', () => {
//     expect('team').not.toMatch(/I/);
// })
import { render } from "@testing-library/react"
import Login from "./Login";

describe("unit test", () => {
    it("test", () => {
        const { getByTestId } = render(<Login />);
        const buttonClick = getByTestId("test-button");
        // console.log("buttonClick".buttonClick)
        expect(buttonClick).toBeTruthy();
    })
})