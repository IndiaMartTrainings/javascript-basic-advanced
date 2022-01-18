// // var a; // Javascript execution engine assigns undefined value
// // console.log(a)

// // if(a === undefined) {
// //     console.log('a is undefined')
// // } else {
// //     console.log('a is undefined')
// // }

// // var a = undefined // we are assigning this value
// // console.log(a)

// // if(a === undefined) {
// //     console.log('a is undefined')
// // } else {
// //     console.log('a is undefined')
// // }

// function b (){
//     console.log('b is called')
// }

// b()

// console.log(a)
// var a ="Hello World"
// console.log(a)

// // STAGE 1

// function b(){

// }

// a = undefined

// // STAGE 2
// b() //- is called 'b is called'
// undefined
// //Hello World 

console.clear()
console.log('first')
setTimeout(function(){
    console.log('second')
}, 3000) // asynchronous
console.log('third')