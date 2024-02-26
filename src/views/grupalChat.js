import { InputChat } from "../components/InputChat.js";
import { BubblesChat } from "../components/BubblesChat.js";
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
    `;

  const mainSection = document.createElement("section");
  const sectionChat = document.createElement("section");
  const sectionInput = document.createElement("section");
  const aside = document.createElement("aside");
  main.setAttribute("id", "grupal-chat");
  mainSection.setAttribute("id", "main-sectionChat");
  sectionChat.setAttribute("id", "sectionChat");
  sectionInput.setAttribute("id", "inputChatG");
  aside.setAttribute("class", "aside-pokemons");
  sectionInput.appendChild(InputChat());

  const inputStyle = sectionInput.querySelector(".inputChat");
  const buttonStyle = sectionInput.querySelector("#send-message");
  inputStyle.style.width = "1030px";
  inputStyle.style.height = "80px";
  inputStyle.style.margin = "0 0 20px 0";

  buttonStyle.style.right = "420px";
  buttonStyle.style.bottom = "40px";
  // inputStyle.style.margin-bottom= '-3px';

  aside.innerHTML = `
    <div class="conected-pokemons">
        
        <h3 id="pokemonName">Charmander</h3>
        <div id="pokemonImagec">
        <img src="../assets/pokemones/Charmander.png" alt="">
        </div>
    </div>

    <div class="conected-pokemons">
        
        <h3 id="pokemonName">Pikachu</h3>
        <div id="pokemonImagec">
        <img src="../assets/pokemones/Pikachu.png" alt="">
        </div>
    </div>


    <div class="conected-pokemons">
        
        <h3 id="pokemonName">Bulbasaur</h3>
        <div id="pokemonImagec">
        <img src="../assets/pokemones/Bulbasaur.png" alt="">
        </div>
    </div>

    <div class="conected-pokemons">
        
        <h3 id="pokemonName">Clefairy</h3>
        <div id="pokemonImagec">
        <img src="../assets/pokemones/Clefairy.png" alt="">
        </div>
    </div>

    <div class="conected-pokemons">
        
        <h3 id="pokemonName">Ekans</h3>
        <div id="pokemonImagec">
        <img src="../assets/pokemones/Ekans.png" alt="">
        </div>
    </div>
    
    `;

  sectionChat.appendChild(BubblesChat(data[0], "ads", "sadsdsd"));
  sectionChat.appendChild(sectionInput);
  mainSection.append(sectionChat, aside);
  main.appendChild(mainSection);
  // main.appendChild(sectionInput);
  const recoilArrow = main.querySelector(".recoilArrow");
  recoilArrow.addEventListener("click", () => {
    //navigateTo("/home", {});
    history.back();
  });
  return main;
};
