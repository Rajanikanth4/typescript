//access array
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
var _a, _b;
var _c;
var fruit = ["appale", "banana", "orange"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log(fruits[2]);
console.log(fruits[1]);
console.log(fruits[0]);
var x, y;
_a = [5, 7], x = _a[0], y = _a[1];
console.log(x);
console.log(y);
var z, y;
_b = ["mca", "btach"], z = _b[0], y = _b[1];
console.log(z);
console.log(y);
// spread operator
var _d = [5, 6, 4, 2, 5, 5], r = _d[0], k = _d[1], restOf = _d.slice(2);
console.log(r);
console.log(k);
console.log(restOf);
var fruit = ["apple", "banana", "pineapple"];
console.log.apply(console, fruit);
// destructors
var m, n, restof;
(_c = { m: 10, n: 20, z: 60, f: 70 }, (m = _c.m, n = _c.n), restof = __rest(_c, ["m", "n"]));
console.log(m);
console.log(n);
console.log(restof);
//map
var array = [1, 5, 12];
array = array.map(function (item) {
    return item;
});
console.log(array);
//foreach method 
var records = [99, 100, 101, 102];
records.forEach(display);
function display(item) {
    console.log(item);
}
