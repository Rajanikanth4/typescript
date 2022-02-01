//access array

let fruits:string[]=["appale", "banana", "orange"];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
console.log(fruits[2]);
console.log(fruits[1]);
console.log(fruits[0]);
var x,y;
[x,y]=[5,7];
console.log(x);
console.log(y);

var z,y;
[z,y]=["mca", "btach"];
console.log(z);
console.log(y);

// spread operator
 var [r,k,...restOf]=[5,6,4,2,5,5];
console.log(r);
console.log(k);
console.log(restOf);

let fruit1:string[]=["apple", "banana", "pineapple"];
console.log(...fruit1);
// destructors
var m,n,restof;
({m,n,...restof}={m:10, n:20, z:60, f:70});
console.log(m);
console.log(n);
console.log(restof);
 
//map
 let array1=[1,5,12];
  array=array1.map((item)=>{
      return item;
  })
console.log(array);

//foreach method 
let record=[99,100,101,102];
records.forEach(displays);
function displays(item){
    console.log(item);
}