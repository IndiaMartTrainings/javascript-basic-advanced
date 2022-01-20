//console.log(multiply(2)(3)(4)) //24

function multiply(x){
    return function(y){
     return  function(z){
        return x*y*z
     }
    }
}

var a =10;
var b = a;
    a =20;

 console.log(a)
 console.log(b)

 var x =[1,2]
 var y = x
  x.push(3)

  console.log(x)
  console.log(y)

var m =[1,2]
var n = m
m =[1,2,3]
 
console.log(m)
console.log(n)
 

var output = 1+ 2+ "Uma" + 3+ 4 + null + undefined

console.log(output, typeof output)

var output1 = (function(x){
    delete x
    return x
})(0)

console.log(output1)

var x =1

var output2 =(function(){
    delete x;
    return x
})()

console.log(output2)

var output3 =(function(x){
    delete x.id
    return x
})({id:1})

console.log(output3)

var array =['a', 'b', 'c' ,'d', 'e', 'f']

//Method 1
//array.length =0;

// Method 2
//array =[]

// Method 3
//array.splice(0, array.length)


// Method 4
//array = array.slice(1,1)

// Method 5
// var size = array.length
// for(var i=0; i<=size; i++){
//     array.pop()
// }


// Method 6
// var size = array.length
// for(var i=0; i<=size; i++){
//     array.shift()
// }

// Method 7 
while(array.length){
    console.log('using while loop')
    array.pop()
}

console.log(array)
console.log(array.length)