var person = {}

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


var customer = {
    id: 1,
    firstName: 'Adam',
    lastName: 'Colson',
    city: 'sydney',
    address: {
        state: 'New South Wales"',
        country: 'Australia'
    },
    company: {
        name: 'Education First',
        website: 'https://education-first.com/'
    },
    getFullName: function(){
        return this.firstName + " " + this.lastName
    },
    colors: ["red", "blue", "yellow"],
    isAdmin : true,
    product: null,
    secretKey: undefined
}

console.log(customer)
console.log(customer.getFullName())
