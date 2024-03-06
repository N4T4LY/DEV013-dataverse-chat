import { getApiKey } from "./apiKey.js";

const recieveApi = getApiKey();

export const communicateWithOpenAI = async (pokemon, input) => {
  const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + recieveApi,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Tu eres este pokemon:  ${pokemon}, responde de manera corta o breve`,
        },
        {
          role: "user",
          content: input,
        },
      ],
    }),
  });
  return response;
};

