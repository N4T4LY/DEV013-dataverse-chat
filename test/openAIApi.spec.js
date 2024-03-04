import { communicateWithOpenAI } from "../src/lib/openAIApi.js";
// eslint-disable-next-line no-undef
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
);
// eslint-disable-next-line no-undef
console.log("d",global.fetch)
describe("OpenAI", () => {
  it("communicateWithOpenAI exists", () => {
    const callPromise = communicateWithOpenAI();
    expect(callPromise).toBeInstanceOf(Promise);
  });


  it("the API response correctly", async () => {
    const response = {
      choices: [
        {
          message: {
            role: "system",
            content: "Hola, como estas?",
          },
        },
      ],
    };

    // eslint-disable-next-line no-undef
    global.fetch.mockResolvedValueOnce({
    //   ok: true,
    //   json: async () => response,
      json: () => Promise.resolve(response),
    })
    const captureData =  communicateWithOpenAI("Charmander","hola").then((res) => res.json())
      .then((data) => {
        console.log("DATA",data)
        // console.log("CAPTURE DATA",captureData)
        expect(data).toEqual(response);  
        // console.log("response",response)
      })
    return captureData;
    // console.log("CAPTURE DATA",captureData)
    // expect(captureData).toEqual(response);  
    // console.log("response",response)
  });
});
