interface loan{
    loan();
}
class Home implements loan{
    loan(){
        console.log("The loan has been approved");
    }
}

let obj2=new Home();
obj2.loan();
