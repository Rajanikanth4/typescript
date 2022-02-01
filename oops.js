var car = /** @class */ (function () {
    function car() {
        this.speed = 20;
    }
    car.prototype.cspeed = function () {
        console.log("the speed of the car is" + this.speed);
    };
    car.prototype.acc = function () {
        this.speed += 50;
    };
    return car;
}());
var obj = new car;
obj.cspeed();
obj.acc();
obj.cspeed();
