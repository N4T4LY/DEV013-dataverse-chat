import { filterData, sortData, computeStats } from "../src/dataFunctions.js";

describe("SORTDATA", () => {
  // 1. Fn existe
  it("SORTDATA EXISTS", () => {
    expect(typeof sortData).toBe("function");
  });
  // 2. fn funciona (comportamiento deseado)
  it("SORT ASCENDING", () => {
    const TEST_SORT = [
      { name: "Bulsaur" },
      { name: "Abra" },
      { name: "Caterpie" },
    ];
    const sortBy = "name";
    const sortOrder = "asc";
    expect(sortData(TEST_SORT, sortBy, sortOrder)).toEqual([
      { name: "Abra" },
      { name: "Bulsaur" },
      { name: "Caterpie" },
    ]);
  });
  it("SORT DESCENDING", () => {
    const TEST_SORT = [
      { name: "Bulsaur" },
      { name: "Abra" },
      { name: "Caterpie" },
    ];
    const sortBy = "name";
    const sortOrder = "desc";
    expect(sortData(TEST_SORT, sortBy, sortOrder)).toEqual([
      { name: "Caterpie" },
      { name: "Bulsaur" },
      { name: "Abra" },
    ]);
  });
  // 3. Estresar al test
  it("DATA EMPTY", () => {
    const TEST_SORT = [];
    const sortBy = "name";
    const sortOrder = "asc";
    // expect(sortData(TEST_SORT, sortBy, sortOrder )).toBe(false)
    expect(sortData(TEST_SORT, sortBy, sortOrder)).toBeFalsy();
  });
});

describe("FILTERDATA", () => {
  it("FILTERDATA EXISTS", () => {
    expect(typeof filterData).toBe("function");
  });

  it("FILTERDATA FOR POKEMONS", () => {
    const TEST_FILTER = [
      { name: "Bulsaur", type: { typeName: ["Poison", "Grass"] } },
      { name: "Abra", type: { typeName: ["Psychic"] } },
      { name: "Ivysaur", type: { typeName: ["Poison", "Grass"] } },
    ];
    const filterBy = "typeName";
    const value = "Grass";
    expect(filterData(TEST_FILTER, filterBy, value)).toEqual([
      { name: "Bulsaur", type: { typeName: ["Poison", "Grass"] } },
      { name: "Ivysaur", type: { typeName: ["Poison", "Grass"] } },
    ]);
  });
});
