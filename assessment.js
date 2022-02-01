// Function
function add(a, b) {
    return a + b;
}
var sum = add(2, 5);
console.log(sum);
//  arrowFunction
var add1 = function (a, b) { return a * b; };
var sum1 = add1(2, 3);
console.log(sum1);
// control statements
// if
var x = 1;
if (x = 1) {
    console.log("correct");
}
// if else
var y = 10;
if (y % 2 == 0) {
    console.log("even number");
}
else {
    console.log("not even");
}
//if_else_if
var age = 2;
if (age < 18 && age > 1) {
    console.log("minor");
}
else if (age > 18) {
    console.log("major");
}
else {
    console.log("just born");
}
// for
var numbers = [1, 2, 3, 4, 5];
for (var i_1 = 0; i_1 < numbers.length; i_1++) {
    console.log(numbers[i_1]);
}
// while
var text = "";
var i = 0;
while (i < 2) {
    text += "The number is " + i;
    i++;
}
console.log(text);
// do-while
var c = 0;
do {
    console.log(c);
    c++;
} while (c < 3);
// for-in-loop
var numbers1 = [1, 2, 3, 4, 5];
for (var i_2 in numbers1) {
    console.log(numbers1[i_2]);
}
//  filter
var ages = [22, 23, 24, 35];
ages.filter(myAge);
function myAge(age) {
    if (age < 25) {
        console.log(age);
    }
}
