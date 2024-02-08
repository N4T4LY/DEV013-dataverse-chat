import data from "../data/dataset.js";
import {
  Cards
} from "../components/Cards.js";
import {
  Header
} from "../components/Header.js";
import {
  Filters
} from "../components/Filters.js";
import {
  Footer
} from "../components/Footer.js";
import {
  sortData,
  filterData,
  computeStats
} from "../lib/dataFunctions.js";
import {
  navigateTo
} from "../router.js";

export const Home = () => {
  const newContainer = document.createElement("section");
  newContainer.setAttribute("class", "newContainer")
  let currentData = [...data];
  // appenChild -> un solo elemento
  // append -> varios elementos
  newContainer.appendChild(Header());
  newContainer.appendChild(Filters());
  newContainer.appendChild(Cards(data));
  newContainer.appendChild(Footer());
  
  //modal
  const modal = newContainer.querySelector("#myBtn");
  const modalContent = newContainer.querySelector(".modal-content");
  const overlay = newContainer.querySelector(".overlay");
  const sortOrderSelect = newContainer.querySelector(
    "select[data-testid='select-sort']"
  );
  const close = newContainer.querySelector(".fa-xmark");

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
      newContainer.replaceChild(Cards(currentData), newContainer.children[2])
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
  });

  // sort

  sortOrderSelect.addEventListener("change", () => {
    const sortOrder = sortOrderSelect.value;
    currentData = sortData(currentData, "name", sortOrder);
    newContainer.replaceChild(Cards(currentData), newContainer.children[2]);
  });

  //reset
  const resetbutton = newContainer.querySelector('[type="reset"]');
  resetbutton.addEventListener("click", () => {
    currentData = data;
    newContainer.replaceChild(Cards(currentData), newContainer.children[2]);
  });

  //stadistic
  const stadistic = newContainer.querySelector("canvas[name='myChart']");
  const updateChart = (names, nroPokemons) => {
    // eslint-disable-next-line no-undef
    new Chart(stadistic, {
      type: "bar",
      data: {
        labels: names,
        datasets: [{
          label: "# of Pokemons for type",
          data: nroPokemons,
          borderWidth: 1,
          backgroundColor: "#9BD0F5",
          font: {
            size: 14,
            weight: "bolder",
          },
        }, ],
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
  const imagePokemon = newContainer.querySelectorAll(".imageBtn");
  imagePokemon.forEach((pokemon) => {
    pokemon.addEventListener("click", () => {
     
      navigateTo(
        `/detailCard`,{name: pokemon.getAttribute("alt").slice(0, -1)}
      );
    });
  });


  return newContainer;
};
