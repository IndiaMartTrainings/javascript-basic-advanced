// var person1 = Object.create({})
// var person2 =new Object()
// var person3 = {}

// console.log(person1)
// console.log(person2)
// console.log(person3)

/**
 * ? Object.create(null) creates an null object 
 * ? Object.create({}) creates a normal object
 */
var person = Object.create(null)

person["firstName"] ="Scott"
person["lastName"] ="Desatnick"

var cityName ="city"

person[cityName] ="Boston"

person["address"] ={}

person["address"]["state"] ="massachusetts"
person["address"]["country"] = "USA"

person.company ={}
person.company.name = "India Mart"
person.company.website = "https://www.indiamart.com/"

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["city"])

console.log(person.company.name)
console.log(person.company.website)