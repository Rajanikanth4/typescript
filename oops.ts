// class
class car{
    speed:number;
    constructor(){
        this.speed=20;
    }
    cspeed(){
        console.log("the speed of the car is" + this.speed);
    }
    acc(){
        this.speed+=50;
    }

}
let obj=new car;
obj.cspeed();
obj.acc();
obj.cspeed();

