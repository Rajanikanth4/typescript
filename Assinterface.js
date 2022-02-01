var Home = /** @class */ (function () {
    function Home() {
    }
    Home.prototype.loan = function () {
        console.log("The loan has been approved");
    };
    return Home;
}());
var obj2 = new Home();
obj2.loan();
