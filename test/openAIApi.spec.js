// import { getApiKey} from "../src/lib/apiKey.js";
import { communicateWithOpenAI } from "../src/lib/openAIApi.js";
/* eslint-disable */
global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve({}),
  })
);


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


    global.fetch.mockResolvedValueOnce({
      //   ok: true,
      //   json: async () => response,
      json: () => Promise.resolve(response),
    });
    const captureData = communicateWithOpenAI("Charmander", "hola")
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA", data);
        // console.log("CAPTURE DATA",captureData)
        expect(data).toEqual(response);
        // console.log("response",response)
      });
    return captureData;
    // console.log("CAPTURE DATA",captureData)
    // expect(captureData).toEqual(response);
    // console.log("response",response)
  });

  it("Test successful API request", async () => {
    const pokemon = "Charmander";
    const input = "hola";

    const response = await communicateWithOpenAI(pokemon, input);
    expect(response).toEqual({
      status: 200,
      json: expect.any(Function),
    });
  });

  // it("should send a request to the API with the provided parameters", async () => {
  //   const pokemon = "Charmander";
  //   const input = "hola";
  //   const api = "123456";
  //   localStorage.setItem("apiKey", api);
  //   // eslint-disable-next-line no-undef
  //   expect(global.fetch).toHaveBeenCalledWith(
  //     `https://api.openai.com/v1/chat/completions`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${api}`,
  //       },
  //       body: JSON.stringify({
  //         model: "gpt-3.5-turbo",
  //         messages: [
  //           {
  //             role: "system",
  //             content: `Tu eres este pokemon:  ${pokemon}, responde de manera corta o breve`,
  //           },
  //           {
  //             role: "user",
  //             content: input,
  //           },
  //         ],
  //       }),
  //     }
  //   );
  // });
});
