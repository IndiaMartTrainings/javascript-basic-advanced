let array = ["Scott", "Adam", "Tuan"]

let [firstName, lastName, anothername] = array

console.log(firstName) // sets firstName as arr[0]
console.log(lastName) // sets firstName as arr[1]
console.log(anothername)

// split()

let [fName, lName] ="John Galt".split(" ")

console.log(fName, lName)

let [name1,,,name3] = ["Scott", "Adam", "Tuan"]

console.log(name1)
console.log(name3)

// Object destructuring

let user = {
    name: 'Scott',
    age: 30, 

}

for(let [key, value] of Object.entries(user)){
    console.log(`${key} : ${value}`)
}

let {fullName, age} = user

console.log(fullName)
console.log(age)

 let student = {
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

let {city, address, company} = student
let {name, website} = company

console.log(city)
console.log(address)
console.log(name)
console.log(website)