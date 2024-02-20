export const InputChat = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const buttonSend = document.createElement("button");
  input.setAttribute("class", "inputChat");
  input.setAttribute("placeholder", "Escribe tu mensaje");
  input.setAttribute("type", "text");
  buttonSend.id = "send-message";
  buttonSend.setAttribute("type", "submit");
  buttonSend.innerHTML = `<ion-icon name="send"></ion-icon>`;

  form.setAttribute("class", "inputChatContainer");
  form.appendChild(input);
  form.appendChild(buttonSend);

  return form;
};
