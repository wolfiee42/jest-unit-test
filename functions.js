function sum(a, b) {
  return a + b;
}

function provideNum(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid Input");
  }
}

// async func trycatch
function fetchData(callback) {
  setTimeout(() => {
    callback("peanut Butter");
  }, 1000);
}

// async func Promise based
function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut Butter");
    }, 1000);
  }); 
}

module.exports = { sum, provideNum, fetchData, fetchPromise };
