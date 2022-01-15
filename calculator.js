function sum(a, b) {
  if (!a) {
    a = 0
  }
  if (!b) {
    b = 0
  }
  return a + b;
}

function subtract(a = 0, b = 0) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error(`We cannot divide a number by 0`);
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
