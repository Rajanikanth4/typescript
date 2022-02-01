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
var A = /** @class */ (function () {
    function A(ticket) {
        this.ticket = ticket;
    }
    A.prototype.price = function () {
        console.log("the ticket" + this.ticket);
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(ticket, platform) {
        var _this = _super.call(this, ticket) || this;
        _this.platform = platform;
        return _this;
    }
    B.prototype.travel = function () {
        console.log("the ticket price is" + this.ticket);
        console.log("the platform number is" + this.platform);
    };
    return B;
}(A));
var obj = new B(2, 5);
obj.price();
obj.travel();
