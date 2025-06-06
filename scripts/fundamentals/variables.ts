/* eslint-disable */
// @ts-nocheck

// Various testing of variables

// TODO var, let, const

const me = { name: 'bx2h' }
const obj = {
    me,
}

obj.me = 'someone else'
console.log(me, obj.me) // { name: 'bx2h' } someone else

me.name = 'another person'
console.log(me, obj.me) // { name: 'another person' } someone else

// TODO hoisting
