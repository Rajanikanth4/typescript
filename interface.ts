interface car{
    craze();
}
class audi implements car{
    craze(){
        console.log("the speed of the car is unstoppable");
    }
}
class benz extends audi{
    craze1(){
        console.log("the benz is awsome");
    }
}
let obj2=new benz();
obj2.craze();
obj2.craze1();