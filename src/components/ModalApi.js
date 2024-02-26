import { getApiKey } from "../lib/apiKey.js";
import { navigateTo } from "../router.js";

export const modalApi = (ruta) => {
  const modalKey = document.createElement("form");
  const title = document.createElement("h3");
  const input = document.createElement("div");
  const content = document.createElement("a");
  const buttonContainer = document.createElement("div");
  modalKey.setAttribute("class", "modalKey");
  title.setAttribute("class", "titleModal");
  input.setAttribute("class", "containerInput");
  input.innerHTML = `<img class="pokebolaKey" src="assets/pokemones/pokebola.png"><input type="password" autocomplete="off"/>`;
  content.setAttribute("target", "_blank");
  content.setAttribute("class", "generateApi");
  content.setAttribute("href", "https://platform.openai.com/api-keys");
  buttonContainer.setAttribute("class", "buttonContainer");
  title.textContent = `¡Conversa con tu Pokemones favoritos! Ingresa tu APIKEY y descubre la magia del chat Pokemon.`;
  content.textContent = `No tienes un APIKEY ¡Genera una!`;
  buttonContainer.innerHTML = `<button type="submit" class="cancel">Cancelar</button>
                                <button class="accept">Aceptar</button>`;
  // modalKey.append(title, buttonContainer, input, content, buttonContainer);
  if (!getApiKey()) {
    modalKey.append(title, buttonContainer, input, content, buttonContainer);
    // Agrega aquí la lógica para mostrar el modal
  } else {
    navigateTo(ruta,{});
  }

  return modalKey;
};
