// arrow function

// let add=(a,b)=>a*b;
// let sum=add(2,5);
// console.log(sum);

// let numbers=[2,5,6,3];
// const mul=numbers.map((items)=>{
//     return items*2
// })
// console.log(mul)

// interface
interface car{

    speed();
}
class audi implements car{
    speed(){
        console.log("the car speed is 100")
    }
}
class benz extends audi{
    price(){
        console.log("the price of the car is 100000")
    }
}
let k=new benz();
k.speed()
k.price()