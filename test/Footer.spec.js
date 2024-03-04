import { Footer } from "../src/components/Footer";

describe("Footer component", () => {
  test("The component Footer exists", () => {
    const footer = Footer();

    expect(footer).toBeTruthy();
  });

  test("Footer content isn't empty", () => {
    const footer = Footer();
    const paragraph = footer.querySelector("p");

    expect(paragraph.textContent).not.toEqual("");
  });

  test("Footer display the correct content", () => {
    const footer = Footer();

    expect(footer.tagName).toBe("FOOTER");
    expect(footer.querySelector("p").textContent).toBe("Copyright © 2023 Nataly Fernandez y Aylin Santa Cruz Vargas")
  });
});
