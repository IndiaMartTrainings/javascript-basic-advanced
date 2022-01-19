console.log(this)

function sample(){
    console.log(this)
}

sample()

// problem 
var obj = {
    name: "manoj",
    getName: function(){
        console.log(this)
        this.name ="uma"
        console.log(this)

        var updateName = function(){
            this.name ="scott"
            console.log(this)
        }

        updateName()
    }
}

obj.getName()

// solution  using varable
var obj = {
    name: "manoj",
    getName: function(){
        var indiaMart = this

        console.log(indiaMart)
        indiaMart.name ="uma"
        console.log(indiaMart)

        var updateName = function(){
            indiaMart.name ="scott"
            console.log(indiaMart)
        }

        updateName()
    }
}

obj.getName()

// solution using bind method

// problem 
var obj = {
    name: "manoj",
    getName: function(){
        console.log(this)
        this.name ="uma"
        console.log(this)

        var updateName = function(){
            this.name ="scott"
            console.log(this)
        }.bind(this)

        updateName()
    }
}

obj.getName()

function sayHello(){
    console.log(this)
}

var output = sayHello.bind(this)
console.log(output())