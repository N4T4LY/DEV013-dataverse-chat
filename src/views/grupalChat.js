import { InputChat } from "../components/InputChat.js";
import { BubblesChat } from "../components/BubblesChat.js";
export const GrupalChat=()=>{
    const main =document.createElement("main");
    
    main.innerHTML=`
    <section id="iconschat">
        <div class="recoilArrow"><i class="fa-solid fa-arrow-left"></i></div>
        <div class="titleChatG">
        <h1>Chat Pokedex</h1> 
        <p>Maestros Pokemón: Conéctate, comparte y domina el mundo Pokémon en nuestro chat grupal.</p>
        </div>
        
    </section>
    `

    const mainSection=document.createElement("section");
    const sectionChat = document.createElement("section");
    // const sectionInput = document.createElement("section");
    const aside=document.createElement("aside");
    main.setAttribute( "id","grupal-chat" );
    mainSection.setAttribute("id","main-sectionChat")
    sectionChat.setAttribute("id","sectionChat");
    // sectionInput.setAttribute( "id","inputChatG" );
    aside.setAttribute("class","aside-pokemons");
    // sectionInput.appendChild((InputChat()))
    aside.innerHTML=`
    <div class="conected-pokemons">
        <div id="pokemonImage">
        <img src="../assets/pokemones/Charmander.png" alt="">
        </div>
        <h3 id="pokemonName">Charmander</h3>
    </div>
    
    `    

    sectionChat.appendChild(BubblesChat("ads","sadsdsd"));
    sectionChat.appendChild(InputChat());
    mainSection.appendChild(sectionChat)
    mainSection.appendChild(aside);
    main.appendChild(mainSection);
    // main.appendChild(sectionInput);
    const recoilArrow = main.querySelector(".recoilArrow");
    recoilArrow.addEventListener("click", () => {
        //navigateTo("/home", {});
        history.back();
      });
    return main;
} 