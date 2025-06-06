/* eslint-disable */
// @ts-nocheck

// Various testing of javascript functions

// TYPES
const foo = () => {}
console.log(typeof foo) // "function"
console.log(foo.name) // "foo"
console.log(() => {}) // [Function (anonymous)]
console.log((() => {}).name, (() => {}).name === undefined) // undefined, "string"
console.log(typeof Function) // "function"
console.log(typeof Object) // "function"

// TODO test bind, apply, call

// TODO test closures

// HOISTING
console.log(fooDeclaration(2)) // 2 - function declarations are hoisted into global scope
// console.log(fooExpression(2)) // Error: Block-scoped variable 'fooExpression' used before its declaration
function fooDeclaration(num) {
    return num
}
const fooExpression = (num) => num

function aFunc() {
    bFunc()
    function bFunc() {
        console.log('hello')
    }
}
aFunc() // "hello"
// bFunc() // Errors, bFunc only hoisted into aFunc scope

var num = 5
function scopeHoisting() {
    // console.log(num) // undefined
    var num = 20
}
scopeHoisting()

// Arrow functions
function normalFunc() {
    console.log(arguments) // {"0" : [1,2,3], {1} : 4}
}

normalFunc([1, 2, 3], 4)

const arrowFunc = () => {
    // console.log(arguments); Cannot find name argumets
}
