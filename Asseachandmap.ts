// Map
let number=[2,6,5,87]
let mul=number.map((items)=>{
    return items*2
})
console.log(mul)

// forEach
let sum=0;
const numbers = [65, 44, 12, 4];
let m=numbers.forEach(myFunction);

function myFunction(item) {
   sum+=item; 
}
console.log(sum)