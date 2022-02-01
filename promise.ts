import {Promise} from "es6-promise";
let n=544, temp, sum=0;
temp=n;
let result=new Promise(function(myResolve, myReject){
   while(n<0){
     let r=n%10;
      sum=sum*10+r;
     n=n/10;
   }
   if(sum==temp){
       myResolve("palindrome");
   }else{
       myReject("not palindrome")
   }
});
