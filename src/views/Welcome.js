import { navigateTo } from "../router.js";
import { modalApi } from "../components/ModalApi.js";
import { setApiKey, getApiKey } from "../lib/apiKey.js";
import { Footer } from "../components/Footer.js";
export const Welcome = () => {
  const main = document.createElement("div");
  const polygon = document.createElement("div");
  const containerLeft = document.createElement("div");
  const containerRight = document.createElement("div");
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const button = document.createElement("button");
  const overlayDetails = document.createElement("div");
 
  overlayDetails.classList.add("overlay");
  main.setAttribute("id", "welcoming");
  containerLeft.setAttribute("class", "image");
  polygon.setAttribute("class", "polygon");
  img.setAttribute("src", "./assets/pokemones/pokemons-welcome.png");
  containerRight.setAttribute("class", "text");
  button.setAttribute("id", "close-welcoming");
 

  h1.innerHTML = "¡Bienvenidos a PokéDex!";
  p.innerHTML = "¡Encuentra a tu Pokémon!";
  button.innerHTML = "INICIAR";
  

  //containerLeft
  containerLeft.appendChild(img);

  //containerRight
  containerRight.appendChild(h1);
  containerRight.appendChild(p);
  containerRight.appendChild(button);
  containerRight.appendChild(Footer());

  main.appendChild(polygon);
  main.appendChild(containerLeft);
  main.appendChild(containerRight);
  main.appendChild(overlayDetails);
  button.addEventListener("click", () => {
    if (!getApiKey()) {
      main.appendChild(modalApi());
      const modalKey = main.querySelector(".modalKey");
      const closeModal = main.querySelector(".cancel");
      closeModal.addEventListener("click", () => {
        modalKey.remove();
        overlayDetails.classList.toggle("overlay-active");
        navigateTo("/home", {});
      });
      modalKey.addEventListener("submit", (e) => {
        e.preventDefault();
        const sendApi = main.querySelector("input[type ='password']").value;
        if (sendApi) {
          setApiKey(sendApi);
          navigateTo("/home", {});
          modalKey.remove();
        }
      });
      overlayDetails.classList.toggle("overlay-active");
    }else{
      navigateTo("/home", {});
    }
  });
  return main;
};
