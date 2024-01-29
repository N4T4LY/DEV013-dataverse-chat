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
