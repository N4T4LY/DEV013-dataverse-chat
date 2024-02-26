import { navigateTo }  from "../router.js";
import { modalApi } from "../components/ModalApi.js";
import { setApiKey } from "../lib/apiKey.js";
export const Welcome = () => {
  const overlayDetails = document.createElement("div");
  const main = document.createElement("div");
  const containerLeft = document.createElement("div");
  const polygon = document.createElement("div");
  const img =document.createElement('img');
  const containerRight = document.createElement("div");
  const  h1 = document.createElement("h1");
  const p=document.createElement("p")
  const button=document.createElement("button");
  const footer=document.createElement("p");
  overlayDetails.classList.add("overlay");
  main.setAttribute("id", "welcoming");
  containerLeft.setAttribute("class","image");
  polygon.setAttribute("class","polygon")
  img.setAttribute("src","./assets/pokemones/pokemons-welcome.png")
  containerRight.setAttribute("class","text");
  button.setAttribute("id","close-welcoming");
  footer.setAttribute("class","footer");

  h1.innerHTML = "¡Bienvenidos a PokéDex!";
  p.innerHTML = "¡Encuentra a tu Pokémon!";
  button.innerHTML = "INICIAR";
  footer.innerHTML="Copyright © 2023 Nataly Fernandez Ovando y Aylin Santa Cruz Vargas";
  
  //containerLeft
 containerLeft.appendChild(polygon);
 containerLeft.appendChild(img);
  //containerRight
  containerRight.appendChild(h1);
  containerRight.appendChild(p);
  containerRight.appendChild(button);
  containerRight.appendChild(footer);

  main.appendChild(containerLeft);
  main.appendChild(containerRight);
 main.appendChild(overlayDetails);
  button.addEventListener("click",()=>{
    main.appendChild(modalApi("/home"));
    const modalKey = main.querySelector(".modalKey");
    const closeModal = main.querySelector(".cancel");
    // const acceptModal = main.querySelector(".accept"); 
           // const closeChat = main.querySelector(".imageChat");
    closeModal.addEventListener("click", () => {
      modalKey.remove();
      overlayDetails.classList.toggle("overlay-active");
      navigateTo("/home",{});
    });
    modalKey.addEventListener("submit", (e) => {
      e.preventDefault();
      const sendApi = main.querySelector("input[type ='password']").value;
      // localStorage.setItem("sendApi",sendApi)
      if (sendApi) {
        setApiKey(sendApi);
        // main.appendChild(panelIndividual(pokemon));
        navigateTo("/home",{});
        modalKey.remove();
       
        
      }
    });
    overlayDetails.classList.toggle("overlay-active");


    
    
    }) 
return main;
}
