var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.str = "hello";
        this.str2 = "world";
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj = new AgriLoan(10, 1);
console.log("Interest is : " + obj.interest + " Rebate is : " + obj.rebate);
