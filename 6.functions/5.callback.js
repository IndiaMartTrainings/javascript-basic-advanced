function one(param){
    console.log(param)
    return param()
}

console.log(
    one(function(){
            return "hello"
        })
)
