import { InputChat } from "../src/components/InputChat";
describe("InputChat component", () => {
  test("The component InputChat exists", () => {
    expect(InputChat()).toBeTruthy();
  });

  test("InputChat content isn't empty", () => {
    const component = InputChat();
    const input = component.querySelector("input");
    const button = component.querySelector("button");

    expect(input.value.textContent).not.toEqual("");
    expect(button).toBeDefined()
  });

  test("InputChat display the correct content", () => {
    const component = InputChat();

    expect(component.tagName).toBe("ARTICLE");
    expect(component.querySelector("input").value).toBe("");
    expect(component.querySelector("button").innerHTML).toBe('<ion-icon name="send"></ion-icon>');
  });

});
