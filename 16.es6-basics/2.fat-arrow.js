let add = function(x, y){
    return x+y;
}

console.log(add(10,20))

// Re-write using fat arrow =>

let sum = (x, y) =>{
    return x+y;
}

console.log(sum(40,60))
/**
 * ? () =>
 * ? () => {return statement}
 * * Both are same
 */

let addition = (x, y) => x+y

console.log(addition(50,70))

// block {}
let adding = (x, y) => { return x+y}

console.log(adding(70,70))


// sort an array
// let numbers = [4,2,6]

// numbers.sort(function(a,b){
//     return b-a
// })

// console.log(numbers)

// With return 
// let numbers = [4,2,6]

// numbers.sort((a,b) =>{
//     return b-a
// })

// console.log(numbers)

// Without Return 

let numbers = [4,2,6]

numbers.sort((a,b) => b-a)

console.log(numbers)

/**
 * ? (p) => statement
 * ?  p => statement
 * * Both are same
 */

let names = ["Scott", "Adam", "Tuan", "Uma","Siva"]

let lengths = names.map(name =>name.length)

console.log(lengths)

// With no Paramaters 
let logDocument = () => console.log(window.document)
logDocument()

// line breaks 

// let multiply =(x,y) 
// => x*y

let multiply =(x,y) => 
x*y
console.log(multiply(10,20))

// object literal 

// let setColor = function(color){
//     return {value: color}
// }

// let backGorundColor = setColor('green')
// console.log(backGorundColor)

// let setColor = (color) =>{
//     return {value: color}
// }

// let backGorundColor = setColor('green')
// console.log(backGorundColor)

let setColor = (color) =>({value: color})


let backGorundColor = setColor('green')
console.log(backGorundColor)
