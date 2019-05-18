// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

let name = "Ralph";

function destructivelyAppendDriver(name) {
  drivers.push(name);
  return drivers;
}


function destructivelyPrependDriver(name) {
  drivers.unshift(name);
  return drivers;
}

function destructivelyRemoveLastDriver () {
  drivers.pop();
  return drivers;
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
  return drivers;
}

function appendDriver(name) {
  const newDrivers = drivers.slice();
  newDrivers.push(name);
  return newDrivers;
}

function prependDriver(name) {
  const coolDrivers = drivers.slice();
  coolDrivers.unshift(name);
  return coolDrivers;
}

function removeLastDriver() {
  const unwantedLast = drivers.slice();
  unwantedLast.pop();
  return unwantedLast;
}

function removeFirstDriver() {
  const unwantedFirst = drivers.slice();
  unwantedFirst.shift();
  return unwantedFirst;
}