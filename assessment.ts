// Function
 function add(a,b){
     return a+b;
 }
 let sum=add(2,5);
 console.log(sum);

//  arrowFunction
let add1=(a,b)=>a*b;
let sum1=add1(2,3);
console.log(sum1);

// control statements
// if
let x=1;
if(x=1){
    console.log("correct");
}

// if else
let y=10;
if(y%2==0){
    console.log("even number");
}else{
    console.log("not even");
}

//if_else_if
let age=2;
if(age<18 && age>1){
    console.log("minor");
}else if(age>18){
    console.log("major");
}else{
    console.log("just born");
}

// for
let numbers=[1,2,3,4,5];
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

// while
let text = "";
let i = 0;
while (i < 2) {
  text += "The number is " + i;
  i++;
}
console.log(text)

// do-while
let c=0;
do{
    console.log(c)
    c++
}while(c<3);

// for-in-loop
let numbers1=[1,2,3,4,5];
 for(let i in numbers1){
     console.log(numbers1[i])
 }

//  filter
let ages=[22,23,24,35];
  ages.filter(myAge);
  function myAge(age){
       if(age<25){
           console.log(age);
       }
  }