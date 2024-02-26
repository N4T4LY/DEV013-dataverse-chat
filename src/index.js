// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { Welcome } from "./views/Welcome.js";
import { Home } from "./views/Home.js";
import { DetailCard } from "./views/DetailCard.js";
import { Error } from "./views/Error.js";
import { setRoutes, setRootEl, onURLChange } from "./router.js";
import { GrupalChat } from "./views/grupalChat.js";
/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
const routes = {
  "/": Welcome,
  "/home": Home,
  "/grupalChat": GrupalChat,
  "/detailCard": DetailCard,
  "/error": Error,
};

setRoutes(routes);
const root = document.getElementById("root");

document.addEventListener("DOMContentLoaded", (e) => {
//   console.log("e", e.currentTarget.location.pathname);
  setRootEl(root);
  onURLChange(e.currentTarget.location);
});

// POPSATE
window.addEventListener("popstate", () => {
//   console.log("eventob", e);
  onURLChange(window.location);
});
// window.onpopstate= onURLChange;
