var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.disp = function () {
        console.log("Engine is  :   ");
    };
    return Car;
}());
//  addition()
//  subtraction()
//  multipl()
var obj = new Car();
console.log(obj);
console.log(obj.disp);
console.log(obj.disp());
