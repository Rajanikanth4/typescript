// array function
let numbers=[2,65,4,26];
console.log(numbers[0])
console.log(numbers[1])
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}
 
for(let i in numbers){
    console.log(numbers[i])
}

// array destruction
var a,b,result
({a,b,...result}={a:10, b:20, c:100, d:500, e:600})
console.log(a)
console.log(b)
console.log(result)

// spread operator
var [m,n,...restof]=[2,5,6,5,9,7]
console.log(m)
console.log(n)
console.log(...restof)