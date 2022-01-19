var movies =["Avatar", "good Will Hunting", "Vanilla Sky", "Mars"]

var moviesString = movies.join(",")

console.log(moviesString, typeof moviesString)

var moviesArray = moviesString.split(",", 5)
console.log(moviesArray)