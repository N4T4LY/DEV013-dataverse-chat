import { communicateWithOpenAI } from "../lib/openAIApi.js";
import { InputChat } from "../components/InputChat.js";
import { BubblesChat } from "../components/BubblesChat.js";
import { TypingBubble } from "../components/TypingBubble.js";

import data from "../data/dataset.js";
export const GrupalChat = () => {
  const main = document.createElement("main");
  main.innerHTML = `
    <section id="iconschat">
        <div class="recoilArrowG" ><i class="fa-solid fa-arrow-left"></i></div>
        <div class="titleChatG">
        <h1>Chat Pokedex</h1>
        <p style="text-align:center;">Maestros Pokemón: Conéctate, comparte y domina el mundo Pokémon en nuestro chat grupal.</p>
        </div>
    </section>
    `;
  const mainSection = document.createElement("section");
  const sectionChat = document.createElement("section");
  const divChat = document.createElement("section");
  const divTyping = document.createElement("section");
  const sectionInput = document.createElement("section");
  const aside = document.createElement("aside");
  main.setAttribute("id", "grupal-chat");
  mainSection.setAttribute("id", "main-sectionChat");
  sectionChat.setAttribute("id", "sectionChat");
  divChat.setAttribute("id", "divChat");
  divTyping.setAttribute("id", "divTyping");
  sectionInput.setAttribute("id", "inputChatG");
  aside.setAttribute("class", "aside-pokemons");
  sectionInput.appendChild(InputChat());
  const inputStyle = sectionInput.querySelector(".inputChat");
  // const buttonStyle = sectionInput.querySelector("#send-message");
  inputStyle.style.width = "100%";
  inputStyle.style.height = "80px";
  // inputStyle.style.margin = "0 0 20px 0";
  // buttonStyle.style.right = "420px";
  // buttonStyle.style.bottom = "32px";

  sectionChat.append(divChat, divTyping,sectionInput);
  mainSection.append(sectionChat, aside);
  main.appendChild(mainSection);
  // main.appendChild(sectionInput);
  const recoilArrowG = main.querySelector(".recoilArrowG");
  recoilArrowG.addEventListener("click", () => {
    //navigateTo("/home", {});
    history.back();
  });
  const buttonSend = main.querySelector(".sendMessage");
  const input = main.querySelector(".inputChat");

  let conectedPokemons = [];
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function generateConectedPokemons() {
    const limit = parseInt(getRandomArbitrary(1, 10));
    console.log("Conected pokemons:", limit);
    data.forEach((pokemon,index) => {
      if (input.value && index<=limit) {
        conectedPokemons.push(pokemon)
      }
    });

    conectedPokemons = data.slice(0, limit);
    console.log("Array pokemons conectados:", conectedPokemons);
    asideConnectedPokemons();
  }

  function asideConnectedPokemons() {
    aside.innerHTML = "";
    conectedPokemons.forEach((pokemon) => {
      const pokemonDiv = document.createElement("div");
      pokemonDiv.setAttribute("class", "conected-pokemons");

      pokemonDiv.innerHTML = `
     
        <h3 id="pokemonName">${pokemon.name}</h3>
        <div class= "imageContainer" >
          <div id="pokemonImagec">
            <img src="${pokemon.image}" alt="${pokemon.name}">
          </div>
          <div class="connected"></div>
        </div>
      
      `;
      aside.appendChild(pokemonDiv);
    });
  }

  generateConectedPokemons();
  let pokemonNames=[]
  buttonSend.addEventListener("click", () => {
  
    conectedPokemons.forEach((pokemon) => {
      pokemonNames.push(pokemon.name);

      if(pokemonNames.length===conectedPokemons.length){
        console.log("name",pokemonNames)
       
        divTyping.appendChild(TypingBubble(pokemonNames));
      }
     
      communicateWithOpenAI(pokemon.name, input.value)
        .then((res) => res.json())
        .then((data) => {
          const typingBubble = document.getElementById("typing-bubble");
          
          console.log("typee",typingBubble)
          // setTimeout(() => {
          //   if (typingBubble) {
          //     typingBubble.remove();
          //   }
          // }, 500);

          if (typingBubble) {
            typingBubble.remove();
          }
          divChat.appendChild(
            BubblesChat(pokemon, input.value, data.choices[0].message.content)
          );
          divChat.scrollTop = divChat.scrollHeight;
          input.value = "";
        })
        .catch((error) => {
          console.error(error);
        });
     
    });
    pokemonNames=[]
  });

  return main;
};
