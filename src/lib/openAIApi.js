// import OpenAI from "openai";
import { getApiKey } from "./apiKey.js";

// const openai = new OpenAI();
const recieveApi = getApiKey();

export const communicateWithOpenAI = async (pokemon, input) => {
  // console.log(pokemon, input);
  //Aquí es donde debes implementar la petición con fetch o axios
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

//  console.log(communicateWithOpenAI("Charizard").then((res)=>{
//     console.log(res.json().then((data) =>{
//         console.log(data.choices[0].message)
//     })
//     .catch(() => {
//         console.log("Expiro tu Api")
//     }))
//  }))

//Consumo de Promesas
