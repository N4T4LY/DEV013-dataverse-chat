export const Filters = () => {
    const main = document.createElement("main");
    const form = document.createElement("form");
    const search = document.createElement("section");
    const filters = document.createElement("section");
    const resetFilters = document.createElement("section");
    const stadistic = document.createElement("section");
    const overlay=document.createElement("section");
    const modal=document.createElement("section");
    
    form.setAttribute("id", "formFilters");
    filters.setAttribute("class", "filters");
    stadistic.setAttribute("id", "myBtn");
    modal.setAttribute("class","modal-content");
    overlay.setAttribute("class","overlay")
    search.innerHTML = `<img src="assets/pokemones/pokebola.png" alt="" /><input autocomplete="off" type="text"

    placeholder="Buscar Pokémon"
      />
    `;
    filters.innerHTML = `<label for="type">Filtrar por tipo:</label>
    <select name="type" id="type" data-testid="select-filter">
      <option value="default" >----</option>
      <option value="Fire">Fuego</option>
      <option value="Water">Agua</option>
      <option value="Electric">Eléctrico</option>
      <option value="Fighting">Lucha</option>
      <option value="Normal">Normal</option>
      <option value="Grass">Planta</option>
      <option value="Psychic">Psiquico</option>
      <option value="Poison">Veneno</option>
      <option value="Ghost">Fantasma</option>
      <option value="Fairy">Hada</option>
      <option value="Ground">Tierra</option>
      <option value="Bug">Bicho</option>
      <option value="Stone">Roca</option>
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
    modal.innerHTML=`<i class="fa-solid fa-xmark"></i>
    <h2>Estadisticas Por Tipo</h2>
    <canvas id="myChart" name="myChart"></canvas>`;
    overlay.innerHTML=``;


    form.appendChild(search);
    form.appendChild(filters);
    form.appendChild(resetFilters);
    form.appendChild(stadistic);
    
    main.appendChild(overlay);
    main.appendChild(modal)
    main.appendChild(form);
   
    return main;
  };