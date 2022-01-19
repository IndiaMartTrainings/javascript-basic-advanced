var person = {
    firstName : 'Uma',
    lastName: 'Mahesh',
    age: 39
}

 person.city = 'Hyd'    // ADD
 person.firstName='Meka' // UPDATE
 delete person.age      // DELETE
console.log(person)    // READ

/**
 *  ? Object.preventExtensions()
 *  ? WE can't add new properties
 *  ? but we can edit and delete existing properties
 */

var preventObject = {
    name: 'Scott',
    city: 'Boston',
    age: 45
}

Object.preventExtensions(preventObject)

preventObject.email = 'scott@ef.com' // ADD
preventObject.name = 'Desatnick' // UPDATE
delete preventObject.city // DELETE
console.log(preventObject) // READ

/**
 *  ? Object.seal()
 *  ? We can edit the existing properties
 *  ? we can't delete the existing properties 
 *  ? we can't add new properties
 */

 var sealObject = {
    name: 'Scott',
    city: 'Boston',
    age: 45
}

Object.seal(sealObject)

sealObject.email = 'scott@ef.com' // ADD
sealObject.name = 'Desatnick' // UPDATE
delete sealObject.city // DELETE
console.log(sealObject) // READ

/**
 *  ? Object.freeze()
 *  ? We can edit the existing properties
 *  ? we can't delete the existing properties 
 *  ? we can't add new properties
 */

 var freezeObject = {
    name: 'Scott',
    city: 'Boston',
    age: 45,
    address : {
        state: 'massachusetts'
    }
}

Object.freeze(freezeObject)
Object.freeze(freezeObject.address)

freezeObject.email = 'scott@ef.com' // ADD
freezeObject.name = 'Desatnick' // UPDATE
delete freezeObject.city // DELETE

console.log(freezeObject) // READ
freezeObject.address.state ='USA'

console.log(freezeObject)

