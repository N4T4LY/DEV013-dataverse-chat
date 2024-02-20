

export const InputChat = () => {
  const form = document.createElement("article");
  const input = document.createElement("input");
  const buttonSend = document.createElement("button");
  input.id = "chat-input";
  buttonSend.id = "send-message";
  form.setAttribute("class", "inputChatContainer");
  input.setAttribute("class", "inputChat");
  input.setAttribute("placeholder", "Escribe tu mensaje");
  input.setAttribute("type", "text");
  buttonSend.setAttribute("class","sendMessage")
  //   buttonSend.setAttribute("type", "submit");
  buttonSend.innerHTML = `<ion-icon name="send"></ion-icon>`;

  form.appendChild(input);
  form.appendChild(buttonSend);

//   buttonSend.addEventListener("click", () => {
//     // console.log(input.value);
//     communicateWithOpenAI(pokemon.name, input.value)
//       .then((res) => res.json())
//       .then((data) => {
//         BubblesChat(input.value, data.choices[0].message.content);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });

  return form;
};
