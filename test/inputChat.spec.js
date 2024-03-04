import { InputChat } from "../src/components/InputChat";
describe("InputChat component", () => {
  test("The component InputChat exists", () => {
    expect(InputChat()).toBeTruthy();
  });

  test("InputChat content isn't empty", () => {
    const component = InputChat();
    const input = component.querySelector(".input");
    const button = component.querySelector(".button");

    expect(input.value).not.toEqual("");
    expect(button).toBeDefined()
  });

  test("InputChat display the correct content", () => {
    const component = InputChat();

    expect(component.tagName).toBe("ARTICLE");
    expect(component.querySelector(".input").value).toBe("Charmander");
    expect(component.querySelector(".button").textContent).toBe('<ion-icon name="send"></ion-icon>');
  });

});
