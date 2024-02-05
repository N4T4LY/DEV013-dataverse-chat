import { navigateTo } from "../router.js";
import data from "../data/dataset.js";
export const DetailCard = (pokemon) => {
  const main = document.createElement("main");
  const polygon = document.createElement("div");
  const containerLeft = document.createElement("section");
  const containerRight = document.createElement("section");
  main.setAttribute("class", "infoPokemon");
  polygon.setAttribute("class", "poligon");
  containerLeft.setAttribute("class", "containerLeft");
  containerRight.setAttribute("class", "containerRight");

  let weaknesses = "";
  let evolutions = "";
 
      //Agrega imagenes de las debilidades de cada pokemón
      for (let i = 0; i < pokemon.weaknesses.weaknessesName.length; i++) {
        weaknesses += `<img src="${pokemon.weaknesses.weaknessesImage[i]}" alt="${pokemon.weaknesses.weaknessesName[i]}"/>`;
      }
   console.log("debilidades",weaknesses);

  // Agrega imagenes de las evoluciones de cada pokemón
   for (let i = 0; i < pokemon.evolutions.evolutionName.length; i++) {
     evolutions += `<img src=${pokemon.evolutions.evolutionImage[i]} alt=${pokemon.evolutions.evolutionName[i]}/>`;
  }

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
                <td class="datoP">${pokemon.height} M</td>
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
        ${weaknesses}
        </div>
    </div>
    <div class="evolution">
        <h3>Evoluciones</h3>
        <div class="evolutionImage">
        ${evolutions}
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
