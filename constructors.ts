class Income{
    income:number;
    constructor(income){
        this.income=income;
    }
    source(){
        console.log("the monthly income is"+ this.income);
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
l.savings();
