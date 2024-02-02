import { navigateTo } from "../router.js";
import data from "../data/dataset.js"
export const DetailCard = (pokemon) => {
    
  const main = document.createElement("main");
  const polygon = document.createElement("div");
  const containerLeft = document.createElement("section");
  const containerRight = document.createElement("section");
  main.setAttribute("class", "infoPokemon");
  polygon.setAttribute("class", "poligon");
  containerLeft.setAttribute("class", "containerLeft");
  containerRight.setAttribute("class", "containerRight");

  containerLeft.innerHTML = `
    <div class="chatPersonal">
        <i class="fa-brands fa-rocketchat"></i>
    </div>
    <img src="${pokemon.image}" alt="${pokemon.name}">
    <div class="baseStats">
        <i class="fa-solid fa-chart-simple"></i>
    </div>`;
  containerRight.innerHTML = `
  <div class="recoilArrow"><i class="fa-solid fa-arrow-left"></i></div>
  <h1>${pokemon.name}</h1>
    <p>${pokemon.description}</p>
    <div class="table">
        <table>
            <tr>
                <th class="altura">Altura</th>
                <td class="datoP">${pokemon.heigth} M</td>
            </tr>
            <tr>
                <th class="peso">Peso</th>
                <td>${pokemon.weight} Kg</td>
            </tr>
        </table>

        <table>
            <tr>
                <th class="altura">Categoria</th>
                <td class="datoP">${pokemon.category}</td>
            </tr>
            <tr>
                <th class="peso">Habilidad</th>
                <td>${pokemon.ability}</td>
            </tr>
        </table>
    </div>

    <div class="debilidadesDetails">
        <h3>Debilidades</h3>
        <div class="debilidadesImages">
            <img src="./assets/pokemones/psiquico.png" alt="">
            <img src="./assets/pokemones/fuego.png" alt="">
            <img src="./assets/pokemones/volador.png" alt="">
            <img src="./assets/pokemones/hielo.png" alt="">
        </div>
    </div>
    <div class="evolution">
        <h3>Evoluciones</h3>
        <div class="evolutionImage">
            <img src="./assets/pokemones/Bulbasaur.png" alt="">
            <img src="./assets/pokemones/Ivysaur.png" alt="">
            <img src="./assets/pokemones/Venosaur.png" alt="">
        </div>
    </div>
`;
  main.appendChild(polygon);
  main.appendChild(containerLeft);
  main.appendChild(containerRight);

  const recoilArrow = main.querySelector(".recoilArrow");
  console.log(recoilArrow);
  recoilArrow.addEventListener("click", () => {
    navigateTo("/home", {});
  });
  return main;
};
