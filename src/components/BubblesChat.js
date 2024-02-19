export const BubblesChat = (message1, message2) => {
  const chats = document.createElement("section");
  chats.setAttribute("id", "chats")
  chats.innerHTML = `
    <article id="userC">
        <h3 id="userName">Tú</h3>
        <div id="userImage">
            <i class="fa-solid fa-user"></i>
        </div>
    </article> 
    <article id="answerChatU">
    <p>${message1}</p>
    </article>

    <article id="pokemonC">
        <div id="pokemonImage">
            <img src="../assets/pokemones/Charmander.png" alt="">
        </div>
        <h3 id="pokemonName">Charmander</h3>
    </article>

    <article class="answerChatP">
        <p>${message2}</p>
    </article>
    
    `





  return chats;
}
