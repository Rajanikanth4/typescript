// Map
var number = [2, 6, 5, 87];
var mul = number.map(function (items) {
    return items * 2;
});
console.log(mul);
// forEach
var sum = 0;
var numbers = [65, 44, 12, 4];
var m = numbers.forEach(myFunction);
function myFunction(item) {
    sum += item;
}
console.log(sum);
