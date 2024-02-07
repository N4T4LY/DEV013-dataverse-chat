import { navigateTo } from "../router.js";
export const Error = () => {
  const containerError = document.createElement("main");
  const title = document.createElement("h2");
  const buttonBack = document.createElement("button");
  containerError.setAttribute("class", "containerError");
  buttonBack.setAttribute("class", "buttonBack");
  title.textContent = `Pagina no encontrada`;
  buttonBack.textContent = "Volver al Inicio";
  containerError.append(title, buttonBack);
  const backHome = containerError.querySelector(".buttonBack");
  console.log(backHome);
  backHome.addEventListener("click", () => {
    navigateTo("/home", {});
  });
  return containerError;
};
