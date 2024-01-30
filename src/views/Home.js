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

  //search



  // filter



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


  return newContainer;
};
