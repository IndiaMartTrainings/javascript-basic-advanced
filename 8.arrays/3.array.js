var data = [
            1,
            "Uma",
            true,
            null,
            undefined,
            function(name){
                return name
            },
            {name: "uma"},
            ["red", "blue", "yellow"]
        ]
console.log(data)

console.log(data[5](data[6].name))