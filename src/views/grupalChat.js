import { InputChat } from "../components/InputChat.js";
import { BubblesChat } from "../components/BubblesChat.js";
export const GrupalChat=()=>{
    const main =document.createElement("main");
    const section = document.createElement("section");
    main.setAttribute( "id","grupal-chat" );
    section.setAttribute( "id","inputChat" );
    section.appendChild((InputChat()))

    main.innerHTML=`
    <section id="iconschat">
        <div class="recoilArrow"><i class="fa-solid fa-arrow-left"></i></div>
        <div class="chatIcon"><i class="fa-solid fa-comments fa-2xl"></i></div>
    </section>
    `
    main.appendChild(BubblesChat("ads","sadsdsd"));
    main.appendChild(section);

    const recoilArrow = main.querySelector(".recoilArrow");
    recoilArrow.addEventListener("click", () => {
        //navigateTo("/home", {});
        history.back();
      });
    return main;
} 