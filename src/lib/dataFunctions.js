export const sortData = (data, sortBy, sortOrder) => {
  if (data.length === 0) {
    return false;
  }
  //const sortedData = [...data]; //create copy array
  // console.log(sortedData);

  data.sort((a, b) => {
    const nameA = a[sortBy].toLowerCase();
    const nameB = b[sortBy].toLowerCase();

    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
      //console.log(a.name.localeCompare(b.name))
    } else if (sortOrder === "desc") {
      return nameB.localeCompare(nameA);
      //console.log(b.name.localeCompare(a.name))
    }
  });

  return data;
};

export const filterData = (data, filterBy, value) => {
  const result = data.filter((type) => type.type[filterBy].includes(value));
  return result;
};

export const computeStats = (originalData) => {
  let names = [];
  // eslint-disable-next-line no-undef
  const uniqueType = new Set();

  originalData.forEach((data) => {
    const types = data.type.typeName;
    types.forEach((el) => {
      uniqueType.add(el);
    });
  });

  names = Array.from(uniqueType);

  const nroPokemons = names.map((typeName) =>
    originalData.reduce((accumulator, pokemon) => {
      if (pokemon.type.typeName.includes(typeName)) {
        accumulator += 1;
      }
      return parseInt(accumulator);
    }, 0)
  );
  return {
    names,
    nroPokemons,
  };
};
