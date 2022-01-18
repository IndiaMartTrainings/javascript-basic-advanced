function hello(){

}

function Hey(){
    hello() // Can be invoked inside another functions 
}

var sayHello = function(){ // assign to a variable 

}

function callMe(method){ // passing function to a avariable
    method()
}

callMe(sayHello)