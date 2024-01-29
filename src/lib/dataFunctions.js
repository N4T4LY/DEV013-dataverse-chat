export const sortData = (data, sortBy, sortOrder) => {
  if (data.length === 0) {
    return false;
  }
  const sortedData = [...data]; //create copy array
  // console.log(sortedData);

  sortedData.sort((a, b) => {
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

  return sortedData;
};
