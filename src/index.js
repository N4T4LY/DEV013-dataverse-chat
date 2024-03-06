import { Welcome } from "./views/Welcome.js";
import { Home } from "./views/Home.js";
import { DetailCard } from "./views/DetailCard.js";
import { Error } from "./views/Error.js";
import { setRoutes, setRootEl, onURLChange } from "./router.js";
import { GrupalChat } from "./views/grupalChat.js";

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
  setRootEl(root);
  onURLChange(e.currentTarget.location);
});

// POPSATE
window.addEventListener("popstate", () => {
  onURLChange(window.location);
});

