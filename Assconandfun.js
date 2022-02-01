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
var Income = /** @class */ (function () {
    // var a:number=1, b:number=99;
    function Income(income) {
        this.income = income;
    }
    Income.prototype.source = function () {
        console.log("the monthly income is" + this.income);
    };
    Income.prototype.calculate_discount = function (a, b) {
        if (b === void 0) { b = 0.50; }
        var discount = a * b;
        console.log("Discount Amount: ", discount);
    };
    return Income;
}());
var Expense = /** @class */ (function (_super) {
    __extends(Expense, _super);
    function Expense(income, exp) {
        var _this = _super.call(this, income) || this;
        _this.exp = exp;
        return _this;
    }
    Expense.prototype.expen = function () {
        console.log("the montly expense is" + this.exp);
    };
    Expense.prototype.savings = function () {
        console.log("the monthly savins is :");
        console.log(this.income - this.exp);
    };
    return Expense;
}(Income));
var l = new Expense(20000, 5000);
l.calculate_discount(5, 10);
l.savings();
