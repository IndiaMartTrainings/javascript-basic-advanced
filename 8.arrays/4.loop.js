var names = ["Scott", "Adam","Tuan", "Uma"]


// for loop
for(var i=0; i<names.length; i++){
    console.log(i, names[i])
}

// forEach
names.forEach(function(name, index){
    console.log(index, name)
})

// map

names.map(function(name, index){
    console.log(index, name)
})


// forEach
var namesForEach = names.forEach(function(name, index){
                    console.log(index, name)
                    return name
                })

// map

var namesMap = names.map(function(name, index){
                    console.log(index, name)
                    return index + ' ' +name
                })

console.log(namesForEach)
console.log(namesMap)

// using for..of
for(var name of names){
    console.log(name)
}
// using for..in

for(var name in names){
    console.log(name)
}

// getting name. index using for..of
for(var [name, index] of names.entries()){
    console.log(name, index)
}

var numbers =[10,20,30,40]

var newArray =[]
for(var num of numbers){
    newArray.push(num)
    if(num===30){
        newArray.push(35)
    }
   
}

console.log(newArray)

let array = ['item 1', 'item 2', 'item 3'],
    insertAtIndex = 0,
    itemsToRemove = 0;
    
array.splice(insertAtIndex, itemsToRemove, 'insert this string on index 0');

console.log(array);

var numbers =[10,20,30,40]

numbers.splice(3, 0, 35)

console.log(numbers)

console.log([[1,2,3],[3,4,5]])