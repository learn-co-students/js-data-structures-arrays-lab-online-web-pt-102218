// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}
function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    new_driver = [name]
    new_drivers = ["Milo", "Otis", "Garfield", ... new_driver]

    return new_drivers
}

function prependDriver(name) {
    new_driver = [name]
    new_drivers = [...new_driver, "Milo", "Otis", "Garfield"]

    return new_drivers
}

function removeLastDriver() {
    new_drivers = drivers.slice(0, drivers.length - 1)
    return new_drivers 
}

function removeFirstDriver() {
    new_drivers = drivers.slice(1)
    return new_drivers
}