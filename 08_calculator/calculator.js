const add = function(param1, param2) {
	const sum = param1 + param2;
  return sum;
};

const subtract = function(param3, param4) {
	const subtractResult = param3 - param4;
  return subtractResult;
};

const sum = function(array) {
	let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let multiplyResult = 1;
  for (let i = 0; i < array.length; i++) {
    multiplyResult = multiplyResult * array[i];
  }
  return multiplyResult;
};

const power = function(param5, param6) {
	const powerResult = Math.pow(param5, param6);
  return powerResult;
};

const factorial = function(param7) {
  let factorialResult = 1;
	if (param7 === 0) {
    return 1
  } else {
    for (let i = 1; i <= param7; i++) {
      factorialResult = factorialResult * i;
    }
    return factorialResult;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
