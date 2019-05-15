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
   const out = drivers.concat(name)
    return out
}

function prependDriver(name) {
    const out = [name, ...drivers]
    return out
}
function removeLastDriver() {
   const out = [...drivers]
   out.splice(-1)
   return out
}

function removeFirstDriver() {
    return drivers.slice(1)
}