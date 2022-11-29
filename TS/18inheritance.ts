
// Single - Every class can at the most extend from one parent class
// Multiple - A class can inherit from multiple classes. TypeScript doesn't support multiple inheritance.
// Multi-level - The following example shows how multi-level inheritance works.

class Shape { 
    Area:number 
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
 
 class Circle extends Shape { 
    disp():void { 
       console.log("Area of the circle:  "+this.Area) 
    } 
 }
   
 var obj = new Circle(223); 
 obj.disp()
