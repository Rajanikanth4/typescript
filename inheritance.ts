class A{
    speed:number;
    constructor(){
        this.speed=20;
    }
    abc(){
       console.log("rk");
    }
}
class B extends A{
    price:number;
    constructor(){
        super();
        this.price=1000000;
    }
   

    car(){
        console.log("the price of the car is"+this.price);
        console.log("the speed of the car is"+this.speed);

    }
}
let obj1=new B;
obj1.car();
obj1.abc();

