var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
// array function
var numbers = [2, 65, 4, 26];
console.log(numbers[0]);
console.log(numbers[1]);
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (var i in numbers) {
    console.log(numbers[i]);
}
// array destruction
var a, b, result;
(_a = { a: 10, b: 20, c: 100, d: 500, e: 600 }, (a = _a.a, b = _a.b), result = __rest(_a, ["a", "b"]));
console.log(a);
console.log(b);
console.log(result);
// spread operator
var _b = [2, 5, 6, 5, 9, 7], m = _b[0], n = _b[1], restof = _b.slice(2);
console.log(m);
console.log(n);
console.log.apply(console, restof);
