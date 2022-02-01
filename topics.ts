// arrow functions
let add=(x:number, y:number)=>x+y;
let sum=add(2,3);
console.log(sum);

let add1=(x:number, y:number)=>{
    return x+y;
}
let sum1=add1(3,3);
console.log(sum1);

// filter
let numbers=[1,0,-5,-3,3,6];
let numberfilter=numbers.filter((value)=>value>=0);
console.log(numberfilter);

// map
 let number1=[1,2,3,4];
  let x=10;
 function add2(ele){
     return ele*x;
 }
 let result=number1.map(add2);
 console.log(result);