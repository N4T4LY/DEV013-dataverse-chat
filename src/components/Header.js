export const Header = () => {
  const header = document.createElement("header");
  const changeApi = document.createElement("div");
  const container = document.createElement("div");
  changeApi.setAttribute("class", "changeApi");
  container.setAttribute("class", "container-change");
  header.innerHTML = `<h1>P<img class="pokebolaHeader" src="assets/pokemones/pokebola.png" alt="pokebola"/>kéDex</h1>`;
  changeApi.innerHTML = `<ion-icon name="key-outline"></ion-icon>`;
  container.innerHTML = `<p class="change-title">Cambia tu ApiKey</p>`;
  changeApi.appendChild(container);
  header.appendChild(changeApi);
  changeApi.addEventListener("mouseover", () => {
    container.style.display = "block";
  });
  changeApi.addEventListener("mouseout", () => {
    container.style.display = "none";
  });
  return header;
};
