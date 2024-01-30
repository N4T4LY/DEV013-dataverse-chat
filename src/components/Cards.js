export const Cards = (data) => {
  let html = "";
  const ul = document.createElement("ul");
  const getypecolor = (color) => {
    let lower = "";
    if (color) {
      lower = color.toLowerCase();
    }
    switch (lower) {
      case "fire":
        return "#C33030";
      case "grass":
        return "#55B870";
      case "poison":
        return "#7D3EA4";
      case "water":
        return "#5594B8";
      case "electric":
        return "#AAB855";
      case "fairy":
        return "#B85567";
      case "ground":
        return "#B89055";
      case "fighting":
        return "#DB9731";
      case "normal":
        return "#CBBBA3";
      case "flying":
        return "#30A3C7";
      case "ghost":
        return "#3B0B46";
      case "stone":
        return "#61290e";
      case "bug":
        return "#33A021";
      case "psychic":
        return "#BC2D47";

      default:
        return "black";
    }
  };

  data.forEach((pokemon) => {
    let type = "";
    let weaknesses = "";

    // Agrega colores dependiendo del tipo que tenga cada pokemon
    const types = pokemon.type.typeName;
    let background;
    let style;

    if (types.length === 1) {
      background = getypecolor(types[0]);
      style = `style="background-color: ${background};"`;
    } else {
      const color1 = getypecolor(types[0]);
      const color2 = getypecolor(types[1]);
      background = `linear-gradient(${color1}, ${color2})`;
      style = `style="background: ${background};"`;
    }
    // --

    // Agrega imagenes del tipo de cada pokemón
    for (let i = 0; i < pokemon.type.typeImage.length; i++) {
      type += `<img src=${pokemon.type.typeImage[i]} alt=${pokemon.name}/>`;
    }
    // --

    // Agrega imagenes de las debilidades de cada pokemón
    for (let i = 0; i < pokemon.weaknesses.weaknessesImage.length; i++) {
      weaknesses += `<img src=${pokemon.weaknesses.weaknessesImage[i]} alt=${pokemon.name}/>`;
    }

    html += ` <li itemtype="pokemons" itemscope>
      <div itemprop="type"  ${style} class="type">
        ${type}
      </div>
      <div itemprop="image" class="image">
        <img src=${pokemon.image} alt=${pokemon.name}/>
      </div>
      <h1 itemprop="name" class="name">${pokemon.name}</h1>
      <h3>Debilidades</h3>
      <div itemprop="weaknesses" class="weaknesses">${weaknesses}</div>
    </li>`;
  });
  ul.innerHTML = html;
  return ul;
};
