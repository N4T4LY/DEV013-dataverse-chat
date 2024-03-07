import data from "../data/dataset.js";
import { Cards } from "../components/Cards.js";
import { Header } from "../components/Header.js";
import { Filters } from "../components/Filters.js";
import { Footer } from "../components/Footer.js";
import { sortData, filterData, computeStats } from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";
import { setApiKey, getApiKey } from "../lib/apiKey.js";
import { modalApi } from "../components/ModalApi.js";

export const Home = () => {
  let currentData = [...data];
  const newContainer = document.createElement("section");
  newContainer.setAttribute("class", "newContainer");
  newContainer.appendChild(Header());
  newContainer.appendChild(Filters());
  newContainer.appendChild(Cards(data));
  newContainer.appendChild(Footer());

  //change key
  const changeApi = newContainer.querySelector(".changeApi");
  changeApi.addEventListener("click", () => {
    newContainer.appendChild(modalApi());
    const modalKey = newContainer.querySelector(".modalKey");
    const closeModal = newContainer.querySelector(".cancel");
    closeModal.addEventListener("click", () => {
      modalKey.remove();
      overlay.classList.toggle("overlay-active");
    });
    modalKey.addEventListener("submit", () => {
      const sendApi = newContainer.querySelector(
        "input[type ='password']"
      ).value;
      setApiKey(sendApi);
      modalKey.remove();
      overlay.classList.toggle("overlay-active");
    });
    overlay.classList.toggle("overlay-active");
  });

  //button chat
  const buttonChat = document.createElement("section");
  buttonChat.setAttribute("id", "myBtnChat");
  buttonChat.innerHTML = `<i class="fa-solid fa-comments fa-xl" id="chatgrup"></i>`;
  newContainer.appendChild(buttonChat);

  //modal
  const modal = newContainer.querySelector("#myBtn");
  const modalContent = newContainer.querySelector(".modal-content");
  const overlay = newContainer.querySelector(".overlay");
  const sortOrderSelect = newContainer.querySelector(
    "select[data-testid='select-sort']"
  );

  const close = newContainer.querySelector(".fa-xmark");

  buttonChat.addEventListener("click", () => {
    if (!getApiKey()) {
      newContainer.appendChild(modalApi());
      const modalKey = newContainer.querySelector(".modalKey");
      const closeModal = newContainer.querySelector(".cancel");
      closeModal.addEventListener("click", () => {
        modalKey.remove();
        overlay.classList.toggle("overlay-active");
      });
      modalKey.addEventListener("submit", () => {
        const sendApi = newContainer.querySelector(
          "input[type ='password']"
        ).value;
        if (sendApi) {
          setApiKey(sendApi);
          navigateTo("/grupalChat", {});
        }
      });
      overlay.classList.toggle("overlay-active");
    } else {
      navigateTo("/grupalChat", {});
    }
  });

  modal.addEventListener("click", () => {
    modalContent.classList.toggle("modal-active");
    overlay.classList.toggle("overlay-active");
  });
  close.addEventListener("click", () => {
    modalContent.classList.toggle("modal-active");
    overlay.classList.toggle("overlay-active");
  });

  //search
  const searchPokemons = newContainer.querySelector("input[type='text']");
  const form = newContainer.querySelector("#formFilters");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    currentData = [];
    const value = searchPokemons.value;
    const findPokemons = data.find((data) => data.name.toLowerCase() === value);
    if (findPokemons) {
      currentData.push(findPokemons);
      newContainer.replaceChild(Cards(currentData), newContainer.children[2]);
      searchPokemons.value = "";
    } else {
      const container = document.createElement("section");
      container.classList.add("container-modal");
      overlay.classList.toggle("overlay-active");
      container.innerHTML = `<i class="fa-solid fa-xmark"></i>
                              <img src="./assets/pokemones/icono-cerrar.png" alt="Error"/>
                              <p>Pokemon no encontrado</p>`;
      container.querySelector(".fa-xmark").addEventListener("click", () => {
        container.remove();
        overlay.classList.toggle("overlay-active");
      });
      newContainer.appendChild(container);
      searchPokemons.value = "";
    }
    addImageListeners();
  });

  // filter
  const filterType = newContainer.querySelector(
    "select[data-testid='select-filter']"
  );

  filterType.addEventListener("change", () => {
    const selectedFilter = filterType.value;
    currentData = filterData(data, "typeName", selectedFilter);
    currentData = sortData(currentData, "name", sortOrderSelect.value);
    newContainer.replaceChild(Cards(currentData), newContainer.children[2]);

    addImageListeners();
  });

  // sort

  sortOrderSelect.addEventListener("change", () => {
    const sortOrder = sortOrderSelect.value;
    currentData = sortData(currentData, "name", sortOrder);
    newContainer.replaceChild(Cards(currentData), newContainer.children[2]);

    addImageListeners();
  });

  //reset
  const resetbutton = newContainer.querySelector('[type="reset"]');
  resetbutton.addEventListener("click", () => {
    currentData = data;
    newContainer.replaceChild(Cards(currentData), newContainer.children[2]);

    addImageListeners();
  });

  //stadistic
  const stadistic = newContainer.querySelector("canvas[name='myChart']");
  const updateChart = (names, nroPokemons) => {
    // eslint-disable-next-line no-undef
    new Chart(stadistic, {
      type: "bar",
      data: {
        labels: names,
        datasets: [
          {
            label: "# of Pokemons for type",
            data: nroPokemons,
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
  };

  const resultchart = computeStats(data);
  const names = resultchart.names;

  const nroPokemons = resultchart.nroPokemons;
  updateChart(names, nroPokemons);

  //Navigate  to next page
  const addImageListeners = () => {
    const imagePokemon = newContainer.querySelectorAll(".imageBtn");
    imagePokemon.forEach((pokemon) => {
      pokemon.addEventListener("click", () => {
        navigateTo(`/detailCard`, {
          name: pokemon.getAttribute("alt").slice(0, -1),
        });
      });
    });
  };

  addImageListeners();

  return newContainer;
};
