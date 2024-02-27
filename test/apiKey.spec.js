import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe("getApiKey", () => {
  it("should return the value of the API key", () => {
    const apiKey = "1284jdfdhdus";
    setApiKey(apiKey);
    expect(getApiKey()).toBe("1284jdfdhdus");
  });

  it("should return false if there is no api key", () => {
    const apiKey = "";
    setApiKey(apiKey);
    expect(getApiKey()).toBeFalsy();
  });
});

describe("setApiKey", () => {
  it("should set the API Key correctly", () => {
    const apiKey = "1234";
    expect(localStorage.getItem('apiKey')).toBe(apiKey);
  });

  it("should return false if the API is not saved", () => {
    const apiKey = "";
    setApiKey(apiKey);
    expect(localStorage.getItem('apiKey')).toBeFalsy();
  });
});
