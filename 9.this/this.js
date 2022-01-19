console.log(this)

function sample(){
    console.log(this)
}

sample()

// Problem 

var obj = {
    name: "uma",
    getName: function(){
        console.log(this)
        this.name = "mahesh"
        console.log(this)

        var updateName = function(){           
            this.name = "umesh"
            console.log(this)
        }
        updateName()
    }
}

obj.getName()

// Solution 

var obj = {
    name: "uma",
    getName: function(){
        var self = this
        console.log(self)
        self.name = "mahesh"
        console.log(self)

        var updateName = function(){           
            self.name = "umesh"
            console.log(self)
        }
        updateName()
    }
}

obj.getName()