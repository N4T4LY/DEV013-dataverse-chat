import data from "../data/dataset.js";
import { modalApi } from "../components/ModalApi.js";
import { getApiKey, setApiKey } from "../lib/apiKey.js";
import { panelIndividual } from "../components/panelIndividual.js";

export const DetailCard = (pokemon) => {
  // console.log("detalle", pokemon);
  let weaknesses = "";
  let evolutions = "";
  const main = document.createElement("main");
  const polygon = document.createElement("div");
  const containerLeft = document.createElement("section");
  const containerRight = document.createElement("section");
  const recoilArrow = document.createElement("section");
  const overlayDetails = document.createElement("div");
  overlayDetails.classList.add("overlay");
  main.setAttribute("class", "infoPokemon");
  polygon.setAttribute("class", "poligon");
  recoilArrow.setAttribute("class", "recoilArrow");
  containerLeft.setAttribute("class", "containerLeft");
  containerRight.setAttribute("class", "containerRight");

  const pokemon1 = data.find((item) => item.name === pokemon.name);
  //Agrega imagenes de las debilidades de cada pokemón
  for (let i = 0; i < pokemon1.weaknesses.weaknessesName.length; i++) {
    weaknesses += `<div class="borderWeaknesses">
                      <img src="${pokemon1.weaknesses.weaknessesImage[i]}" alt="${pokemon1.weaknesses.weaknessesName[i]}"/>
                      <p>${pokemon1.weaknesses.weaknessesName[i]}</p>
                    </div>`;
  }

  // Agrega imagenes de las evoluciones de cada pokemón
  for (let i = 0; i < pokemon1.evolutions.evolutionName.length; i++) {
    evolutions += `<div class="borderEvolution">
                        <img src=${pokemon1.evolutions.evolutionImage[i]} alt=${pokemon1.evolutions.evolutionName[i]}/>
                    </div>`;
  }
  const propertyBase = [];
  const resultBase = [];
  for (const property in pokemon1.baseStats) {
    propertyBase.push(property);
    resultBase.push(pokemon1.baseStats[property]);
  }
  recoilArrow.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`;
  containerLeft.innerHTML = `
    <div class="chatPersonal">
        <i class="fa-solid fa-comment fa-xl"></i>
        <p class="titleChat">Chat</p>
      </div>
      <img src="${pokemon1.image}" alt="${pokemon1.name}">
      <div class="baseStats">
          <i class="fa-solid fa-chart-simple baseStatsChart"></i>
      </div>`;
  containerRight.innerHTML = `
  <div class="containerGreen">
    <h1>${pokemon1.name}</h1>
    <p>${pokemon1.description}</p>
    <div class="table">
        <table>
            <tr>
                <th class="altura">Altura</th>
                <td class="datoP">${pokemon1.height} M</td>
            </tr>
            <tr>
                <th class="peso">Peso</th>
                <td>${pokemon1.weight} Kg</td>
            </tr>
        </table>

        <table>
            <tr>
                <th class="altura">Categoria</th>
                <td class="datoP">${pokemon1.category}</td>
            </tr>
            <tr>
                <th class="peso">Habilidad</th>
                <td>${pokemon1.ability}</td>
            </tr>
        </table>
    </div>

    <div class="weaknessessDetails">
        <h3>Debilidades</h3>
        <div class="weaknessesImages">
        ${weaknesses}
        </div>
    </div>
    <div class="evolution">
        <h3>Evoluciones</h3>
        <div class="evolutionImage">
        ${evolutions}
        </div>
    </div>
  </div>
`;
  main.append(
    polygon,
    recoilArrow,
    containerLeft,
    containerRight,
    overlayDetails
  );

  const chatModal = main.querySelector(".chatPersonal");
  // const recoilArrow = main.querySelector(".recoilArrow");
  const baseStats = main.querySelector(".baseStatsChart");

  chatModal.addEventListener("click", () => {
    if (!getApiKey()) {
      main.appendChild(modalApi());
      const modalKey = main.querySelector(".modalKey");
      const closeModal = main.querySelector(".cancel");
      // const closeChat = main.querySelector(".imageChat");
      closeModal.addEventListener("click", () => {
        modalKey.remove();
        overlayDetails.classList.toggle("overlay-active");
      });
      modalKey.addEventListener("submit", (e) => {
        e.preventDefault();
        const sendApi = main.querySelector("input[type ='password']").value;
        // localStorage.setItem("sendApi",sendApi)
        if (sendApi) {
          setApiKey(sendApi);
          main.appendChild(panelIndividual(pokemon));
          modalKey.remove();
          const panelPersonal = main.querySelector(".panelPersonal");
          const closeChat = main.querySelector(".imageChat");
          closeChat.addEventListener("click", () => {
            panelPersonal.remove();
            overlayDetails.classList.toggle("overlay-active");
          });
        }
      });
      overlayDetails.classList.toggle("overlay-active");
    } else {
      main.appendChild(panelIndividual(pokemon));
      const panelPersonal = main.querySelector(".panelPersonal");
      const closeChat = main.querySelector(".imageChat");
      closeChat.addEventListener("click", () => {
        panelPersonal.remove();
        overlayDetails.classList.toggle("overlay-active");
      });
      overlayDetails.classList.toggle("overlay-active");
    }
    // overlayDetails.classList.toggle("overlay-active");
  });

  recoilArrow.addEventListener("click", () => {
    //navigateTo("/home", {});
    history.back();
  });

  baseStats.addEventListener("click", () => {
    const modalBase = document.createElement("div");
    const titleBase = document.createElement("h2");
    const canvasBase = document.createElement("canvas");
    const close = document.createElement("div");
    // const overlayDetails = document.createElement("div");
    // overlayDetails.classList.add("overlay");
    overlayDetails.classList.toggle("overlay-active");
    canvasBase.setAttribute("name", "myChartBase");
    close.setAttribute("class", "closeEstadistic");
    modalBase.classList.add("modalBase");
    titleBase.textContent = `Estadisticas`;
    close.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    modalBase.append(close, titleBase, canvasBase);
    containerLeft.appendChild(overlayDetails);
    containerLeft.appendChild(modalBase);
    const stadisticBase = main.querySelector("canvas[name='myChartBase']");
    const closeModal = main.querySelector(".closeEstadistic");
    closeModal.addEventListener("click", () => {
      modalBase.remove();
      overlayDetails.classList.toggle("overlay-active");
    });
    // eslint-disable-next-line no-undef
    new Chart(stadisticBase, {
      type: "bar",
      data: {
        labels: propertyBase,
        datasets: [
          {
            label: "Cantidad de caracteristicas",
            data: resultBase,
            maxBarThickness: 50,
            borderWidth: 1,
            backgroundColor: "#9BD0F5",
            font: {
              size: 14,
              weight: "bolder",
            },
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });

  return main;
};
