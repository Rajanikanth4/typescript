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
var a, b, result;
(_a = { a: 10, b: 20, c: 100, d: 500, e: 600 }, (a = _a.a, b = _a.b), result = __rest(_a, ["a", "b"]));
console.log(a);
console.log(b);
console.log(result);
var car = {
    name: "benz",
    model: "2021",
    price: "2000000"
};
var brand = car.name;
console.log(brand);
