/* eslint-disable */
// @ts-nocheck

// Various testing of inheritance / prototype

function Car(model, year) {
    this.model = model
    this.year = year
}
Car.prototype.wheels = () => {
    return 4
}

const bmw = new Car('bmw', '2023')
bmw.__proto__.type = 'car'
console.log(bmw.wheels()) // 4
console.log(bmw.type) // "car"

const vw = new Car('vw', '2022')
console.log(vw.wheels()) // 4
console.log(vw.type) // "car"

console.log(bmw.__proto__ === vw.__proto__) // true
console.log(bmw.__proto__ === Car.prototype) // true
console.log(Object.getPrototypeOf(bmw) === Car.prototype) // true
console.log(bmw.__proto__ === Car.__proto__) // false
console.log(bmw.prototype) // undefined

function Van(model, year) {
    Car.call(this, model, year)
}

Van.__proto__ = Car
Van.prototype.type = 'van'

const vwVan = new Van('vw', 2021)
console.log(vwVan.model) // vw
console.log(vwVan.type) // van
// console.log(vwVan.wheels()) // vwVan.wheels is not a function

function Van2(model, year) {
    Car.call(this, model, year)
}

Van2.prototype = Object.create(Car.prototype)
Van2.prototype.constructor = Van2 // otherwise the constructor points to

const vwVan2 = new Van2('vw', 2021)

console.log(vwVan2.model) // vw
console.log(vwVan2.type) // van
console.log(vwVan2.wheels()) // 4
console.log(vwVan2 instanceof Van2) // true
console.log(vwVan2 instanceof Car) // true
console.log(vwVan2.constructor === Van2) // true

// Classes
class CarClass {
    constructor(model) {
        this.model = model
    }
    wheels() {
        return 4
    }
}

const newBmw = new CarClass('bmw')
console.log(newBmw.wheels()) // 4
console.log(newBmw.model) // "bmw"

class VanClass extends Car {
    constructor(model) {
        super(model)
    }
    wheels() {
        return 6
    }
}

const newVw = new VanClass('vw')
console.log(newVw.wheels()) // 6
console.log(newVw.model) // "vw"
