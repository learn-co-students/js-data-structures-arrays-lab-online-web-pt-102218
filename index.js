// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

const destructivelyAppendDriver = (x)=>{
    drivers.push(x)
}

const destructivelyPrependDriver = (x)=>{
    drivers.unshift(x)
}

const destructivelyRemoveLastDriver = ()=>{
    drivers.pop()
}

const destructivelyRemoveFirstDriver = ()=>{
    drivers.shift()
}


const removeLastDriver = ()=>{
    return drivers.slice(0,drivers.length-1)
}

const appendDriver = (x)=>{
    return [...drivers,x]
}

const prependDriver = (x)=>{
    return [x, ...drivers]
}

const removeFirstDriver = ()=>{
    return drivers.slice(1,drivers.length)
}
