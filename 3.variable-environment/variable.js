// function b(){
//     var c;
// }

// function a(){
//      c=2;
//     b()
// }

// var c =1;
// a()
// console.log(c)

function one(){
    var myvar;
}

function two(){
    var myvar =2
    console.log(myvar)
    one()
}

var myvar =1;
console.log(myvar)
two()
console.log(myvar)