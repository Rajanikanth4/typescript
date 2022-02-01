var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var audi = /** @class */ (function () {
    function audi() {
    }
    audi.prototype.craze = function () {
        console.log("the speed of the car is unstoppable");
    };
    return audi;
}());
var benz = /** @class */ (function (_super) {
    __extends(benz, _super);
    function benz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    benz.prototype.craze1 = function () {
        console.log("the benz is awsome");
    };
    return benz;
}(audi));
var obj2 = new benz();
obj2.craze();
obj2.craze1();
