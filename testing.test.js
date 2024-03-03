const { sum, provideNum } = require("./functions");



test("adds 1 + 2 equals to 3", () => {
  expect(sum(1, 2)).toBe(3);
});




// toBe is for primitive data
test("2 plus 2 equals 4", () => {
  expect(2 + 2).toBe(4);
});




// to equal for non-primitive data
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});





// toBeFalsy
test("null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
});





// toBeTruthy
test("one is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});





// toThrow
test("throws error on invalid input", () => {
  expect(() => {
    provideNum("hello");
  }).toThrow();
});
