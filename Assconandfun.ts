class Income{
    income:number;
    // var a:number=1, b:number=99;
    constructor(income){
        this.income=income;
    }
    source(){
        console.log("the monthly income is"+ this.income);
    }
     calculate_discount(a:number,b:number = 0.50) { 
        var discount = a * b; 
        console.log("Discount Amount: ",discount); 
     } 
     
}
class Expense extends Income{
    exp:number;
    constructor(income, exp){
        super(income)
        this.exp=exp;
    }
    expen(){
    console.log("the montly expense is"+ this.exp)
    }
    savings(){
        console.log("the monthly savins is :")
        console.log(this.income-this.exp)
    }
}
let l=new Expense(20000, 5000);
l.calculate_discount(5, 10)
l.savings();
