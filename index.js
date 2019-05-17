// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(_driver) {
  drivers.push(_driver)
}

function destructivelyPrependDriver(_driver) {
  return drivers.unshift(_driver);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop(); 
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(_driver) {
  result = drivers.slice();
  result.push(_driver);
  return result;
}

function prependDriver(_driver) {
  result = drivers.slice();
  result.unshift(_driver);
  return result;
}

function removeLastDriver() {
  return drivers.slice(0, -1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}