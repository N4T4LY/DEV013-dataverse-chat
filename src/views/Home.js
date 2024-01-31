import data from "../data/dataset.js";
import { Cards } from "../components/Cards.js";
import { Header } from "../components/Header.js";
import { Filters } from "../components/Filters.js";
import { Footer } from "../components/Footer.js";
import { sortData, filterData, computeStats } from "../lib/dataFunctions.js";

export const Home = () => {
  const newContainer = document.createElement("section");
  newContainer.setAttribute("class","newContainer")
  let currentData = [...data];
  // appenChild -> un solo elemento
  // append -> varios elementos
  newContainer.appendChild(Header());
  newContainer.appendChild(Filters());
  newContainer.appendChild(Cards(data));
  newContainer.appendChild(Footer());

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
      // overlay.classList.toggle("overlay-active");
      container.innerHTML = `<i class="fa-solid fa-xmark"></i>
                              <img src="./assets/pokemones/icono-cerrar.png" alt="Error"/>
                              <p>Pokemon no encontrado</p>`;
      container.querySelector(".fa-xmark").addEventListener("click", () => {
        container.remove();
        // overlay.classList.toggle("overlay-active");
      });
      console.log(container)
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
    console.log(selectedFilter);
    currentData = filterData(data, "typeName", selectedFilter);
    currentData = sortData(currentData, "name", sortOrderSelect.value);
    console.log(currentData);
    newContainer.replaceChild(Cards(currentData), newContainer.children[2]);
  });

  // sort
  const sortOrderSelect = newContainer.querySelector(
    "select[data-testid='select-sort']"
  );
  console.log(sortOrderSelect);
  sortOrderSelect.addEventListener("change", () => {
    const sortOrder = sortOrderSelect.value;
    console.log(sortOrder);
    currentData = sortData(currentData, "name", sortOrder);
    console.log(currentData, newContainer.children[2]);
    newContainer.replaceChild(Cards(currentData), newContainer.children[2]);
  });

  //reset
  const resetbutton = newContainer.querySelector('[type="reset"]');
  resetbutton.addEventListener("click", () => {
    currentData = data;
    newContainer.replaceChild(Cards(currentData), newContainer.children[2]);
  });

  return newContainer;
};
