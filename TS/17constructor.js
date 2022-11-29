var Car = /** @class */ (function () {
    // Data Member Declaration END
    function Car(engn) {
        console.log(engn);
        this.engine = engn;
    }
    // constructor() {
    //     console.log("constructor calling");
    // }
    Car.prototype.disp = function () {
        console.log("Engine is  :   " + this.engine);
        return true;
    };
    return Car;
}());
//  addition()
//  subtraction()
//  multipl()
var obj = new Car("Mercy");
//  console.log(obj);
//  console.log(obj.disp);
console.log(obj.disp());
