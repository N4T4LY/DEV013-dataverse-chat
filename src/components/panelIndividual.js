import data from "../data/dataset.js";
import { InputChat } from "./InputChat.js";
import { BubblesChat } from "./BubblesChat.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import { TypingBubble } from "./TypingBubble.js";

export const panelIndividual = (pokemon) => {
  let typeName;
  const panel = document.createElement("section");
  const sectionName = document.createElement("aside");
  const sectionDiv = document.createElement("aside");
  const sectionTyping = document.createElement("aside");
  const sectionInput = document.createElement("aside");
  const chat = document.createElement("div");
  const chatTitle = document.createElement("div");
  sectionTyping.id = "section-typing";
  panel.id = "panel-chatIndividual";

  sectionDiv.setAttribute("id", "individual-chat");
  sectionInput.setAttribute("class","section-input")
  panel.setAttribute("class", "panelPersonal");
  chat.setAttribute("class", "imageChat");
  chatTitle.setAttribute("class", "chatTitle");
  sectionName.setAttribute("class", "nameSection");
  
  const getName = data.find((item) => item.name === pokemon.name);
  
  if (getName.type.typeName.length === 1) {
    typeName = getName.type.typeName[0];
  } else {
    const type1 = getName.type.typeName[0];
    const type2 = getName.type.typeName[1];
    typeName = `${type1} y ${type2}`;
  }

  
  chatTitle.innerHTML = `<h2>${getName.name}</h2>
                            <span>Tipo ${typeName}</span>`;
  chat.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  sectionName.append(chatTitle, chat);
  sectionInput.append(InputChat());
 
  panel.append(sectionName, sectionDiv,sectionTyping, sectionInput);

  const styleInput = panel.querySelector(".inputChat");
  const styleButton = panel.querySelector("#send-message");
  const buttonSend = panel.querySelector(".sendMessage");
  const input = panel.querySelector(".inputChat");
  console.log(styleInput);
  styleInput.style.width = "680px";
  styleInput.style.height = "80px";
  styleInput.style.margin = "0";

  styleButton.style.right = "60px";
  styleButton.style.bottom = "33px";

  buttonSend.addEventListener("click", () => {
    if (input.value) {
      sectionTyping.appendChild(TypingBubble(pokemon.name));
      communicateWithOpenAI(pokemon.name, input.value)
        .then((res) => res.json())
        .then((data) => {
          const typingBubble = document.getElementById("typing-bubble");
          console.log(typingBubble)
          if (typingBubble) {
            typingBubble.remove();
          }
  
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
