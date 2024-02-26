import data from "../data/dataset.js";
import { InputChat } from "./InputChat.js";
import { BubblesChat } from "./BubblesChat.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";

export const panelIndividual = (pokemon) => {
  let typeName;
  const panel = document.createElement("section");
  const sectionName = document.createElement("aside");
  const sectionDiv = document.createElement("aside");
  const sectionInput = document.createElement("aside");
  // const inputChat = document.createElement("input");
  // const buttonChat = document.createElement("button");
  const chat = document.createElement("div");
  const chatTitle = document.createElement("div");
  sectionDiv.setAttribute("id", "individual-chat");
  panel.id = "panel-chatIndividual";
  // inputChat.id = "chat-input";
  // buttonChat.id = "send-message";
  panel.setAttribute("class", "panelPersonal");
  chat.setAttribute("class", "imageChat");
  chatTitle.setAttribute("class", "chatTitle");
  sectionName.setAttribute("class", "nameSection");
  // inputChat.setAttribute("class", "inputChat");
  // inputChat.setAttribute("type", "text");
  // inputChat.setAttribute("placeholder", "Escribe tu mensaje");
  // buttonChat.setAttribute("type", "submit");
  // buttonChat.addEventListener('click', ()=>{
  //   console.log(inputChat.value);
  // })
  const getName = data.find((item) => item.name === pokemon.name);
  console.log(getName.type.typeName[0]);
  if (getName.type.typeName.length === 1) {
    typeName = getName.type.typeName[0];
  } else {
    const type1 = getName.type.typeName[0];
    const type2 = getName.type.typeName[1];
    typeName = `${type1} y ${type2}`;
  }

  // buttonChat.innerHTML = '<ion-icon name="send"></ion-icon>';
  chatTitle.innerHTML = `<h2>${getName.name}</h2>
                            <span>Tipo ${typeName}</span>`;
  chat.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  sectionName.append(chatTitle, chat);
  sectionInput.append(InputChat());
  // panel.append(sectionName, sectionDiv, sectionInput);
  panel.append(sectionName, sectionDiv, sectionInput);

  const styleInput = panel.querySelector(".inputChat");
  const styleButton = panel.querySelector("#send-message");
  const buttonSend = panel.querySelector(".sendMessage");
  const input = panel.querySelector(".inputChat");
  console.log(styleInput);
  styleInput.style.width = "680px";
  styleInput.style.height = "80px";
  styleInput.style.margin = "20px";

  styleButton.style.right = "60px";
  styleButton.style.bottom = "40px";

  buttonSend.addEventListener("click", () => {
    // console.log(input.value);
    // input.value="";
    if (input.value) {
      communicateWithOpenAI(pokemon.name, input.value)
        .then((res) => res.json())
        .then((data) => {
          console.log(input.value, data.choices[0].message.content);
          sectionDiv.appendChild(
            BubblesChat(pokemon, input.value, data.choices[0].message.content)
          );
          sectionDiv.scrollTop = sectionDiv.scrollHeight;
          input.value = "";
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  return panel;
};
