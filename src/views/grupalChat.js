import {
  communicateWithOpenAI
} from "../lib/openAIApi.js";
import {
  InputChat
} from "../components/InputChat.js";
import {
  BubblesChat
} from "../components/BubblesChat.js";
import data from "../data/dataset.js";
export const GrupalChat = () => {
  const main = document.createElement("main");
  main.innerHTML = `
    <section id="iconschat">
        <div class="recoilArrow" ><i class="fa-solid fa-arrow-left"></i></div>
        <div class="titleChatG">
        <h1>Chat Pokedex</h1>
        <p>Maestros Pokemón: Conéctate, comparte y domina el mundo Pokémon en nuestro chat grupal.</p>
        </div>
    </section>
    `
  const mainSection = document.createElement("section");
  const sectionChat = document.createElement("section");
  const divChat = document.createElement("section");
  const sectionInput = document.createElement("section");
  const aside = document.createElement("aside");
  main.setAttribute("id", "grupal-chat");
  mainSection.setAttribute("id", "main-sectionChat")
  sectionChat.setAttribute("id", "sectionChat");
  divChat.setAttribute("id", "divChat");
  sectionInput.setAttribute("id", "inputChatG");
  aside.setAttribute("class", "aside-pokemons");
  sectionInput.appendChild((InputChat()))
  const inputStyle = sectionInput.querySelector(".inputChat");
  const buttonStyle = sectionInput.querySelector("#send-message");
  inputStyle.style.width = '100%';
  inputStyle.style.height = '80px';
  inputStyle.style.margin = '0 0 20px 0';
  buttonStyle.style.right = "400px";
  buttonStyle.style.bottom = "40px";
  aside.innerHTML = ``
  data.forEach(pokemon => {
    const pokemonDiv = document.createElement("div");
    pokemonDiv.setAttribute("class", "conected-pokemons")
    if (pokemon.connected) {
      pokemonDiv.classList.add("connected");
    } else {
      pokemonDiv.classList.add("disconnected");
    }
    pokemonDiv.innerHTML = `
        <h3 id="pokemonName">${pokemon.name}</h3>
        <div id="pokemonImagec">
            <img src="${pokemon.image}" alt="${pokemon.name}">
        </div>
        `;
    aside.appendChild(pokemonDiv);
  })
  sectionChat.appendChild(divChat);
  sectionChat.appendChild(sectionInput);
  mainSection.append(sectionChat, aside)
  main.appendChild(mainSection);
  // main.appendChild(sectionInput);
  const recoilArrow = main.querySelector(".recoilArrow");
  recoilArrow.addEventListener("click", () => {
    //navigateTo("/home", {});
    history.back();
  });
  const buttonSend = main.querySelector(".sendMessage");
  const input = main.querySelector(".inputChat");
  console.log(input);
  buttonSend.addEventListener("click", () => {
    // console.log(input.value);
    // input.value="";
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    const limit=parseInt(getRandomArbitrary(1,24))
    console.log("conected pokemons",limit)

    data.forEach((pokemon,index) => {
      if (input.value && index<=limit) {
        communicateWithOpenAI(pokemon.name, input.value)
          .then((res) => res.json())
          .then((data) => {

            divChat.appendChild(
              BubblesChat(pokemon, input.value, data.choices[0].message.content)
            );

            divChat.scrollTop = divChat.scrollHeight;
            input.value = "";
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  })

  return main;
}
