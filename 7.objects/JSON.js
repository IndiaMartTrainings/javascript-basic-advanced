var person = {
    "firstName": "Scott",
    "lastName": "Meka"
}

console.log(person)

var customer = {
    "firstName": "Adam",
    "lastName": "Colson"
}

console.log(customer, typeof customer)
var stringifyCustomer = JSON.stringify(customer)
console.log(stringifyCustomer, typeof stringifyCustomer)


var parseCustomer = JSON.parse(stringifyCustomer)


console.log(parseCustomer, typeof parseCustomer)

 var userData = '{"name": "uma"}'
var data = JSON.parse(userData)

 console.log(data)