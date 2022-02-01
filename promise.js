"use strict";
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
var n = 544, temp, sum = 0;
temp = n;
var result = new es6_promise_1.Promise(function (myResolve, myReject) {
    while (n < 0) {
        var r = n % 10;
        sum = sum * 10 + r;
        n = n / 10;
    }
    if (sum == temp) {
        myResolve("palindrome");
    }
    else {
        myReject("not palindrome");
    }
});
