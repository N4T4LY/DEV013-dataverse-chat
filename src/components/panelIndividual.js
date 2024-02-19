import data from "../data/dataset.js";

export const panelIndividual = (pokemon) => {
  let typeName;
  const panel = document.createElement("section");
  const sectionName = document.createElement("aside");
  const sectionInput = document.createElement("aside");
  const sectionDiv = document.createElement("section");
  const inputChat = document.createElement("input");
  const buttonChat = document.createElement("button");
  const chat = document.createElement("div");
  const chatTitle = document.createElement("div");
  panel.id = "panel-chatIndividual";
  inputChat.id = "chat-input";
  buttonChat.id = "send-message";
  panel.setAttribute("class","panelPersonal")
  chat.setAttribute("class", "imageChat");
  chatTitle.setAttribute("class", "chatTitle");
  sectionName.setAttribute("class", "nameSection");
  inputChat.setAttribute("class", "inputChat");
  inputChat.setAttribute("type", "text");
  inputChat.setAttribute("placeholder", "Escribe tu mensaje");
  buttonChat.setAttribute("type", "submit");
  const getName = data.find((item) => item.name === pokemon.name);
  console.log(getName.type.typeName[0])
  if (getName.type.typeName.length === 1) {
    typeName = getName.type.typeName[0];
  } else {
    const type1 = getName.type.typeName[0];
    const type2 = getName.type.typeName[1];
    typeName = `${type1} y ${type2}`;
  }

  buttonChat.innerHTML = '<ion-icon name="send"></ion-icon>';
  chatTitle.innerHTML = `<h2>${getName.name}</h2>
                            <span>Tipo ${typeName}</span>`;
  chat.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  sectionName.append(chatTitle, chat);
  sectionInput.append(inputChat, buttonChat);
  panel.append(sectionName, sectionDiv, sectionInput);

  return panel;
};
