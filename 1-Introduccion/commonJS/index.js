//CommonJS require module

// console.log(globalThis)
const { sum } = require('./sum')
function sum (a, b) {
    return a + b
}

console.log(sum(1, 2))