export const Filters = () => {
  const main = document.createElement("main");
  const form = document.createElement("form");
  const search = document.createElement("section");
  const filters = document.createElement("section");
  const resetFilters = document.createElement("section");
  const stadistic = document.createElement("section");
  const overlay = document.createElement("section");
  const modal = document.createElement("section");

  form.setAttribute("id", "formFilters");
  filters.setAttribute("class", "filters");
  stadistic.setAttribute("id", "myBtn");
  modal.setAttribute("class", "modal-content");
  overlay.setAttribute("class", "overlay");
  search.innerHTML = `<img src="assets/pokemones/pokebola.png" alt="" /><input autocomplete="off" type="text"

    placeholder="Buscar Pokémon"
      />
    `;
  filters.innerHTML = `<label for="type">Filtrar por tipo:</label>
    <select name="type" id="type" data-testid="select-filter">
      <option value="default" >----</option>
      <option value="Fuego">Fuego</option>
      <option value="Agua">Agua</option>
      <option value="Eléctrico">Eléctrico</option>
      <option value="Lucha">Lucha</option>
      <option value="Normal">Normal</option>
      <option value="Planta">Planta</option>
      <option value="Psíquico">Psíquico</option>
      <option value="Veneno">Veneno</option>
      <option value="Fantasma">Fantasma</option>
      <option value="Hada">Hada</option>
      <option value="Tierra">Tierra</option>
      <option value="Bicho">Bicho</option>
      <option value="Roca">Roca</option>
    </select>
    <label for="name">Ordenar por nombre:</label>
    <select name="name" id="name" data-testid="select-sort">
      <option value="default">----</option>
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
    </select>`;
  resetFilters.innerHTML = `<button data-testid="button-clear" type="reset">
    Resetear Filtros
  </button>`;
  stadistic.innerHTML = `<i class="fa-solid fa-chart-simple"></i>`;
  modal.innerHTML = `<i class="fa-solid fa-xmark"></i>
    <h2>Estadisticas Por Tipo</h2>
    <canvas id="myChart" name="myChart"></canvas>`;
  // overlay.innerHTML=``;

  form.appendChild(search);
  form.appendChild(filters);
  form.appendChild(resetFilters);
  form.appendChild(stadistic);

  main.appendChild(overlay);
  main.appendChild(modal);
  main.appendChild(form);

  return main;
};
