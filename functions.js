function sum(a, b) {
  return a + b;
}

function provideNum(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid Input");
  }
}

module.exports = { sum, provideNum };
