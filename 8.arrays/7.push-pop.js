var data = [1,2,3]

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
data.push(data[9])
data.push(9)

console.log(data)
// data.push(5)
// data.push(6)
// data.unshift(0)
// data.unshift(-1)
// data.unshift(-2)
// console.log(data)

// // data.pop()
// // data.pop()
// // data.pop()
// // data.shift()
// // data.shift()
// // data.shift()
// data.push(customer)

// console.log(data)
// console.log(data[0])
// console.log(data[1])
// console.log(data[2])

var array = [1,2,3]
array[4]=9
console.log(array[3])
console.log(array)