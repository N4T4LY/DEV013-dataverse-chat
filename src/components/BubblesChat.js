import data from "../data/dataset.js";

export const BubblesChat = (pokemon,message1, message2) => {
  const chats = document.createElement("section");
  chats.setAttribute("id", "chats");
  const detailPokemon = data.find((item) => item.name === pokemon.name);
  chats.innerHTML = `
    <article id="userC">
        <h3 id="userName">Tú</h3>
        <div id="userImage">
            <i class="fa-solid fa-user"></i>
        </div>
    </article> 
    <article id="answerChatU">
    <p id="pokemonName">${message1}</p>
    </article>

    <article id="pokemonC">
        <div id="pokemonImage">
            <img src="${detailPokemon.image}" alt="">
        </div>
        <h3 id="pokemonName">${detailPokemon.name}</h3>
    </article>

    <article class="answerChatP">
        <p>${message2}</p>
    </article>
    
    `;

  return chats;
};
