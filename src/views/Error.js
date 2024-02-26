import { navigateTo } from "../router.js";
export const Error = () => {
  const containerError = document.createElement("main");
  const error = document.createElement("h1");
  const title = document.createElement("h2");
  const buttonBack = document.createElement("button");
  containerError.setAttribute("class", "containerError");
  title.setAttribute("class", "titleNotFound");
  buttonBack.setAttribute("class", "buttonBack");
  error.setAttribute("class", "title404");
  error.innerHTML = `4<img class="error404" src="assets/pokemones/Pokebola404.png"/>4`;
  title.textContent = `Pagina no encontrada`;
  buttonBack.textContent = "Volver al Inicio";
  containerError.append(error, title, buttonBack);
  const backHome = containerError.querySelector(".buttonBack");
  backHome.addEventListener("click", () => {
    navigateTo("/home", {});
  });
  return containerError;
};
