import data from "../data/dataset.js";
import { Cards } from "../components/Cards.js";
import { Header } from "../components/Header.js";
import { Filters } from "../components/Filters.js";
import { Footer } from "../components/Footer.js";
import { sortData, filterData, computeStats } from "../lib/dataFunctions.js";

export const Home = () => {
  const newContainer = document.createElement("section");
  let currentData = [...data];
  // appenChild -> un solo elemento
  // append -> varios elementos
  newContainer.appendChild(Header());
  newContainer.appendChild(Filters());
  newContainer.appendChild(Cards(data));
  newContainer.appendChild(Footer());
  
  //modal
  const modal = newContainer.querySelector("#myBtn");
  const modalContent=newContainer.querySelector(".modal-content");
  const overlay = newContainer.querySelector(".overlay");
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



  // filter
  const filterType = newContainer.querySelector(
    "select[data-testid='select-filter']"
  );;

  filterType.addEventListener("change", () => {
    const selectedFilter = filterType.value;
    console.log(selectedFilter);
    currentData = filterData(data, "typeName", selectedFilter);
    currentData = sortData(currentData, "name", sortOrderSelect.value);
    console.log(currentData);
    newContainer.replaceChild(Cards(currentData),newContainer.children[2])
  });
  



  // sort
  const sortOrderSelect = newContainer.querySelector(
    "select[data-testid='select-sort']"
  );
  console.log(sortOrderSelect);
  sortOrderSelect.addEventListener("change", () => {
    const sortOrder = sortOrderSelect.value;
    console.log(sortOrder)
    currentData = sortData(currentData, "name", sortOrder);
    console.log(currentData,newContainer.children[2])
    newContainer.replaceChild(Cards(currentData),newContainer.children[2])
  });


  //stadistic
  const stadistic = newContainer.querySelector("canvas[name='myChart']");
  console.log(stadistic);
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

  return newContainer;
};
