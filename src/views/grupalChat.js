export const GrupalChat=()=>{
    const main =document.createElement("main");
    main.setAttribute( "id","grupal-chat" );
    main.innerHTML=`
    <section id="iconschat">
        <div class="recoilArrow"><i class="fa-solid fa-arrow-left"></i></div>
        <div class="chatIcon"><i class="fa-solid fa-comments fa-2xl"></i></div>
    </section>
    
    <section id="chatG">
        <div id="userC">
            <h3 id="userName">Tú</h3>
            <div id="userImage">
                <i class="fa-solid fa-user"></i>
            </div>
        
        
        </div> 
        <div id="answerChatU">
        <p>"Hola, Charmander. Cuéntame más sobre tus habilidades."</p></div>
        
        <div id="pokemonC">
        
            <div id="pokemonImage">
                <img src="../assets/pokemones/Charmander.png" alt="">
            </div>
            <h3 id="pokemonName">Charmander</h3>
        </div>
        <div class="answerChatP"><p>Charmander (AI de OpenAI): "¡Hola! Claro, estaré encantada de hablar sobre eso. Mi habilidad es el fuego. Además, potencia mis movimientos de tipo Fuego cuando me quedan poco PS. ¿Hay algo más en particular que te gustaría saber?"</p></div>
    </section>    
    <section id="inputChat">
            <input type=text id="inputGrupal" placeholder="Escribe tu mensaje">
            <button id="sendButton"><img src="../assets/send.png" alt=""></button>
    
    </section>
   
    `
    const recoilArrow = main.querySelector(".recoilArrow");
    recoilArrow.addEventListener("click", () => {
        //navigateTo("/home", {});
        history.back();
      });
    return main;
} 