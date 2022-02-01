class A{
    ticket:number;
    constructor(ticket){
        this.ticket=ticket
    }
    price(){
    console.log("the ticket" + this.ticket)
    }
}
class B extends A{
    platform:number
    constructor(ticket,platform){
        super(ticket)
        this.platform=platform
    }
    travel(){
        console.log("the ticket price is"+this.ticket)
        console.log("the platform number is"+this.platform)
    }
}
let obj=new B(2, 5);
obj.price()
obj.travel()