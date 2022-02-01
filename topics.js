// arrow functions
var add = function (x, y) { return x + y; };
var sum = add(2, 3);
console.log(sum);
var add1 = function (x, y) {
    return x + y;
};
var sum1 = add1(3, 3);
console.log(sum1);
// filter
var numbers = [1, 0, -5, -3, 3, 6];
var numberfilter = numbers.filter(function (value) { return value >= 0; });
console.log(numberfilter);
// map
var number1 = [1, 2, 3, 4];
var x = 10;
function add2(ele) {
    return ele * x;
}
var result = number1.map(add2);
console.log(result);
