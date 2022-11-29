class Car {
    // Data Member Declaration START
    engine:string
    // Data Member Declaration END
    constructor(engn:string) { 
        console.log(engn);
        this.engine = engn 
     }   
    // constructor() {
    //     console.log("constructor calling");
    // }
    disp() { 
       console.log("Engine is  :   "+this.engine) 
        return true
    } 
 }

//  addition()
//  subtraction()
//  multipl()
 var obj = new Car("Mercy")
//  console.log(obj);
//  console.log(obj.disp);
 console.log(obj.disp());
 